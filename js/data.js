/**
 * Camada de dados do catálogo.
 *
 * A planilha do Google é a fonte inicial, consumida pelo endpoint público
 * `gviz` (JSON, somente leitura, sem chave de API). A interface nunca toca
 * a estrutura física da planilha: tudo passa pelo modelo `Perfume` abaixo,
 * o que permite trocar a fonte por um banco ou API própria no futuro sem
 * reconstruir o frontend.
 *
 * Modelo:
 *   Perfume {
 *     id: string
 *     slug: string            // chave de junção com o perfil olfativo
 *     brand: string
 *     name: string            // nome sem marca nem volumetria
 *     fullName: string        // linha original da planilha
 *     volume?: string         // ex.: "100ml"
 *     concentration?: string  // ex.: "EDP", "Extrait" (quando presente no nome)
 *     isTester?: boolean
 *     noBox?: boolean         // "sem caixa" na planilha
 *     price?: number          // em reais
 *     priceFormatted?: string
 *     status?: string         // ex.: "NOVO"
 *     // vindos de fragrances.js (perfil olfativo apurado nos sites oficiais):
 *     image?: string
 *     family?: string
 *     perfumer?: string
 *     source?: string
 *     notes?: { top: string[], heart: string[], base: string[] }
 *     mainNotes?: string[]    // quando a marca não divulga pirâmide
 *   }
 *
 * Nenhum campo é inventado: só existe no modelo o que existe na fonte.
 */
import { CONFIG } from "./config.js";
import { FRAGRANCES } from "./fragrances.js";

const GVIZ_URL = `https://docs.google.com/spreadsheets/d/${CONFIG.sheet.id}/gviz/tq?tqx=out:json&gid=${CONFIG.sheet.gid}`;
const CACHE_KEY = "jgg-catalog-v2";

/** Snapshot local usado como fallback quando a planilha está inacessível. */
const FALLBACK_ROWS = [
  ["BDK Parfums - Oud Abramad 100ml", "R$ 1,170.00", "NOVO"],
  ["BDK Parfums - Tubereuse Imperiale 100ml", "R$ 1,250.00", "NOVO"],
  ["BDK Parfums - Vanille Caviar 100ml", "R$ 1,170.00", "NOVO"],
  ["BDK Parfums - Vanille Leather 100ml", "R$ 1,200.00", "NOVO"],
  ["Boadicea The Victorious - Amber Sapphire 100ml", "R$ 2,700.00", "NOVO"],
  ["Boadicea The Victorious - Bravery 100ml", "R$ 1,390.00", "NOVO"],
  ["Boadicea The Victorious - Rebellious 100ml", "R$ 1,350.00", "NOVO"],
  ["Boadicea The Victorious - Rose Sapphire 100ml", "R$ 2,520.00", "NOVO"],
  ["Boadicea The Victorious - Royal Sapphires Collection", "R$ 1,200.00", "NOVO"],
  ["Boadicea The Victorious - The Amber Gift Set", "R$ 1,150.00", "NOVO"],
  ["Boadicea The Victorious - The Leather Gift Set", "R$ 1,150.00", "NOVO"],
  ["Boadicea The Victorious - The Woody Gift Set", "R$ 1,150.00", "NOVO"],
  ["Bortnikoff - Cuir de Cerise 50ml", "R$ 1,230.00", "NOVO"],
  ["Bortnikoff - Sambac Rouge 50ml", "R$ 1,230.00", "NOVO"],
  ["Casamorati - Bouquet Ideale 100ml tester w/cap", "R$ 820.00", "NOVO"],
  ["Casamorati - Fiero 100ml", "R$ 990.00", "NOVO"],
  ["Casamorati - Tempio d'Acqua 100ml tester w/cap", "R$ 820.00", "NOVO"],
  ["Christian Provenzano - Colosseum 100ml", "R$ 1,390.00", "NOVO"],
  ["Christian Provenzano - Cuir Elite 100ml", "R$ 1,390.00", "NOVO"],
  ["Christian Provenzano - Inspirato 100ml", "R$ 1,350.00", "NOVO"],
  ["Christian Provenzano - Mangostino 100ml", "R$ 1,390.00", "NOVO"],
  ["Christian Provenzano - Massimo 100ml", "R$ 1,390.00", "NOVO"],
  ["Christian Provenzano - Onda de Mar 100ml", "R$ 1,390.00", "NOVO"],
  ["Christian Provenzano - Patchouli Noir 100ml", "R$ 1,390.00", "NOVO"],
  ["Christian Provenzano - Rocca 100ml", "R$ 1,390.00", "NOVO"],
  ["Cirque du Soleil - L'eau Parfum 100ml", "R$ 980.00", "NOVO"],
  ["Creed - Love In Black 75ml", "R$ 1,450.00", "NOVO"],
  ["Creed - Original Santal 100ml", "R$ 1,490.00", "NOVO"],
  ["Creed - Royal Princess Oud 75ml", "R$ 1,450.00", "NOVO"],
  ["D'Orsay - Dandy or not. G.A. 50ml", "R$ 900.00", "NOVO"],
  ["D'Orsay - Dandy or not. G.A. 90ml", "R$ 1,150.00", "NOVO"],
  ["Dior - Balade Sauvage 125ml sem caixa", "R$ 1,850.00", "NOVO"],
  ["Dior - Purple Oud 125ml sem caixa", "R$ 1,850.00", "NOVO"],
  ["Dior - Santal Noir 125ml sem caixa", "R$ 1,850.00", "NOVO"],
  ["Gritti - Chantilly EDP 100ml", "R$ 900.00", "NOVO"],
  ["Hind Al Oud - Oud Zayed 50ml", "R$ 1,850.00", "NOVO"],
  ["Initio - Lift me Up 90ml", "R$ 1,650.00", "NOVO"],
  ["Initio - Wild Rush tester 90ml", "R$ 1,590.00", "NOVO"],
  ["Lorenzo Pazzaglia - Coffeee Passion 50ml", "R$ 990.00", "NOVO"],
  ["Lorenzo Pazzaglia - Pink Milk 50ml", "R$ 990.00", "NOVO"],
  ["Lorenzo Pazzaglia - Summer Hammer 50ml", "R$ 1,040.00", "NOVO"],
  ["M. Micallef - DesirToxic 100ml", "R$ 900.00", "NOVO"],
  ["Miller Harris - Scherzo 100ml", "R$ 935.00", "NOVO"],
  ["Mind Games - Checkmate 100ml", "R$ 1,690.00", "NOVO"],
  ["Mind Games - French Defense 100ml", "R$ 1,690.00", "NOVO"],
  ["Mind Games - Grand Master 100ml", "R$ 1,690.00", "NOVO"],
  ["Mind Games - Kingside 100ml", "R$ 1,950.00", "NOVO"],
  ["Mind Games - The Forward 100ml", "R$ 1,690.00", "NOVO"],
  ["Moresque - Oro 50ml", "R$ 875.00", "NOVO"],
  ["Nasomatto - Baraonda 30ml", "R$ 890.00", "NOVO"],
  ["Nasomatto - Black Afgano 30ml", "R$ 870.00", "NOVO"],
  ["Nasomatto - Blamage 30ml", "R$ 850.00", "NOVO"],
  ["Nasomatto - Duro 30ml", "R$ 850.00", "NOVO"],
  ["Nasomatto - Nudiflorum 30ml", "R$ 850.00", "NOVO"],
  ["Nasomatto - Pardon 30ml", "R$ 870.00", "NOVO"],
  ["Nasomatto - Sadonaso 30ml", "R$ 850.00", "NOVO"],
  ["Orto Parisi - Boccanera 50ml", "R$ 920.00", "NOVO"],
  ["Orto Parisi - Brutus 50ml", "R$ 920.00", "NOVO"],
  ["Orto Parisi - Megamare 50ml", "R$ 930.00", "NOVO"],
  ["Orto Parisi - Risvelium 50ml", "R$ 940.00", "NOVO"],
  ["Orto Parisi - Seminalis 50ml", "R$ 920.00", "NOVO"],
  ["Orto Parisi - Stercus 50ml", "R$ 920.00", "NOVO"],
  ["Orto Parisi - Terroni 50ml", "R$ 940.00", "NOVO"],
  ["Parfums d'Elmar - Dalika 60ml", "R$ 1,290.00", "NOVO"],
  ["Perris Monte Carlo - Oud Imperial Extrait 50ml", "R$ 1,045.00", "NOVO"],
  ["Sasva - Forbidden Words Alfaaz E Mamnooah 100ml", "R$ 1,150.00", "NOVO"],
  ["Sasva - Forbidden Words Bombay Gourmand 100ml", "R$ 1,135.00", "NOVO"],
  ["Sasva - Fruit Du Paradis Phal E Jannat 100ml", "R$ 1,135.00", "NOVO"],
  ["Sasva - Saaqi 100ml", "R$ 1,150.00", "NOVO"],
  ["Sospiro - Farsa 75ml", "R$ 850.00", "NOVO"],
  ["Xerjoff - Avanguardia 100ml", "R$ 2,690.00", "NOVO"],
  ["Xerjoff - Decas 100ml tester w/cap", "R$ 850.00", "NOVO"],
  ["Xerjoff - Erba Gold 100ml", "R$ 1,050.00", "NOVO"],
  ["Xerjoff - Erba Pura 100ml", "R$ 930.00", "NOVO"],
  ["Xerjoff - Fierezza 100ml", "R$ 2,350.00", "NOVO"],
  ["Xerjoff - Gibeon 50ml", "R$ 1,150.00", "NOVO"],
  ["Xerjoff - Louis XV 1722 Rosé 50ml", "R$ 1,150.00", "NOVO"],
  ["Xerjoff - Naxos 100ml", "R$ 930.00", "NOVO"],
  ["Xerjoff - Nio 50ml", "R$ 1,050.00", "NOVO"],
  ["Xerjoff - Perseveranza 100ml", "R$ 2,250.00", "NOVO"],
  ["Xerjoff - Renaissance 100ml", "R$ 950.00", "NOVO"],
  ["Xerjoff - Sketchbook P.33 Blank Page 100ml", "R$ 1,350.00", "NOVO"],
  ["Xerjoff - Torino21 100ml", "R$ 1,100.00", "NOVO"],
  ["Xerjoff - Torino22 50ml", "R$ 1,190.00", "NOVO"],
  ["Xerjoff - Torino25 50ml tester w/cap", "R$ 825.00", "NOVO"],
];

/**
 * Somente marcadores inequívocos de concentração. "Parfum" e "Elixir" ficam
 * de fora de propósito: em nomes como "L’eau Parfum" e "Elixir D'Amour" eles
 * fazem parte do nome, e removê-los inventaria uma informação que a fonte não dá.
 */
const CONCENTRATIONS = [
  ["extrait de parfum", "Extrait"],
  ["extrait", "Extrait"],
  ["eau de parfum", "EDP"],
  ["edp", "EDP"],
  ["eau de toilette", "EDT"],
  ["edt", "EDT"],
];

function parsePrice(raw) {
  if (typeof raw === "number" && Number.isFinite(raw)) return raw;
  if (typeof raw !== "string") return undefined;
  const digits = raw.replace(/[^\d,\.]/g, "");
  if (!digits) return undefined;
  // Aceita "1.170,00" e "1,170.00": a planilha muda de formato conforme a
  // localidade. O último separador só é decimal se vier com 1 ou 2 dígitos.
  const decimal = digits.match(/[,.](\d{1,2})$/);
  const integer = (decimal ? digits.slice(0, decimal.index) : digits).replace(/[,.]/g, "");
  const value = parseFloat(decimal ? `${integer}.${decimal[1]}` : integer);
  return Number.isFinite(value) ? value : undefined;
}

/** Normaliza texto em slug: sem acentos, apóstrofos curvos ou pontuação. */
function slugify(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/** Converte uma linha da planilha ("Marca - Nome Volume", valor, status) no modelo Perfume. */
function toPerfume(rawName, rawPrice, rawStatus, index) {
  if (typeof rawName !== "string") return null;
  const fullName = rawName.trim();
  const price = parsePrice(rawPrice);
  // Linhas sem preço são notas informativas da planilha, não produtos.
  if (!fullName || price === undefined) return null;

  const sep = fullName.indexOf(" - ");
  const brand = sep > 0 ? fullName.slice(0, sep).trim() : "";
  let name = sep > 0 ? fullName.slice(sep + 3).trim() : fullName;

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
  }

  let concentration;
  const lower = ` ${name.toLowerCase()} `;
  for (const [token, label] of CONCENTRATIONS) {
    const re = new RegExp(`\\b${token}\\b`, "i");
    if (re.test(lower)) {
      concentration = label;
      name = name.replace(re, "").replace(/\s{2,}/g, " ").trim();
      break;
    }
  }

  const status =
    typeof rawStatus === "string" && rawStatus.trim() ? rawStatus.trim() : undefined;

  // Junção com o perfil olfativo apurado nos sites oficiais das marcas.
  const slug = slugify(`${brand} ${name}`);
  const profile = FRAGRANCES[slug];
  if (!profile) {
    console.info(
      `Perfil olfativo ausente para "${fullName}". ` +
        `Adicione a chave "${slug}" em js/fragrances.js.`
    );
  }

  return {
    id: `p${index}-${slug}`,
    slug,
    brand,
    name,
    fullName,
    volume,
    concentration,
    isTester,
    noBox,
    price,
    priceFormatted: brl.format(price),
    status,
    ...profile,
  };
}

function parseRows(rows) {
  return rows
    .map((r, i) => toPerfume(r[0], r[1], r[2], i))
    .filter(Boolean);
}

function parseGviz(text) {
  // Resposta no formato: /*O_o*/\ngoogle.visualization.Query.setResponse({...});
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end < 0) throw new Error("Resposta inesperada da planilha");
  const payload = JSON.parse(text.slice(start, end + 1));
  const rows = (payload.table?.rows ?? []).map((row) =>
    (row.c ?? []).map((cell) => (cell ? cell.f ?? cell.v : null))
  );
  return parseRows(rows);
}

function readCache() {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { at, perfumes } = JSON.parse(raw);
    if (Date.now() - at > CONFIG.sheet.cacheTtl) return null;
    return perfumes;
  } catch {
    return null;
  }
}

function writeCache(perfumes) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), perfumes }));
  } catch {
    /* armazenamento indisponível — segue sem cache */
  }
}

/**
 * Carrega o catálogo: cache → planilha ao vivo → snapshot local.
 * Retorna { perfumes, source } com source em "cache" | "live" | "fallback".
 */
export async function loadCatalog() {
  const cached = readCache();
  if (cached?.length) return { perfumes: cached, source: "cache" };

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 8000);
    const res = await fetch(GVIZ_URL, { signal: controller.signal });
    clearTimeout(timer);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const perfumes = parseGviz(await res.text());
    if (!perfumes.length) throw new Error("Planilha sem produtos reconhecíveis");
    writeCache(perfumes);
    return { perfumes, source: "live" };
  } catch (err) {
    console.warn("Catálogo: usando snapshot local.", err);
    return { perfumes: parseRows(FALLBACK_ROWS), source: "fallback" };
  }
}
