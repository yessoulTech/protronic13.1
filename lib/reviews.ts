// Avis Google Maps (transcrits depuis les captures). Pour en ajouter : copiez un bloc ci-dessous.
export type Review = { name: string; text: string; visited: string; badge?: string; color: string };
export const REVIEWS: Review[] = [
  { name: "Aymen", badge: "Local Guide", visited: "Février", color: "#5b9a3a",
    text: "Je recommande à 100%. Professionnel réactif, honnête et sérieux. Un objet qui sert de berceuse à mon bébé a été réparé le soir même. J'aurais aimé connaître cette société plutôt afin de réparer certains objets plutôt que de les jeter." },
  { name: "Nathan Devambez", visited: "Octobre", color: "#6aa334",
    text: "Très bonne expérience chez protronic13, sans rdv les personnes ont su résoudre mon soucis rapidement. Super sympa je recommande fortement pour tout problème electronique 👍 …" },
  { name: "Mehdi Dusud", visited: "Août", color: "#e8417f",
    text: "microsoudure + réparation calculateur Mercedes normalement bon pour la poubelle en 24h merci beaucoup tres bon travail je recommande fortement" },
  { name: "patrick pisanu", visited: "Août", color: "#c8400f",
    text: "Je vous remercie à toute l'équipe d'avoir fait le nécessaire pour retrouver le bon fonctionnement de mon matériel électronique sérieux rigueur du travail et surtout de très grands professionnels encore merci." },
  { name: "TEO HEURTAUX", visited: "Octobre", color: "#0066D9",
    text: "Équipes au top. Je suis venue en urgence réparer une carte electronique de climatisation , il ont gérer le problème en 10 minutes. Je reviendrai" },
  { name: "Maurice Blanc", visited: "Avril", color: "#0e9aa7",
    text: "Je recommande se professionnel. Réparation microsdure rapide et efficace" },
  { name: "jeannette guy", visited: "Mars", color: "#7a5cc7",
    text: "Très bon réparateur spécialisé en microsodure à Marseille. Problème de carte mère réparé très rapidement travail sérieux et prix correct je recommande" },
];
