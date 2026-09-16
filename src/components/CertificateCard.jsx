import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import CertificateImage from './CertificateImage';

const CertificateCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group flex flex-col justify-between aspect-square rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-blue-500/40 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(37,99,235,0.15)]"
    >
      {/* 1. Zone Image supérieure (48% de la hauteur du carré) cliquable */}
      <a
        href={cert.photoUrl}
        target="_blank"
        rel="noopener noreferrer"
        title={`Ouvrir la photo : ${cert.title}`}
        className="relative w-full h-[48%] overflow-hidden border-b border-slate-800/70 bg-slate-950 shrink-0 block cursor-pointer"
      >
        <CertificateImage
          src={cert.image}
          alt={cert.title}
          certId={cert.id}
          label={cert.imageLabel}
          isProfilePhoto={cert.isProfilePhoto}
        />
        {/* Pastille Année en haut à droite sur l'image */}
        <span className="absolute top-2.5 right-2.5 z-10 text-[10px] font-semibold text-blue-300 bg-slate-950/80 border border-blue-500/30 px-2 py-0.5 rounded-full backdrop-blur-sm">
          {cert.year}
        </span>
      </a>

      {/* 2. Zone textuelle centrale */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center min-h-0">
        <h3 className="text-sm sm:text-base font-bold text-white mb-1 leading-snug group-hover:text-blue-200 transition-colors line-clamp-2">
          {cert.title}
        </h3>
        <p className="text-xs font-semibold text-blue-400 mb-1.5 truncate">
          {cert.issuer}
        </p>
        <div className="inline-flex items-center gap-1.5 text-[11px] text-slate-400">
          <CheckCircle2 size={12} className="text-blue-500 shrink-0" />
          <span className="truncate">ID: {cert.credentialId}</span>
        </div>
      </div>

      {/* 3. Liens d'action en bas */}
      <div className="px-4 sm:px-5 pb-4 pt-2 flex items-center justify-between border-t border-white/[0.04] shrink-0">
        <a
          href={cert.documentUrl || cert.photoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-400 hover:text-blue-300 transition-all group-hover:translate-x-1"
        >
          <span>{cert.buttonText || "Voir la photo"}</span>
          {cert.isDocument ? <FileText size={14} /> : <ExternalLink size={14} />}
        </a>

        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
          {cert.badgeLabel}
        </span>
      </div>
    </motion.div>
  );
};

export default CertificateCard;