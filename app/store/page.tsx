import { Suspense } from "react"; import type { Metadata } from "next"; import Catalog from "./Catalog"; import PageHeader from "@/components/PageHeader";
export const metadata: Metadata = { title: "Store", description: "Apple, Samsung, outils, consommables, outillage professionnel et gaming chez ProTronic13." };
export default function Store() {
  return <><PageHeader label="Store" title="Le meilleur de" accent="l'électronique." subtitle="Commandez directement par WhatsApp." />
    <Suspense fallback={<div className="container-x py-10">Chargement…</div>}><Catalog /></Suspense></>;
}
