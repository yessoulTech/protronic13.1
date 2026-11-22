import type { Metadata } from "next"; import "./globals.css";
import Header from "@/components/Header"; import Footer from "@/components/Footer"; import { SITE } from "@/lib/config";
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "ProTronic13 — Réparation électronique & microsoudure à Marseille", template: "%s | ProTronic13" },
  description: "Réparation de cartes mères, smartphones, consoles et ordinateurs à Marseille. Microsoudure de précision. ProTronic13, maître de la technologie.",
  openGraph: { siteName: "ProTronic13", locale: "fr_FR", type: "website" },
};
const ld = { "@context": "https://schema.org", "@type": "ElectronicsRepairShop", name: SITE.name, telephone: SITE.tel, url: SITE.url,
  address: { "@type": "PostalAddress", streetAddress: "19 Cours Franklin Roosevelt", postalCode: "13001", addressLocality: "Marseille", addressCountry: "FR" } };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fr"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    <Header /><main>{children}</main><Footer /></body></html>;
}
