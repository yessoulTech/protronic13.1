const Circuit = ({ flip = false }: { flip?: boolean }) => (
  <svg aria-hidden viewBox="0 0 320 130" className={`pointer-events-none absolute top-0 hidden h-32 w-80 text-sky md:block ${flip ? "right-0 -scale-x-100" : "left-0"}`} fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".55">
    <path d="M0 40h110l40 40h70M0 62h90l36 36h40M0 84h60l28 28h30M40 18h70l24 24"/>
    <g fill="currentColor" stroke="none"><circle cx="220" cy="80" r="3"/><circle cx="166" cy="98" r="3"/><circle cx="118" cy="112" r="3"/><circle cx="134" cy="42" r="3"/></g>
  </svg>
);
// En-tête de page : pastille, titre avec accent dégradé, sous-titre, circuits décoratifs.
export default function PageHeader({ label, title, accent, subtitle }: { label: string; title?: string; accent: string; subtitle?: string }) {
  return <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#f3f9ff] px-6 pb-12 pt-10 text-center">
    <div aria-hidden className="circuit-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" /><Circuit /><Circuit flip />
    <div className="relative mx-auto flex max-w-2xl items-center justify-center gap-3">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-sky/70" />
      <span className="rounded-full border-2 border-electric px-5 py-1 text-base font-medium text-electric">{label}</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-sky/70" />
    </div>
    <h1 className="relative mt-6 text-4xl font-bold italic tracking-tight text-ink sm:text-5xl lg:text-6xl">{title && <>{title} </>}<span className="bg-gradient-to-r from-electric to-sky bg-clip-text text-transparent">{accent}</span></h1>
    {subtitle && <p className="relative mx-auto mt-4 max-w-xl text-lg text-ink/65">{subtitle}</p>}
  </section>;
}
