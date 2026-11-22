"use client";
import { useState } from "react"; import { useSearchParams } from "next/navigation"; import { waLink } from "@/lib/config";
const field = "w-full rounded-2xl bg-mist px-4 py-3 outline-none focus:ring-2 ring-electric";
export default function DevisForm() {
  const sp = useSearchParams(); const [files, setFiles] = useState<File[]>([]); const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); const d = new FormData(e.currentTarget);
    const msg = ["Demande de devis ProTronic13", `Nom : ${d.get("name")}`, `Téléphone : ${d.get("phone")}`, d.get("email") ? `Email : ${d.get("email")}` : "",
      `Appareil : ${d.get("device")}`, `Modèle : ${d.get("model")}`, `Problème : ${d.get("issue")}`, files.length ? `Photos : ${files.length} (envoyées dans la conversation)` : ""].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank", "noopener,noreferrer"); setSent(true);
  };
  return <form onSubmit={submit} className="grid gap-4">
    <div className="grid gap-4 sm:grid-cols-2"><input name="name" required placeholder="Nom complet" className={field} autoComplete="name" /><input name="phone" required type="tel" placeholder="Téléphone" className={field} autoComplete="tel" /></div>
    <input name="email" type="email" placeholder="Email (facultatif)" className={field} />
    <div className="grid gap-4 sm:grid-cols-2"><input name="device" required defaultValue={sp.get("device") ?? ""} placeholder="Appareil (ex. smartphone, PS5…)" className={field} /><input name="model" required placeholder="Modèle" className={field} /></div>
    <textarea name="issue" required rows={5} placeholder="Décrivez le problème" className={field} />
    <label className="cursor-pointer rounded-2xl border-2 border-dashed border-electric/40 p-5 text-center text-sm text-ink/60 hover:bg-electric/5">
      {files.length ? `${files.length} photo(s) : ${files.map(f => f.name).join(", ")}` : "Ajouter des photos de l'appareil"}
      <input type="file" accept="image/*" multiple className="sr-only" onChange={e => setFiles(Array.from(e.target.files ?? []).slice(0, 5))} /></label>
    <button className="btn-wa">Envoyer via WhatsApp</button>
    <p className="text-sm text-ink/50">{sent ? "WhatsApp s'est ouvert : joignez vos photos dans la conversation (WhatsApp ne permet pas l'envoi automatique de fichiers)." : "Le texte est prérempli dans WhatsApp ; vos photos se joignent ensuite dans la conversation."}</p>
  </form>;
}
