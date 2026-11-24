"use client";
import Link from "next/link"; import { usePathname, useRouter } from "next/navigation"; import { useState } from "react";
import Logo from "./Logo"; import SocialButtons from "./SocialButtons"; import { NAV, waLink } from "@/lib/config";
export default function Header() {
  const path = usePathname(); const router = useRouter();
  const [open, setOpen] = useState(false); const [search, setSearch] = useState(false); const [q, setQ] = useState("");
  const go = (e: React.FormEvent) => { e.preventDefault(); router.push(`/store?q=${encodeURIComponent(q)}`); setSearch(false); setOpen(false); };
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-navy via-[#0054b8] to-electric text-white shadow-[0_10px_30px_rgba(0,59,142,.18)]">
    <div className="container-x flex h-14 items-center justify-between gap-4">
      <Logo />
      <nav className="hidden lg:flex items-center gap-7 text-sm" aria-label="Navigation principale">
        {NAV.map(n => <Link key={n.href} href={n.href} className={`transition hover:text-sky ${(n.href === "/" ? path === "/" : path.startsWith(n.href)) ? "text-sky font-bold" : "text-white/85"}`}>{n.label}</Link>)}
      </nav>
      <div className="flex items-center gap-2">
        <button aria-label="Rechercher" onClick={() => setSearch(s => !s)} className="rounded-full p-2 text-white transition hover:bg-white/10">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg></button>
        <SocialButtons className="hidden sm:flex" />
        <a href={waLink("Bonjour ProTronic13 !")} target="_blank" rel="noopener noreferrer" className="btn-wa !py-1.5 !px-4 !text-sm hidden sm:inline-flex">WhatsApp</a>
        <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)} className="lg:hidden rounded-full p-2 hover:bg-black/5">
          <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none"><path d={open ? "M6 6l12 12M18 6 6 18" : "M4 8h16M4 16h16"}/></svg></button>
      </div>
    </div>
    {search && <form onSubmit={go} className="container-x pb-3"><input autoFocus value={q} onChange={e => setQ(e.target.value)} placeholder="Rechercher dans le store…" className="w-full rounded-full bg-mist px-5 py-3 outline-none focus:ring-2 ring-electric" /></form>}
    {open && <nav className="lg:hidden container-x pb-5 flex flex-col gap-1 text-lg">
      {NAV.map(n => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-2">{n.label}</Link>)}
      <Link href="/devis" onClick={() => setOpen(false)} className="btn-primary mt-2">Demander un devis</Link>
      <div className="mt-3 flex items-center gap-3"><SocialButtons /><a href={waLink("Bonjour ProTronic13 !")} target="_blank" rel="noopener noreferrer" className="btn-wa !py-2 !text-sm">WhatsApp</a></div></nav>}
  </header>;
}
