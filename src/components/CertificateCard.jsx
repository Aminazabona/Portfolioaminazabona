import React from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, CheckCircle2 } from 'lucide-react';

const CertificateCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(37,99,235,0.12)]"
    >
      <div>
        {/* En-tête : Icône Award et badge année */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-950/70 border border-blue-600/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:border-blue-500 transition-all duration-300">
            <Award size={20} />
          </div>
          <span className="text-[11px] font-semibold text-blue-400/90 bg-blue-950/50 border border-blue-800/40 px-2.5 py-1 rounded-full tracking-wide">
            {cert.year}
          </span>
        </div>

        {/* Titre du certificat */}
        <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug group-hover:text-blue-300 transition-colors">
          {cert.title}
        </h3>

        {/* Organisme émetteur */}
        <p className="text-xs sm:text-sm font-medium text-blue-400/90 mb-3">
          {cert.issuer}
        </p>

        {/* Identifiant de certification */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <CheckCircle2 size={13} className="text-blue-500 shrink-0" />
          <span>ID: {cert.credentialId}</span>
        </div>
      </div>

      {/* Action / Lien d'accès en bas */}
      <div className="pt-5 mt-4 border-t border-white/[0.04] flex items-center justify-between">
        <a
          href={cert.link}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-500 hover:text-blue-400 transition-all group-hover:translate-x-1"
        >
          <span>Voir le certificat</span>
          <ExternalLink size={14} />
        </a>

        <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
          {cert.badgeLabel}
        </span>
      </div>
    </motion.div>
  );
};

export default CertificateCard;