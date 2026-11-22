// Détecte les photos de public/products/<identifiant>.(webp|jpg|jpeg|png) et met à jour le site.
//   npm run photos   → met à jour lib/photos.generated.json + PHOTOS.md (liste ✅ / ⬜)
import fs from "node:fs"; import { listProducts } from "../lib/catalog-data.mjs";
const dir = "public/products"; fs.mkdirSync(dir, { recursive: true });
const files = fs.readdirSync(dir).filter(f => /\.(webp|jpe?g|png)$/i.test(f));
const byName = Object.fromEntries(files.map(f => [f.replace(/\.[^.]+$/, ""), f]));
const products = listProducts(); const manifest = {};
for (const p of products) {
  const list = [p.slug, ...Array.from({ length: 8 }, (_, i) => `${p.slug}_${i + 2}`)].filter(n => byName[n]).map(n => `/products/${byName[n]}`);
  if (list.length) manifest[p.slug] = list;
}
fs.writeFileSync("lib/photos.generated.json", JSON.stringify(manifest, null, 2) + "\n");
let md = `# Photos produits\n\nPour chaque produit : déposez la photo dans \`public/products/\` avec **exactement** le nom de la colonne « Fichier » (extension .webp, .jpg ou .png), puis lancez \`npm run photos\`.\nFormat conseillé : carré 900 × 900 px, produit centré, fond blanc.\n\n**${Object.keys(manifest).length} / ${products.length} photos trouvées.**\n`;
let cat = "";
for (const p of products) {
  if (p.category !== cat) { cat = p.category; md += `\n## ${cat}\n\n| | Produit | Fichier |\n|---|---|---|\n`; }
  md += `| ${manifest[p.slug] ? "✅" : "⬜"} | ${p.name}${p.spec ? " — " + p.spec : ""} | \`${p.slug}.webp\` |\n`;
}
fs.writeFileSync("PHOTOS.md", md);
console.log(`Photos : ${Object.keys(manifest).length}/${products.length} trouvées (liste complète dans PHOTOS.md)`);
