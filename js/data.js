/**
 * Camada de dados do catálogo.
 *
 * A fonte é `js/catalog.json`, gerado por `scripts/sync-estoque.mjs` a partir
 * do estoque do Niche Premium (consulta somente leitura; só campos públicos,
 * sem saldo, código ou IDs internos). A interface nunca toca a estrutura do
 * JSON: tudo passa pelo modelo `Perfume` abaixo.
 *
 * Modelo:
 *   Perfume {
 *     id: string
 *     slug: string            // chave de junção com o perfil olfativo
 *     brand: string
 *     name: string            // nome sem marca nem volumetria
 *     fullName: string        // "Marca Nome Volume", para exibição e WhatsApp
 *     volume?: string         // ex.: "100ml"
 *     concentration?: string  // ex.: "EDP", "Extrait" (marcador inequívoco)
 *     isTester?: boolean
 *     noBox?: boolean
 *     price: number           // em reais
 *     priceFormatted: string
 *     status?: string         // "Lançamento" (opcional; sem selo nos demais)
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
import { FRAGRANCES } from "./fragrances.js";

const CATALOG_URL = new URL("./catalog.json", import.meta.url);

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

/** Converte um item do catalog.json no modelo Perfume, juntando o perfil pelo slug. */
function toPerfume(item) {
  // Perfil por concentração (ex.: "...-extrait") tem prioridade sobre o do slug.
  const conc = item.concentration?.toLowerCase();
  const profile = (conc && FRAGRANCES[`${item.slug}-${conc}`]) || FRAGRANCES[item.slug];
  if (!profile) {
    console.info(
      `Perfil olfativo ausente para "${item.brand} ${item.name}". ` +
        `Adicione a chave "${item.slug}" em js/fragrances.js.`
    );
  }
  const fullName = [item.brand, item.name, item.volume].filter(Boolean).join(" ");
  return {
    ...item,
    fullName,
    priceFormatted: brl.format(item.price),
    ...profile,
  };
}

/**
 * Carrega o catálogo de js/catalog.json. Sempre revalida (cache: "no-cache"),
 * sem cache de sessão, para não manter preços antigos após uma atualização.
 * Retorna { perfumes }; lança erro se o catálogo estiver indisponível.
 */
export async function loadCatalog() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(CATALOG_URL, { cache: "no-cache", signal: controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const { items } = await res.json();
    if (!Array.isArray(items) || !items.length) throw new Error("Catálogo vazio");
    return { perfumes: items.map(toPerfume) };
  } finally {
    clearTimeout(timer);
  }
}
