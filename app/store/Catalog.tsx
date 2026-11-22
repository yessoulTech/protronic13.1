"use client";
import { useMemo, useState } from "react"; import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard"; import { PRODUCTS, CATEGORIES, type Category } from "@/lib/products";
const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
export default function Catalog() {
  const [q, setQ] = useState(useSearchParams().get("q") ?? ""); const [cat, setCat] = useState<Category | "Tous">("Tous");
  const list = useMemo(() => PRODUCTS.filter(p => (cat === "Tous" || p.category === cat) && norm(`${p.name} ${p.spec ?? ""} ${p.category}`).includes(norm(q.trim()))), [q, cat]);
  const count = (c: Category | "Tous") => c === "Tous" ? PRODUCTS.length : PRODUCTS.filter(p => p.category === c).length;
  return <div className="container-x py-10">
    <input value={q} onChange={e => setQ(e.target.value)} placeholder="Rechercher un produit, une marque…" aria-label="Rechercher un produit" className="w-full rounded-full bg-mist px-5 py-3 outline-none focus:ring-2 ring-electric" />
    <div className="mt-5 flex gap-2 overflow-x-auto pb-2 md:flex-wrap" role="tablist" aria-label="Catégories">{(["Tous", ...CATEGORIES] as const).map(c =>
      <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c} className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${cat === c ? "bg-navy text-white" : "bg-mist hover:bg-black/10"}`}>{c} <span className="opacity-60">{count(c)}</span></button>)}</div>
    <p className="mt-6 text-sm text-ink/50">{list.length} produit{list.length > 1 ? "s" : ""}</p>
    {list.length ? <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{list.map(p => <ProductCard key={p.slug} p={p} />)}</div>
      : <p className="mt-16 text-center text-ink/60">Aucun produit trouvé.</p>}
  </div>;
}
