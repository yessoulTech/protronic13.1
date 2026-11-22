// ─────────────────────────────────────────────────────────────
//  CATALOGUE — pour modifier le store, éditez uniquement ce fichier.
//  Ligne produit : [nom, prix en €, précision (facultatif), badge (facultatif)]
//  prix = null  →  « Prix sur demande »
// ─────────────────────────────────────────────────────────────
export type Category = "Apple" | "Samsung" | "Outils grand public" | "Consommables" | "Outillage professionnel" | "Gamer";
export type Badge = "Nouveau" | "Vedette";
export type Product = { slug: string; name: string; spec?: string; category: Category; price: number | null; badge?: Badge; image?: string; stock?: "in" | "low" | "out" | "order"; description: string };
type Row = [name: string, price: number | null, spec?: string, badge?: Badge];

const CATALOG: Record<Category, Row[]> = {
  "Apple": [
    ["iPhone 18 Pro", 1400, "256 Go · Burgundy", "Nouveau"],
    ["iPhone 18 Pro", 1350, "256 Go · Glacier", "Nouveau"],
    ["iPhone 18 Pro", 1350, "256 Go · Black", "Nouveau"],
    ["iPhone 18 Pro Max", 1600, "256 Go · Burgundy", "Vedette"],
    ["iPhone 18 Pro Max", 1500, "256 Go · Silver / Black / Glacier", "Vedette"],
  ],
  "Samsung": [
    ["Samsung Galaxy A06 4G", 157, "4/128 Go"], ["Samsung Galaxy A06 4G", 150, "4/64 Go"], ["Samsung Galaxy A06 5G", 157, "4/64 Go"],
    ["Samsung Galaxy A07s 4G", 153, "4/64 Go"], ["Samsung Galaxy A08 4G", 173, "4/64 Go"], ["Samsung Galaxy A16 4G", 189, "4/128 Go"],
    ["Samsung Galaxy A17 4G", 196, "4/128 Go"], ["Samsung Galaxy A17 5G", 213, "4/128 Go"], ["Samsung Galaxy A18 4G", 219, "4/128 Go"],
    ["Samsung Galaxy A27 5G", 306, "6/256 Go", "Nouveau"], ["Samsung Galaxy A36 5G", 265, "6/128 Go"],
    ["Samsung Galaxy A37 5G", 299, "6/128 Go", "Nouveau"], ["Samsung Galaxy A57 5G", 349, "8/128 Go", "Vedette"],
  ],
  "Outils grand public": [
    ["Écouteurs Moto Bluetooth", 50, "Bluetooth 5.4 · kit casque moto · double suppression du bruit"], ["Apple Magic Mouse Bluetooth", 109], ["VENTION Transmetteur", 94.99], ["BELKIN Hub USB-C Universal", 139],
    ["VARTA PowerBank Wireless", 69], ["DEVIA EarBass Pro2 EM03", 69], ["JBL Flip 7 Enceinte Bluetooth", 129],
    ["KINGSTON SO-DIMM", 129, "8 Go"], ["PNY Performance DIMM", 169], ["PNY SSD M.2 NVMe CS2230", 129], ["PNY SSD M.2 NVMe CS1030", 199],
  ],
  "Consommables": [
    ["Tresse à dessouder Mechanic", 9.99], ["Pâte de réparation G100", 12.99, "20 g"], ["Flux en seringue pour soudure", 16.99],
    ["Pâte à souder 217 °C", 19.99, "50 g"], ["Pâte à souder 183 °C", 19.99, "50 g"], ["Pâte isolante rapide Mechanic 3S", 14.99],
    ["Pâte à souder 138 °C", 23.99, "50 g"], ["Colle Super X", 14.99, "60 ml"],
  ],
  "Outillage professionnel": [
    ["Tapis de travail isolant et thermique", 29.99], ["RF4 RF-2003M Source stabilisée de courant", 99], ["RF4 Outil de séparation d'écran", 49],
    ["BEST BST-8921 Kit d'outils 38 en 1", 24.99], ["JAKEMY JM-8189A Kit d'outils", 19.99], ["JAKEMY JM-8177 Kit tournevis", 34.99],
    ["BEST Nettoyeur à ultrasons", 69], ["AiXun H314 Station à air chaud intelligente", 359], ["SUGON T3602 Station de micro-soudure", 329],
    ["MECHANIC Station de micro-soudure", 129], ["MECHANIC Station de micro-soudure", 209], ["MECHANIC Microscope stéréo trinoculaire", 399],
    ["MECHANIC Microscope trinoculaire", 579], ["QUICK Station à air chaud", 399], ["Station à air chaud", 200], ["Station à air chaud AIR", null],
    ["Multimètre numérique Mechanic", 69], ["Multimètre digital de poche", 39], ["Tournevis série MORTAR", 49],
    ["Kit de 5 tournevis de précision", 69], ["BEST 9933A Tournevis électrique", 45.99], ["Tournevis électrique", 50],
  ],
  "Gamer": [
    ["Sony PlayStation 5 Manette", 99], ["Sony PlayStation 5 Manette", 89], ["DOBE Ventilateur de refroidissement", 39],
    ["DOBE Station de chargement", 29.99], ["Display One Piece The Timeless", null], ["Display One Piece Card Game", null],
    ["Display Pokémon Nihil Zero", 149], ["Display Pokémon Night", 199], ["Start Deck Pokémon 100", 99],
  ],
};

// Photos : déposez le fichier dans /public/products puis associez-le à l'adresse du produit (ex. /store/samsung-galaxy-a57-5g-8-128-go).
const PHOTOS: Record<string, string> = {
  "samsung-galaxy-a08-4g-4-64-go": "/products/galaxy-a08-4g.webp",
  "samsung-galaxy-a07s-4g-4-64-go": "/products/galaxy-a07s.webp",
  "samsung-galaxy-a16-4g-4-128-go": "/products/galaxy-a16.webp",
  "samsung-galaxy-a06-4g-4-128-go": "/products/galaxy-a06-4g.webp",
  "samsung-galaxy-a06-4g-4-64-go": "/products/galaxy-a06-4g.webp",
  "samsung-galaxy-a06-5g-4-64-go": "/products/galaxy-a06-5g.webp",
  "iphone-18-pro-256-go-burgundy": "/products/iphone-18-pro-burgundy.webp",
  "iphone-18-pro-256-go-glacier": "/products/iphone-18-pro-glacier.webp",
  "iphone-18-pro-256-go-black": "/products/iphone-18-pro-black.webp",
  "ecouteurs-moto-bluetooth-bluetooth-5-4-kit-casque-moto-double-suppression-du-bruit": "/products/ecouteurs-moto-v12.webp",
};

const slugify = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const seen: Record<string, number> = {};
export const CATEGORIES = Object.keys(CATALOG) as Category[];
export const PRODUCTS: Product[] = CATEGORIES.flatMap(category => CATALOG[category].map(([name, price, spec, badge]) => {
  let slug = slugify(spec ? `${name}-${spec}` : name); seen[slug] = (seen[slug] ?? 0) + 1; if (seen[slug] > 1) slug += `-${seen[slug]}`;
  return { slug, name, spec, category, price, badge, image: PHOTOS[slug],
    description: `${name}${spec ? ` — ${spec}` : ""}. Contactez-nous sur WhatsApp pour la disponibilité et la commande.` } as Product;
}));
export const STOCK_LABEL = { in: "En stock", low: "Stock limité", out: "Indisponible", order: "Sur commande" } as const;
export const formatPrice = (p: number | null) => p === null ? "Prix sur demande"
  : new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(p);
