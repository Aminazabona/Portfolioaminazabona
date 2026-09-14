import { ArrowRight, Download, FolderGit2 } from "lucide-react";
import SocialLinks from "./SocialLinks";

const HeroContent = () => {
  return (
    <div className="w-full flex flex-col items-start gap-6">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-sm font-medium">
        <span>👋 Salut, je suis</span>
      </div>

      {/* Titres */}
      <div className="w-full space-y-1">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Amina Zabona
        </h1>

        <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500">
          Développeuse Web
        </p>
      </div>

      {/* Description */}
      <p className="w-full max-w-xl text-slate-400 text-base sm:text-lg leading-relaxed">
        Je crée des sites et applications web modernes, performants et
        responsives avec des technologies modernes.
      </p>

      {/* Réseaux sociaux */}
      <div className="w-full sm:w-auto">
        <SocialLinks />
      </div>

      {/* Boutons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">

        <a
          href="#projects"
          className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200"
        >
          <FolderGit2 size={18} />
          <span>Voir mes projets</span>
          <ArrowRight size={18} />
        </a>

        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 text-slate-200 font-semibold rounded-xl transition-all duration-200"
        >
          <Download size={18} />
          <span>Télécharger CV</span>
        </a>

      </div>
    </div>
  );
};

export default HeroContent;