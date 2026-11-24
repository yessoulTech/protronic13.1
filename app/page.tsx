import Link from "next/link"; import Image from "next/image"; import ServiceCard from "@/components/ServiceCard"; import Reveal from "@/components/Reveal"; import ProductCard from "@/components/ProductCard";
import CircuitBackground from "@/components/CircuitBackground"; import Reviews from "@/components/Reviews";
import { SERVICES } from "@/lib/services"; import { PRODUCTS } from "@/lib/products"; import { waLink } from "@/lib/config";
const WHY = [["Diagnostic précis", "Mesures et analyse au niveau composant, pas de remplacement à l'aveugle."], ["Microsoudure experte", "Matériel de reprise professionnel pour les interventions les plus fines."], ["Devis clair", "Vous savez ce qui est fait et pourquoi, avant toute intervention."], ["Proximité", "Atelier au cœur de Marseille, réponse rapide sur WhatsApp."]];
// Produits mis en avant sur l'accueil (identifiants de lib/catalog-data.mjs)
const FEATURED = ["kit-tournevis-de-precision-multifonction-180-en-1", "iphone-18-pro-256-go-burgundy", "samsung-galaxy-a16-4g-4-128-go"];
export default function Home() {
  const featured = FEATURED.map(s => PRODUCTS.find(p => p.slug === s)).filter((p): p is NonNullable<typeof p> => !!p);
  return <>
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-[#eef6ff] to-[#dcecff] text-navy">
      <div className="glow absolute inset-0 -z-10" /><div className="circuit-bg absolute inset-0 -z-10 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" /><CircuitBackground />
      <div className="container-x flex min-h-[88vh] flex-col items-center justify-center py-20 text-center">
        <p className="mb-5 inline-flex animate-pulse rounded-full border border-electric/30 bg-white/75 px-4 py-2 font-tech text-[11px] font-bold uppercase tracking-[0.3em] text-electric shadow-sm backdrop-blur-sm sm:text-xs">ProTronic13 · Maître de la technologie</p>
        <h1 className="max-w-4xl font-tech text-3xl font-bold leading-tight tracking-wide sm:text-5xl lg:text-6xl">La Technologie <span className="bg-gradient-to-r from-navy via-electric to-sky bg-clip-text text-transparent">Entre De Bonnes Mains</span></h1>
        <p className="mt-5 inline-flex rounded-xl border border-electric/20 bg-white/70 px-5 py-3 font-tech text-xs font-bold uppercase tracking-[0.22em] text-electric shadow-md backdrop-blur-sm sm:text-sm">DONNE UNE SECONDE VIE À VOS APPAREILS</p>
        <p className="mt-5 max-w-xl text-lg text-ink/60">Réparation de cartes mères, microsoudure et électronique de précision à Marseille.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/devis" className="btn-primary">Demander un devis</Link>
          <a href={waLink("Bonjour ProTronic13, j'aimerais des informations.")} target="_blank" rel="noopener noreferrer" className="btn-wa">WhatsApp</a>
        </div>
        <div className="relative mt-10 w-screen max-w-none overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#dcecff] to-transparent" />
          <Image src="/image.png" alt="Technologie ProTronic13" width={1536} height={1024} priority sizes="100vw" className="h-auto w-full object-cover animate-hero-reveal" />
        </div>
      </div>
    </section>
    <section className="container-x py-24">
      <Reveal><h2 className="h-section">Nos réparations.</h2><p className="mt-3 max-w-xl text-lg text-ink/60">Du smartphone à la carte mère, chaque panne mérite un vrai diagnostic.</p></Reveal>
      <div className="mt-14 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => <Reveal key={s.id} delay={(i % 3) * 90} className="h-full"><ServiceCard s={s} /></Reveal>)}
      </div>
    </section>
    <section className="relative isolate overflow-hidden bg-[#eef6ff] py-24"><div className="circuit-bg absolute inset-0 -z-10 opacity-70" /><div className="container-x">
      <Reveal className="flex items-end justify-between"><h2 className="h-section">Au Store.</h2><Link href="/store" className="text-electric hover:underline">Tout voir ›</Link></Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{featured.map(p => <Reveal key={p.slug}><ProductCard p={p} /></Reveal>)}</div>
    </div></section>
    <section className="container-x py-24"><Reveal><h2 className="h-section text-center">Pourquoi ProTronic13.</h2></Reveal>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{WHY.map(([t, d], i) => <Reveal key={t} delay={i * 80}><div className="font-tech text-3xl font-bold text-electric">0{i + 1}</div><h3 className="mt-2 font-semibold">{t}</h3><p className="mt-1 text-ink/60">{d}</p></Reveal>)}</div></section>
    <Reviews />
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-navy via-electric to-sky py-24 text-center text-white"><div className="circuit-bg-light absolute inset-0 -z-10" /><Reveal className="container-x">
      <h2 className="h-section">Un appareil en panne ?</h2><p className="mx-auto mt-4 max-w-lg text-white/85">Envoyez-nous une photo et une description, nous revenons vers vous rapidement.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/devis" className="btn bg-white text-navy hover:bg-mist">Devis gratuit</Link><a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa">Écrire sur WhatsApp</a></div></Reveal></section>
  </>;
}
