import Link from "next/link";
import { type Product, STOCK_LABEL, formatPrice } from "@/lib/products"; import ProductImage from "./ProductImage";
export default function ProductCard({ p }: { p: Product }) {
  return <Link href={`/store/${p.slug}`} className="group block rounded-3xl bg-mist p-5 transition hover:-translate-y-1 hover:shadow-xl">
    <div className="relative mb-4 grid aspect-square place-items-center overflow-hidden rounded-2xl bg-gradient-to-br from-white to-[#e3f3fd] transition group-hover:scale-[1.02]">
      <ProductImage p={p} />
      {p.badge && <span className="absolute left-3 top-3 z-10 rounded-full bg-navy px-3 py-1 text-xs text-white">{p.badge}</span>}
    </div>
    <p className="text-xs uppercase tracking-wider text-ink/50">{p.category}</p>
    <h3 className="mt-1 font-semibold leading-snug">{p.name}</h3>
    {p.spec && <p className="text-sm text-ink/60">{p.spec}</p>}
    <p className="mt-2 text-lg font-medium text-navy">{formatPrice(p.price)}</p>
    {p.stock && <p className="mt-1 text-sm text-ink/60">{STOCK_LABEL[p.stock]}</p>}
  </Link>;
}
