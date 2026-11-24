import Link from "next/link"; import Image from "next/image";
export default function Logo() {
  return <Link href="/" aria-label="ProTronic13 — Accueil" className="flex items-center gap-2 font-tech text-xl font-bold tracking-wider">
    <Image src="/logo.png" alt="" width={40} height={40} priority className="h-10 w-10 object-contain" />
    <span className="text-white">Pro</span><span className="-ml-2 text-sky">Tronic</span><span className="-ml-2 text-white">13</span></Link>;
}
