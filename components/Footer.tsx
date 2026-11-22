import Link from "next/link"; import Logo from "./Logo"; import SocialButtons from "./SocialButtons"; import { NAV, SITE, waLink } from "@/lib/config";
export default function Footer() {
  return <footer className="bg-mist text-ink/70 border-t border-black/5 text-sm">
    <div className="container-x grid gap-10 py-14 md:grid-cols-3">
      <div><Logo /><p className="mt-3 text-navy">{SITE.slogan}</p><p className="mt-4">{SITE.address}</p></div>
      <div><h3 className="mb-3 font-semibold text-navy">Navigation</h3><ul className="space-y-2">{[...NAV, { href: "/devis", label: "Devis" }].map(n => <li key={n.href}><Link href={n.href} className="hover:text-electric">{n.label}</Link></li>)}</ul></div>
      <div><h3 className="mb-3 font-semibold text-navy">Contact</h3><ul className="space-y-2">
        <li><a href={`tel:${SITE.tel}`} className="hover:text-electric">{SITE.phone}</a></li>
        <li className="pt-1"><SocialButtons /></li>
        <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-electric">WhatsApp</a></li></ul></div>
    </div>
    <div className="border-t border-black/10 py-5 text-center text-xs">© {new Date().getFullYear()} ProTronic13 — Tous droits réservés.</div>
  </footer>;
}
