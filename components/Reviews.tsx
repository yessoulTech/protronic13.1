"use client";
import { useRef } from "react"; import { REVIEWS } from "@/lib/reviews"; import { SITE } from "@/lib/config";
const Stars = () => <div className="flex gap-0.5 text-[#fbbc04]" aria-label="5 étoiles sur 5">{Array.from({ length: 5 }, (_, i) => <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>)}</div>;
// Avis Google en liste horizontale à balayer (une carte = un avis).
export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const move = (d: number) => ref.current?.scrollBy({ left: d * ref.current.clientWidth * 0.8, behavior: "smooth" });
  return <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#e6f2ff] to-white py-20">
    <div className="circuit-bg absolute inset-0 -z-10 opacity-60" />
    <div className="container-x">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><p className="font-tech text-xs uppercase tracking-[0.25em] text-electric">Avis Google</p>
          <h2 className="h-section mt-2">Ce que disent nos clients.</h2><p className="mt-2 text-ink/60">Des avis publiés sur notre fiche Google Maps.</p></div>
        <div className="hidden gap-2 sm:flex">{[["‹", -1, "Avis précédents"], ["›", 1, "Avis suivants"]].map(([l, d, a]) =>
          <button key={a as string} type="button" aria-label={a as string} onClick={() => move(d as number)} className="grid h-11 w-11 place-items-center rounded-full bg-white text-xl text-navy shadow ring-1 ring-electric/20 transition hover:bg-electric hover:text-white">{l}</button>)}</div>
      </div>
      <div ref={ref} className="no-scrollbar -mx-6 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-6 px-6 pb-6">
        {REVIEWS.map(r => <article key={r.name} className="flex w-[84%] shrink-0 snap-start flex-col rounded-3xl bg-white p-6 shadow-[0_12px_40px_rgba(0,102,217,.12)] ring-1 ring-electric/10 sm:w-[46%] lg:w-[31.5%]">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full text-lg font-medium text-white" style={{ background: r.color }}>{r.name[0].toUpperCase()}</span>
            <div><p className="font-semibold leading-tight text-navy">{r.name}</p><p className="text-xs text-ink/50">{r.badge ? `${r.badge} · ` : ""}Avis Google</p></div></div>
          <div className="mt-4"><Stars /></div>
          <p className="mt-3 flex-1 leading-relaxed text-ink/75">{r.text}</p>
          <p className="mt-4 text-xs text-ink/45">Visité en {r.visited.toLowerCase()}</p>
        </article>)}
      </div>
      <p className="text-center text-xs text-ink/40 sm:hidden">← Faites glisser →</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a href={SITE.maps} target="_blank" rel="noopener noreferrer" className="btn-ghost">Voir tous les avis sur Google</a>
        <a href={SITE.reviewUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">★ Laisser un avis</a></div>
    </div></section>;
}
