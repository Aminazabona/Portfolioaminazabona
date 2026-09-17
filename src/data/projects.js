import bunamar from "../assets/images/bunamar.png";
import spgcr from "../assets/images/spgcr.png";
import aminaweather from "../assets/images/aminaweather.png";

export const projects = [
  {
    id: "bunamar-shop",
    title: "Bunamar Shop",
    technologies: "React, Tailwind CSS, Node.js",
    description:
      "Site e-commerce moderne avec panier, authentification et paiement en ligne.",
    image: bunamar,
    demoUrl: "https://bunamar-frontend.vercel.app/",
    githubUrl: "https://github.com/aminazabona",
    badgeLabel: "E-Commerce",
  },
  {
    id: "spgcr",
    title: "SPGCR – Suivi de Production",
    technologies: "React, FastAPI, PostgreSQL",
    description:
      "Application de suivi de production et gestion des coûts de revient pour PME.",
    image: spgcr,
    demoUrl: "https://systeme-de-suivie-de-production-et.vercel.app/",
    githubUrl: "https://github.com/aminazabona",
    badgeLabel: "Dashboard & Gestion",
  },
  {
    id: "amina-weather",
    title: "AminaWeather",
    technologies: "React, Tailwind CSS",
    description:
      "Application météo moderne et interactive affichant les prévisions météorologiques en temps réel.",
    image: aminaweather,
    demoUrl: "https://aminaweather-app.netlify.app/",
    githubUrl: "https://github.com/aminazabona",
    badgeLabel: "Météo",
  },
];