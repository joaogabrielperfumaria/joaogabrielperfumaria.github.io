#!/usr/bin/env node
/**
 * Gera js/catalog.json a partir do estoque do Niche Premium (products + stocks,
 * a mesma junção do relatório `products-in-stock`), somente leitura.
 *
 * Uso: node scripts/sync-estoque.mjs [--dry] [--force]
 *   --dry    valida e reporta sem gravar
 *   --force  aceita queda acentuada na contagem (> 50%)
 *
 * Credencial: CONNECTION_STRING de produção (read-only) em credenciais-producao.txt, fora do
 * git (NICHE_ENV_FILE sobrescreve o caminho). O valor nunca é impresso. A consulta roda numa transação READ ONLY.
 * O JSON publicado leva só campos públicos: nada de saldo, código ou ID interno.
 */
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, renameSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "js", "catalog.json");
const ENV_FILE = process.env.NICHE_ENV_FILE ?? path.join(ROOT, "credenciais-producao.txt");
const args = new Set(process.argv.slice(2));

function fail(msg) {
  console.error(`ERRO: ${msg}\nCatálogo anterior preservado.`);
  process.exit(1);
}

function pgEnv() {
  if (!existsSync(ENV_FILE)) fail(`preencha ${ENV_FILE} (SERVER, PORT, DATABASE, USER_ID, PASSWORD).`);
  const text = readFileSync(ENV_FILE, "utf8");
  const kv = {};
  for (const l of text.split("\n")) {
    const m = l.match(/^\s*(SERVER|PORT|DATABASE|USER_ID|PASSWORD)\s*=\s*(.*?)\s*$/);
    if (m) kv[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  if (kv.SERVER || kv.USER_ID || kv.PASSWORD) {
    if (!kv.SERVER || !kv.USER_ID || !kv.PASSWORD || !kv.DATABASE) {
      fail("preencha SERVER, DATABASE, USER_ID e PASSWORD em credenciais-producao.txt.");
    }
    return {
      ...process.env,
      PGHOST: kv.SERVER,
      PGPORT: kv.PORT || "5432",
      PGDATABASE: kv.DATABASE,
      PGUSER: kv.USER_ID,
      PGPASSWORD: kv.PASSWORD,
      PGSSLMODE: "require",
    };
  }
  const line = text.split("\n").find((l) => l.startsWith("CONNECTION_STRING="));
  const raw = line?.slice("CONNECTION_STRING=".length).trim().replace(/^["']|["']$/g, "");
  if (!raw) fail("CONNECTION_STRING ausente ou vazia.");
  const p = {};
  if (/^postgres(ql)?:\/\//i.test(raw)) {
    const u = new URL(raw);
    Object.assign(p, {
      host: u.hostname,
      port: u.port || "5432",
      database: u.pathname.slice(1),
      username: decodeURIComponent(u.username),
      password: decodeURIComponent(u.password),
    });
  }
  for (const part of /^postgres/i.test(raw) ? [] : raw.split(";")) {
    const i = part.indexOf("=");
    if (i > 0) p[part.slice(0, i).trim().toLowerCase().replace(/\s/g, "")] = part.slice(i + 1).trim();
  }
  if (!p.host || !p.password) fail("CONNECTION_STRING sem host/senha reconhecíveis.");
  return {
    ...process.env,
    PGHOST: p.host,
    PGPORT: p.port ?? "5432",
    PGDATABASE: p.database ?? "",
    PGUSER: p.username ?? p.userid ?? "",
    PGPASSWORD: p.password,
    PGSSLMODE: "require",
  };
}

/** Mesma disponibilidade de Stock.AvailableQuantity, sem duplicar produtos (stocks.ProductId é PK). */
const SQL = `
BEGIN TRANSACTION READ ONLY;
SELECT jsonb_agg(t) FROM (
  SELECT p."Marca" AS brand, p."Nome" AS name, p."Valor" AS price
  FROM products p
  JOIN stocks s ON s."ProductId" = p."Id"
  WHERE COALESCE(s."QuantityOnHand", 0) - COALESCE(s."ReservedQuantity", 0) > 0
  ORDER BY p."Marca", p."Nome"
) t;
ROLLBACK;
`;

function query() {
  let out;
  try {
    out = execFileSync("psql", ["-X", "-q", "-t", "-A", "-v", "ON_ERROR_STOP=1", "-c", SQL], {
      env: pgEnv(),
      encoding: "utf8",
      timeout: 60_000,
    });
  } catch {
    fail("consulta ao banco falhou (sem detalhes para não expor credenciais).");
  }
  const json = out.split("\n").find((l) => l.trim().startsWith("["));
  if (!json) fail("consulta não retornou produtos disponíveis.");
  return JSON.parse(json);
}

/* ── Parsing (adaptado de toPerfume(): marca já vem separada) ───────── */

// Somente marcadores inequívocos: "Parfum"/"Elixir" fazem parte de nomes.
const CONCENTRATIONS = [
  ["extrait de parfum", "Extrait"],
  ["extrait", "Extrait"],
  ["eau de parfum", "EDP"],
  ["edp", "EDP"],
  ["eau de toilette", "EDT"],
  ["edt", "EDT"],
];

/** Marcas cujos itens disponíveis levam o selo "Lançamento"; as demais não têm selo. */
const LANCAMENTO_MARCAS = new Set(["bortnikoff"]);

function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseProduct({ brand, name: rawName, price }) {
  const warnings = [];
  const fullName = `${brand ?? ""} ${rawName ?? ""}`.trim();
  const value = Number(price);
  if (!brand?.trim() || !rawName?.trim()) return { error: `marca/nome vazio (${fullName || "?"})` };
  if (!Number.isFinite(value) || value <= 0) return { error: `preço inválido (${fullName})` };

  let name = rawName.trim();
  let noBox = false;
  if (/\bsem caixa\b/i.test(name)) {
    noBox = true;
    name = name.replace(/\bsem caixa\b/i, "").replace(/\s{2,}/g, " ").trim();
  }
  let isTester = false;
  if (/\btester\b/i.test(name)) {
    isTester = true;
    name = name.replace(/\btester\b(\s+w\/cap\b)?/i, "").replace(/\s{2,}/g, " ").trim();
  }
  let volume;
  const volMatch = name.match(/(\d+(?:[.,]\d+)?\s?ml)\s*$/i);
  if (volMatch) {
    volume = volMatch[1].replace(/\s+/g, "").toLowerCase();
    name = name.slice(0, volMatch.index).trim();
  } else if (!/\b(gift set|collection)\b/i.test(name)) {
    // Kits (Gift Set/Collection) não têm volume por padrão, como na landing atual.
    warnings.push(`sem volume reconhecido: ${fullName}`);
  }
  let concentration;
  for (const [token, label] of CONCENTRATIONS) {
    const re = new RegExp(`\\b${token}\\b`, "i");
    if (re.test(` ${name} `)) {
      concentration = label;
      name = name.replace(re, "").replace(/\s{2,}/g, " ").trim();
      break;
    }
  }
  if (!name) return { error: `nome vazio após parsing (${fullName})` };

  const slug = slugify(`${brand} ${name}`);
  const variant = [concentration?.toLowerCase(), volume, isTester && "tester", noBox && "sem-caixa"]
    .filter(Boolean)
    .join("-");
  const item = {
    id: variant ? `${slug}-${variant}` : slug,
    slug,
    brand: brand.trim(),
    name,
    ...(volume && { volume }),
    ...(concentration && { concentration }),
    isTester,
    noBox,
    price: Math.round(value * 100) / 100,
    ...(LANCAMENTO_MARCAS.has(brand.trim().toLowerCase()) && { status: "Lançamento" }),
  };
  return { item, warnings };
}

/* ── Execução ─────────────────────────────────────────────────────── */

const rows = query();
const items = [];
const errors = [];
const warnings = [];
for (const row of rows) {
  const r = parseProduct(row);
  if (r.error) errors.push(r.error);
  else {
    items.push(r.item);
    warnings.push(...r.warnings);
  }
}

const seen = new Map();
for (const it of items) seen.set(it.id, (seen.get(it.id) ?? 0) + 1);
const dups = [...seen].filter(([, n]) => n > 1).map(([id]) => id);

console.log(`Elegíveis na consulta: ${rows.length} | interpretados: ${items.length}`);
if (warnings.length) console.log(`Avisos (incluídos, mas conferir):\n  - ${warnings.join("\n  - ")}`);
if (errors.length) console.log(`Linhas NÃO interpretadas:\n  - ${errors.join("\n  - ")}`);
if (dups.length) console.log(`Duplicidades (mesmo id):\n  - ${dups.join("\n  - ")}`);

if (!rows.length || !items.length) fail("catálogo vazio.");
if (errors.length) fail("há linhas não interpretadas; corrija os dados ou o parsing.");
if (dups.length) fail("há produtos duplicados; resolva antes de publicar.");

if (existsSync(OUT)) {
  const prev = JSON.parse(readFileSync(OUT, "utf8")).items?.length ?? 0;
  if (prev && items.length < prev * 0.5 && !args.has("--force")) {
    fail(`queda acentuada (${prev} → ${items.length}). Use --force se for esperado.`);
  }
}

if (args.has("--dry")) {
  console.log("Dry-run: nada gravado.");
} else {
  const tmp = `${OUT}.tmp`;
  writeFileSync(tmp, JSON.stringify({ updatedAt: new Date().toISOString(), items }, null, 2) + "\n");
  renameSync(tmp, OUT);
  console.log(`Gravado js/catalog.json (${items.length} itens).`);
}
