import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.body.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const home = document.getElementById('home');
    if (home) {
      home.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-slate-900 bg-slate-950/90 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        {/* Espace vide gauche invisible pour centrer le copyright */}
        <div className="w-10 h-10 shrink-0" aria-hidden="true" />

        {/* Texte de copyright centré */}
        <p className="text-xs sm:text-sm text-slate-500 text-center font-medium">
          © {new Date().getFullYear()} Amina Zabona. Tous droits réservés.
        </p>

        {/* Bouton retour en haut : icône seule, sans texte */}
        <button
          onClick={scrollToTop}
          aria-label="Retourner en haut de page"
          title="Haut de page"
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-blue-400 hover:text-white hover:border-blue-500/50 hover:bg-slate-850 transition-all hover:-translate-y-1 shadow-lg shadow-black/30 shrink-0 cursor-pointer"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;