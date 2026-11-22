// Pistes de circuit animées (décor des grandes sections).
export default function CircuitBackground() {
  const paths = ["M0 120H220l60 60h140", "M0 210H140l50 50H300", "M0 310H100l40-40h120", "M0 470H180l60-60", "M1200 140H980l-60 60H800", "M1200 250H1060l-50 50H900", "M1200 350H1100l-40-40H940", "M1200 470H1010l-60-60"];
  const nodes: [number, number][] = [[420, 180], [300, 260], [260, 270], [240, 410], [800, 200], [900, 300], [940, 310], [950, 410]];
  return <svg aria-hidden viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 -z-10 h-full w-full text-sky" fill="none" stroke="currentColor" strokeWidth="1.5">
    <g opacity=".35">{paths.map(d => <path key={d} d={d} />)}</g>
    <g opacity=".9">{paths.map(d => <path key={d + "t"} d={d} className="trace" />)}</g>
    <g fill="currentColor" stroke="none">{nodes.map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="4" className="animate-pulse" />)}</g>
  </svg>;
}
