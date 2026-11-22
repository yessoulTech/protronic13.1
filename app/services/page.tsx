import type { Metadata } from "next"; import Reveal from "@/components/Reveal"; import PageHeader from "@/components/PageHeader"; import ServiceCard from "@/components/ServiceCard"; import { SERVICES } from "@/lib/services";
export const metadata: Metadata = { title: "Services de réparation", description: "Cartes mères, smartphones, consoles, ordinateurs portables et microsoudure à Marseille." };
export default function Services() {
  return <>
    <PageHeader label="Nos Services" title="Réparer." accent="Avec précision." subtitle="Une expertise complète pour tous vos appareils électroniques" />
    <section className="bg-[#f3f9ff] px-6 pb-20"><div className="mx-auto grid max-w-6xl gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((s, i) => <Reveal key={s.id} delay={(i % 3) * 90} className="h-full"><ServiceCard s={s} /></Reveal>)}</div></section>
    <svg aria-hidden viewBox="0 0 1440 60" preserveAspectRatio="none" className="block h-12 w-full bg-[#f3f9ff] text-navy"><path fill="currentColor" d="M0 40C240 0 480 0 720 25s480 30 720-5v40H0z"/></svg>
  </>;
}
