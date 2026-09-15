import { motion } from "motion/react";
import TechLogo from "./TechLogo";

const SkillCard = ({ skill, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      className={`
        group relative
        flex flex-col items-center justify-center
        p-5
        rounded-2xl
        bg-slate-900/60
        border border-slate-800/80
        backdrop-blur-sm
        transition-all duration-300
        hover:-translate-y-1.5
        hover:bg-slate-800/80
        hover:border-blue-500/40
        hover:shadow-[0_0_25px_rgba(37,99,235,0.15)]
        ${skill.bgGlow}
      `}
    >
      {/* Halo subtil */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

      {/* Logo */}
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-3">
        <TechLogo type={skill.iconType} />
      </div>

      {/* Nom */}
      <span className="text-sm font-semibold text-slate-200 tracking-wide transition-colors duration-300 group-hover:text-white">
        {skill.name}
      </span>
    </motion.div>
  );
};

export default SkillCard;