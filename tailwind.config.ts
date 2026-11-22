import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { electric: "#0066D9", navy: "#003B8E", sky: "#00BFFF", ink: "#0b0b0f", mist: "#f5f5f7" },
    fontFamily: { tech: ["var(--font-tech)","Orbitron","ui-monospace","sans-serif"], sans: ["-apple-system","BlinkMacSystemFont","Inter","Segoe UI","Helvetica Neue","Arial","sans-serif"] },
    keyframes: { float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } } },
    animation: { float: "float 6s ease-in-out infinite" },
  } },
  plugins: [],
} satisfies Config;
