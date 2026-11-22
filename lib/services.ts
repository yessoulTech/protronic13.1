import type { IconName } from "@/components/ServiceIcon";
export type Service = { id: string; image: string; icon: IconName; title: string; text: string; tag: string };
export const SERVICES: Service[] = [
  { id: "carte-mere", image: "/services/carte-mere.webp", icon: "cpu", title: "Réparation carte mère", text: "Diagnostic au niveau composant, remplacement de circuits intégrés, remise en état de cartes mères.", tag: "Expertise" },
  { id: "mobile", image: "/services/mobile.webp", icon: "phone", title: "Smartphones & tablettes", text: "Écran, batterie, connecteur de charge, carte logique, récupération après dégât des eaux.", tag: "Mobile" },
  { id: "consoles", image: "/services/consoles.webp", icon: "gamepad", title: "PlayStation, Xbox & Nintendo", text: "Port HDMI, surchauffe, lecteur, alimentation, pannes de carte mère sur consoles.", tag: "Gaming" },
  { id: "laptop", image: "/services/laptop.webp", icon: "laptop", title: "Ordinateurs portables", text: "Pannes d'alimentation, écran, charnières, carte mère, nettoyage et mise à niveau.", tag: "Laptop" },
  { id: "microsoudure", image: "/services/microsoudure.webp", icon: "pen", title: "Microsoudure & composants", text: "Reballing, remplacement BGA, pistes arrachées, composants CMS de précision.", tag: "Précision" },
  { id: "equipements", image: "/services/equipements.webp", icon: "wrench", title: "Équipements électroniques", text: "Réparation d'appareils et cartes électroniques divers sur devis après diagnostic.", tag: "Sur mesure" },
];
