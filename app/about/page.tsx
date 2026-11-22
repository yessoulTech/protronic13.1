import type { Metadata } from "next"; import Reveal from "@/components/Reveal"; import PageHeader from "@/components/PageHeader";
export const metadata: Metadata = { title: "À propos", description: "ProTronic13, atelier de réparation électronique et microsoudure à Marseille." };
const VALUES = [["Expertise", "Une approche technique rigoureuse, au niveau composant."], ["Transparence", "Diagnostic expliqué, devis clair, aucune surprise."], ["Qualité", "Des réparations durables avec du matériel professionnel."]];
export default function About() {
  return <><PageHeader label="À propos" title="Maître de" accent="la technologie." subtitle="Un atelier marseillais passionné par l'électronique." />
    <section className="container-x max-w-3xl py-20"><Reveal><p className="text-2xl leading-relaxed text-ink/80">ProTronic13 est un atelier marseillais spécialisé dans la réparation de cartes mères et la microsoudure. Nous redonnons vie aux smartphones, consoles, ordinateurs et équipements électroniques que d'autres jugent irréparables.</p></Reveal></section>
    <section className="bg-mist py-20"><div className="container-x grid gap-6 md:grid-cols-3">{VALUES.map(([t, d], i) => <Reveal key={t} delay={i * 80}><div className="h-full rounded-3xl bg-white p-8"><h3 className="text-xl font-semibold text-electric">{t}</h3><p className="mt-2 text-ink/65">{d}</p></div></Reveal>)}</div></section></>;
}
