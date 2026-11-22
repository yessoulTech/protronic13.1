import Image from "next/image"; import type { Product } from "@/lib/products"; import ProductGallery from "./ProductGallery";
// Emplacement photo : galerie à balayer si plusieurs photos, image seule, ou cadre « Photo à venir ».
export default function ProductImage({ p, priority = false, sizes = "(max-width:768px) 100vw, 33vw", arrows = false }: { p: Product; priority?: boolean; sizes?: string; arrows?: boolean }) {
  const imgs = p.images ?? (p.image ? [p.image] : []);
  if (imgs.length > 1) return <ProductGallery images={imgs} alt={p.name} sizes={sizes} arrows={arrows} priority={priority} />;
  return imgs[0]
    ? <Image src={imgs[0]} alt={p.name} fill priority={priority} sizes={sizes} className="object-contain p-4 mix-blend-multiply" />
    : <div className="flex flex-col items-center gap-2 text-electric/40" aria-label="Photo à venir">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="6" width="18" height="14" rx="3"/><circle cx="12" cy="13" r="3.5"/><path d="M8 6l1.5-2h5L16 6"/></svg>
        <span className="text-xs">Photo à venir</span></div>;
}
