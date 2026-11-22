import Image from "next/image"; import Link from "next/link";
import ServiceIcon from "./ServiceIcon"; import type { Service } from "@/lib/services";
export default function ServiceCard({ s }: { s: Service }) {
  return <article id={s.id} className="group scroll-mt-24 flex h-full flex-col rounded-3xl bg-white shadow-[0_12px_40px_rgba(0,102,217,.12)] ring-1 ring-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,102,217,.2)]">
    <div className="relative">
      <div className="relative aspect-[13/5] overflow-hidden rounded-t-3xl">
        <Image src={s.image} alt={s.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <span className="absolute bottom-0 left-1/2 grid aspect-square w-[17%] -translate-x-1/2 translate-y-1/2 place-items-center rounded-full bg-electric text-white shadow-lg ring-[5px] ring-white"><ServiceIcon name={s.icon} /></span>
    </div>
    <div className="flex flex-1 flex-col items-center px-6 pb-7 pt-12 text-center">
      <h3 className="text-xl font-semibold tracking-tight text-navy">{s.title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink/65">{s.text}</p>
      <Link href={`/devis?device=${encodeURIComponent(s.title)}`} className="btn-primary mt-6 gap-2">Demander un devis <span aria-hidden>→</span></Link>
    </div>
  </article>;
}
