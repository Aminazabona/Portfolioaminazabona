import certificatTalent from "../assets/images/aminazabonacertificat.jpeg";
import certificatIA from "../assets/images/aminazabonaesther.jpeg";
import photoAmina from "../assets/images/aminadefense.jpg";

export const certificates = [
  {
    id: "certif-talent4startup",
    title: "Certificat Développeuse Web Fullstack",
    issuer: "Afrix Global – Talent4Startup",
    year: "2026",
    credentialId: "AFX-T4S-2026",
    image: certificatTalent,
    photoUrl: certificatTalent,
    documentUrl: certificatTalent,
    badgeLabel: "Fullstack",
    buttonText: "Voir le certificat",
    isDocument: false,
    imageLabel: "Certificat Développeuse Web Fullstack",
  },

  {
    id: "certif-ia-goinnovation",
    title: "Certificat en Intelligence Artificielle",
    issuer: "Go Innovation — Programme Go Skills",
    year: "2026",
    credentialId: "GO-AI-2026",
    image: certificatIA,
    photoUrl: certificatIA,
    documentUrl: certificatIA,
    badgeLabel: "IA & Data",
    buttonText: "Voir le certificat",
    isDocument: false,
    imageLabel: "Photo du certificat IA",
  },

  {
    id: "certif-isig",
    title: "Licence en Informatique Appliquée à la Gestion des entreprises",
    issuer: "ISIG – Goma",
    year: "2023-2026",
    credentialId: "ISIG-L3-2026",
    image: photoAmina,
    photoUrl: photoAmina,
    documentUrl: "/documents/RELEVER  DES COTES.pdf",
    badgeLabel: "Relevés",
    buttonText: "Voir mes relevés",
    isDocument: true,
    imageLabel: "Photo d'Amina (Diplômée)",
    isProfilePhoto: true,
  },
];