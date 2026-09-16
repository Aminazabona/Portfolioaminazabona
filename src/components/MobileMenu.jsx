import { X } from "lucide-react";
import { navLinks } from "../data/navLinks";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`
        fixed top-0 right-0 z-[999]
        h-screen w-[82%] max-w-sm
        bg-blue-950
        md:hidden
        transform
        transition-transform
        duration-1000
        ease-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}
    >
      {/* Bouton fermer */}
      <button
        onClick={() => setIsOpen(false)}
        className="
          absolute top-6 right-6
          p-2
          text-white
          hover:text-blue-400
          transition-colors
        "
        aria-label="Fermer le menu"
      >
        <X size={32} />
      </button>

      {/* Liens mobiles */}
      <div className="pt-28 px-8">
        <div className="flex flex-col items-start gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="
                text-xl
                font-semibold
                text-white
                hover:text-blue-400
                transition-colors
                duration-300
              "
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