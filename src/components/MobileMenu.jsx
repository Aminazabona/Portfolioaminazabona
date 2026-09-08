import React from "react";
import { X } from "lucide-react";
import { navLinks } from "../data/navLinks";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-slate-950 md:hidden">
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white"
        aria-label="Fermer le menu"
      >
        <X size={32} />
      </button>

      <div className="pt-24 px-8">
        <div className="flex flex-col items-start gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-semibold text-slate-300 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;