import Link from "next/link"; import Image from "next/image";
export default function Logo() {
  return <Link href="/" aria-label="ProTronic13 — Accueil" className="flex items-center gap-2 text-xl font-bold tracking-tight">
    <Image src="/logo.png" alt="" width={40} height={40} priority className="h-10 w-10 object-contain" />
    <span className="text-navy">Pro</span><span className="-ml-2 text-electric">Tronic</span><span className="-ml-2 text-sky">13</span></Link>;
}
