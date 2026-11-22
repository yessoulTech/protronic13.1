import Image from "next/image"; import type { Product } from "@/lib/products";
// Emplacement photo : affiche l'image du produit, ou un cadre « Photo à venir ».
export default function ProductImage({ p, priority = false, sizes = "(max-width:768px) 100vw, 33vw" }: { p: Product; priority?: boolean; sizes?: string }) {
  return p.image
    ? <Image src={p.image} alt={p.name} fill priority={priority} sizes={sizes} className="object-contain p-4 mix-blend-multiply" />
    : <div className="flex flex-col items-center gap-2 text-electric/40" aria-label="Photo à venir">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="6" width="18" height="14" rx="3"/><circle cx="12" cy="13" r="3.5"/><path d="M8 6l1.5-2h5L16 6"/></svg>
        <span className="text-xs">Photo à venir</span></div>;
}
