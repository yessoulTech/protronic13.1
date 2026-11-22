export const SITE = {
  name: "ProTronic13", slogan: "Maître de la technologie.",
  phone: "07 45 47 94 91", tel: "+33745479491", wa: "33745479491",
  youtube: "https://www.youtube.com/@tomorrowtechnology3059",
  maps: "https://maps.app.goo.gl/LLsuQ5w7pHbF7i1W7",
  // Avis Google : identifiant de la fiche déduit du lien Maps. Si le bouton ne marche pas, remplacez par SITE.maps.
  reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ_1QL-1W_yRIRDBomoOORTcU",
  tiktok: "https://www.tiktok.com/@protronic.13",
  facebook: "https://web.facebook.com/people/ProTronic13/100085107744998/?locale=fr_FR",
  address: "19 Cr Franklin Roosevelt, 13001 Marseille, France",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://protronic13.fr",
};
export const waLink = (text?: string) =>
  `https://wa.me/${SITE.wa}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
export const NAV = [
  { href: "/", label: "Accueil" }, { href: "/store", label: "Store" },
  { href: "/services", label: "Services" }, { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];
