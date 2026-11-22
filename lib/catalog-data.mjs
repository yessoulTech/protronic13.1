// ─────────────────────────────────────────────────────────────
//  CATALOGUE — pour modifier le store, éditez uniquement ce fichier.
//  Ligne produit : [nom, prix en €, précision (facultatif), badge (facultatif), description (facultatif)]
//  prix = null  →  « Prix sur demande »
//  Photo : déposez  public/products/<identifiant>.webp  (jpg/png acceptés) puis  npm run photos
//          Plusieurs photos (carte à balayer) : <identifiant>.webp, <identifiant>_2.webp, <identifiant>_3.webp…
//          (la liste des identifiants est dans PHOTOS.md)
// ─────────────────────────────────────────────────────────────
export const CATALOG = {
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
    ["Kit tournevis de précision multifonction", 40, "180 en 1", "Nouveau", "Plus de 180 embouts de précision magnétiques en acier S2 haute résistance, dans un coffret compact et robuste. Idéal pour smartphones, ordinateurs, consoles, drones et électronique. Quantité limitée."],
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

export const slugify = (s) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** @returns {{category:string,name:string,spec?:string,price:number|null,badge?:string,description?:string,slug:string}[]} */
export function listProducts() {
  const seen = {};
  return Object.entries(CATALOG).flatMap(([category, rows]) => rows.map(([name, price, spec, badge, description]) => {
    let slug = slugify(spec ? `${name}-${spec}` : name);
    seen[slug] = (seen[slug] ?? 0) + 1; if (seen[slug] > 1) slug += `-${seen[slug]}`;
    return { category, name, spec, price, badge, description, slug };
  }));
}
