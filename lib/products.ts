import { CATALOG, listProducts } from "./catalog-data.mjs";
import detected from "./photos.generated.json"; // généré par `npm run photos` (photos trouvées dans public/products)
export type Category = "Apple" | "Samsung" | "Outils grand public" | "Consommables" | "Outillage professionnel" | "Gamer";
export type Badge = "Nouveau" | "Vedette";
export type Product = { slug: string; name: string; spec?: string; category: Category; price: number | null; badge?: Badge; image?: string; images?: string[]; stock?: "in" | "low" | "out" | "order"; description: string };

// Une même photo pour plusieurs variantes : "identifiant-de-la-variante": "/products/fichier.webp"
const SHARED: Record<string, string> = {
  "samsung-galaxy-a06-4g-4-64-go": "/products/samsung-galaxy-a06-4g-4-128-go.webp",
};

export const CATEGORIES = Object.keys(CATALOG) as Category[];
export const PRODUCTS: Product[] = (listProducts() as unknown as (Omit<Product, "description"> & { description?: string })[]).map(p => {
  const imgs = (detected as Record<string, string[]>)[p.slug] ?? (SHARED[p.slug] ? [SHARED[p.slug]] : undefined);
  return { ...p, image: imgs?.[0], images: imgs, description: p.description ?? `${p.name}${p.spec ? ` — ${p.spec}` : ""}. Contactez-nous sur WhatsApp pour la disponibilité et la commande.` }; });
export const STOCK_LABEL = { in: "En stock", low: "Stock limité", out: "Indisponible", order: "Sur commande" } as const;
export const formatPrice = (p: number | null) => p === null ? "Prix sur demande"
  : new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(p);
