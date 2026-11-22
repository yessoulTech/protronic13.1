import { Suspense } from "react"; import type { Metadata } from "next"; import DevisForm from "./DevisForm";
export const metadata: Metadata = { title: "Devis de réparation", description: "Demandez un devis de réparation gratuit à ProTronic13." };
export default function Devis() {
  return <section className="container-x max-w-2xl py-16"><p className="text-electric font-medium">Devis</p><h1 className="h-section mt-2">Décrivez votre panne.</h1>
    <p className="mb-10 mt-3 text-ink/60">Remplissez le formulaire : votre demande part directement sur WhatsApp.</p><Suspense><DevisForm /></Suspense></section>;
}
