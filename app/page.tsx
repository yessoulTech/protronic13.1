import Link from "next/link"; import Image from "next/image"; import ServiceCard from "@/components/ServiceCard"; import Reveal from "@/components/Reveal"; import ProductCard from "@/components/ProductCard";
import { SERVICES } from "@/lib/services"; import { PRODUCTS } from "@/lib/products"; import { waLink } from "@/lib/config";
const WHY = [["Diagnostic précis", "Mesures et analyse au niveau composant, pas de remplacement à l'aveugle."], ["Microsoudure experte", "Matériel de reprise professionnel pour les interventions les plus fines."], ["Devis clair", "Vous savez ce qui est fait et pourquoi, avant toute intervention."], ["Proximité", "Atelier au cœur de Marseille, réponse rapide sur WhatsApp."]];
export default function Home() {
  return <>
    <section className="relative isolate overflow-hidden bg-white text-navy">
      <div className="glow absolute inset-0 -z-10" />
      <div className="container-x flex min-h-[88vh] flex-col items-center justify-center py-24 text-center">
        <p className="mb-5 text-electric font-medium">ProTronic13 · Maître de la technologie.</p>
        <h1 className="h-display max-w-4xl">La Technologie Entre De Bonnes Mains.</h1>
        <p className="mt-6 max-w-xl text-lg text-ink/60">Réparation de cartes mères, microsoudure et électronique de précision à Marseille.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/devis" className="btn-primary">Demander un devis</Link>
          <a href={waLink("Bonjour ProTronic13, j'aimerais des informations.")} target="_blank" rel="noopener noreferrer" className="btn-wa">WhatsApp</a>
        </div>
        <Image src="/logo.png" alt="Logo ProTronic13" width={420} height={420} priority className="mt-12 h-auto w-64 animate-float sm:w-80" />
      </div>
    </section>
    <section className="container-x py-24">
      <Reveal><h2 className="h-section">Nos réparations.</h2><p className="mt-3 max-w-xl text-lg text-ink/60">Du smartphone à la carte mère, chaque panne mérite un vrai diagnostic.</p></Reveal>
      <div className="mt-14 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => <Reveal key={s.id} delay={(i % 3) * 90} className="h-full"><ServiceCard s={s} /></Reveal>)}
      </div>
    </section>
    <section className="bg-mist py-24"><div className="container-x">
      <Reveal className="flex items-end justify-between"><h2 className="h-section">Au Store.</h2><Link href="/store" className="text-electric hover:underline">Tout voir ›</Link></Reveal>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{PRODUCTS.filter(p => p.badge).slice(0, 3).map(p => <Reveal key={p.slug}><ProductCard p={p} /></Reveal>)}</div>
    </div></section>
    <section className="container-x py-24"><Reveal><h2 className="h-section text-center">Pourquoi ProTronic13.</h2></Reveal>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{WHY.map(([t, d], i) => <Reveal key={t} delay={i * 80}><div className="text-electric text-3xl font-semibold">0{i + 1}</div><h3 className="mt-2 font-semibold">{t}</h3><p className="mt-1 text-ink/60">{d}</p></Reveal>)}</div></section>
    <section className="bg-mist py-24 text-center text-navy"><Reveal className="container-x">
      <h2 className="h-section">Un appareil en panne ?</h2><p className="mx-auto mt-4 max-w-lg text-ink/60">Envoyez-nous une photo et une description, nous revenons vers vous rapidement.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/devis" className="btn-primary">Devis gratuit</Link><a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-wa">Écrire sur WhatsApp</a></div></Reveal></section>
  </>;
}
