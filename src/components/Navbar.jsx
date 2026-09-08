import React, { useState } from 'react';
import { CodeXml, Menu } from 'lucide-react';
import { navLinks } from '../data/navLinks';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600/10 rounded-lg">
            <CodeXml className="text-blue-600" size={28} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight">
              Amina <span className="text-blue-600">Zabona</span>
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
              Développeuse Web
            </span>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-blue-600 transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* MOBILE TOGGLE BUTTON */}
        <button 
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
          aria-label="Ouvrir le menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Rendu du menu mobile */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;