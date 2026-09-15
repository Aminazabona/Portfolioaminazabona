import React from 'react';
import { motion } from 'motion/react';
import ExperienceIcon from './ExperienceIcon';

const ExperienceCard = ({ exp, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(37,99,235,0.12)]"
    >
      <div>
        {/* En-tête : pastille de timeline et année */}
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          <span className="text-sm font-semibold text-blue-400 tracking-wider">
            {exp.year}
          </span>
        </div>

        {/* Titre du poste / diplôme */}
        <h3 className="text-lg font-bold text-white mb-1.5 leading-snug group-hover:text-blue-200 transition-colors">
          {exp.title}
        </h3>

        {/* Organisation */}
        <p className="text-sm font-medium text-blue-400/90 mb-4">
          {exp.organization}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed">
          {exp.description}
        </p>
      </div>

      {/* Badge icône en bas à gauche fidèle à la capture */}
      <div className="pt-6 flex items-center justify-start">
        <div className="w-9 h-9 rounded-lg bg-blue-950/70 border border-blue-600/30 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
          <ExperienceIcon type={exp.iconType} />
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;