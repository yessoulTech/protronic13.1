import type { Metadata } from "next"; import { SITE, waLink } from "@/lib/config"; import SocialButtons from "@/components/SocialButtons";
export const metadata: Metadata = { title: "Contact", description: "Atelier ProTronic13, 19 Cours Franklin Roosevelt, 13001 Marseille." };
export default function Contact() {
  return <section className="container-x py-16"><p className="text-electric font-medium">Contact</p><h1 className="h-section mt-2">Venez nous voir.</h1>
    <div className="mt-10 grid gap-8 md:grid-cols-2">
      <div className="space-y-6"><div><h2 className="font-semibold">Adresse</h2><p className="text-ink/65">{SITE.address}</p></div>
        <div><h2 className="font-semibold">Téléphone</h2><a href={`tel:${SITE.tel}`} className="text-electric">{SITE.phone}</a></div>
        <div className="flex flex-wrap items-center gap-3"><SocialButtons /><a href={waLink("Bonjour ProTronic13 !")} target="_blank" rel="noopener noreferrer" className="btn-wa">WhatsApp</a><a href={`tel:${SITE.tel}`} className="btn-ghost">Appeler</a></div></div>
      <iframe title="Carte ProTronic13" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-96 w-full rounded-3xl border-0"
        src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.address)}&output=embed`} />
    </div></section>;
}
