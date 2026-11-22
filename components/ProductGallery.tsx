"use client";
import Image from "next/image"; import { useRef, useState } from "react";
// Photos à balayer (swipe) : défilement horizontal avec accroche, points indicateurs, flèches facultatives.
export default function ProductGallery({ images, alt, sizes, arrows = false, priority = false }: { images: string[]; alt: string; sizes: string; arrows?: boolean; priority?: boolean }) {
  const ref = useRef<HTMLDivElement>(null); const [i, setI] = useState(0);
  const onScroll = () => { const el = ref.current; if (el) setI(Math.round(el.scrollLeft / el.clientWidth)); };
  const go = (n: number) => ref.current?.scrollTo({ left: n * ref.current.clientWidth, behavior: "smooth" });
  return <div className="absolute inset-0">
    <div ref={ref} onScroll={onScroll} className="no-scrollbar flex h-full w-full snap-x snap-mandatory overflow-x-auto">
      {images.map((src, k) => <div key={src} className="relative h-full w-full shrink-0 snap-center">
        <Image src={src} alt={`${alt} — photo ${k + 1}`} fill sizes={sizes} priority={priority && k === 0} className="object-contain p-3 mix-blend-multiply" /></div>)}
    </div>
    <div className="pointer-events-none absolute inset-x-0 bottom-2 z-10 flex justify-center gap-1.5">{images.map((_, k) => <span key={k} className={`h-1.5 rounded-full transition-all ${k === i ? "w-5 bg-electric" : "w-1.5 bg-navy/30"}`} />)}</div>
    {arrows && images.length > 1 && <>
      <button type="button" aria-label="Photo précédente" onClick={() => go(Math.max(0, i - 1))} className="absolute left-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow hover:bg-white">‹</button>
      <button type="button" aria-label="Photo suivante" onClick={() => go(Math.min(images.length - 1, i + 1))} className="absolute right-3 top-1/2 z-10 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow hover:bg-white">›</button></>}
  </div>;
}
