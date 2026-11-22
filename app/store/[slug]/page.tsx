import { notFound } from "next/navigation"; import Link from "next/link"; import type { Metadata } from "next";
import { PRODUCTS, STOCK_LABEL, formatPrice } from "@/lib/products"; import { waLink } from "@/lib/config"; import ProductImage from "@/components/ProductImage";
type Props = { params: { slug: string } };
export const generateStaticParams = () => PRODUCTS.map(p => ({ slug: p.slug }));
export function generateMetadata({ params }: Props): Metadata { const p = PRODUCTS.find(x => x.slug === params.slug); return p ? { title: `${p.name}${p.spec ? ` ${p.spec}` : ""}`, description: p.description } : {}; }
export default function ProductPage({ params }: Props) {
  const p = PRODUCTS.find(x => x.slug === params.slug); if (!p) notFound();
  const label = `${p.name}${p.spec ? ` ${p.spec}` : ""}`;
  return <div className="container-x py-12"><Link href="/store" className="text-electric hover:underline">‹ Retour au store</Link>
    <div className="mt-8 grid gap-10 md:grid-cols-2">
      <div className="relative grid aspect-square place-items-center overflow-hidden rounded-3xl bg-gradient-to-br from-mist to-[#dff1fc]"><ProductImage p={p} priority sizes="50vw" /></div>
      <div className="self-center"><p className="text-sm uppercase tracking-wider text-ink/50">{p.category}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">{p.name}</h1>{p.spec && <p className="mt-1 text-lg text-ink/60">{p.spec}</p>}
        <p className="mt-4 text-2xl text-navy">{formatPrice(p.price)}</p>{p.stock && <p className="mt-1 text-ink/60">{STOCK_LABEL[p.stock]}</p>}
        <p className="mt-6 text-ink/70">{p.description}</p>
        <a href={waLink(`Bonjour ProTronic13, je souhaite commander : ${label} (${formatPrice(p.price)}).`)} target="_blank" rel="noopener noreferrer" className="btn-wa mt-8">Commander sur WhatsApp</a></div>
    </div></div>;
}
