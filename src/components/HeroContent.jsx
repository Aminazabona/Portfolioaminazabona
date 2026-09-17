import { ArrowRight, Download, FolderGit2 } from "lucide-react";
import SocialLinks from "./SocialLinks";

const HeroContent = () => (
  <div className="w-full flex flex-col items-start gap-6">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-sm font-medium">
      <span>👋 Salut, je suis</span>
    </div>

    <div className="w-full space-y-1">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
        Amina Zabona
      </h1>
      <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500">
        Développeuse Web
      </p>
    </div>

    <p className="w-full max-w-xl text-slate-400 text-base sm:text-lg leading-relaxed">
      Je crée des sites et applications web modernes, performants et
      responsives avec des technologies modernes.
    </p>

    <div className="w-full sm:w-auto">
      <SocialLinks />
    </div>

    <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto">
      <a
        href="#projects"
        className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 transition-all"
      >
        <FolderGit2 size={18} />
        Voir mes projets
        <ArrowRight size={18} />
      </a>

      <a
        href="/AMINA_ZABONA_ESTHER_CV.pdf"
        download="AMINA_ZABONA_ESTHER_CV.pdf"
        className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-3.5 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold rounded-xl transition-all"
      >
        <Download size={18} />
        Télécharger CV
      </a>
    </div>
  </div>
);

export default HeroContent;