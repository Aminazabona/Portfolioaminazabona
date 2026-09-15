import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ProjectImage from "./ProjectImage";

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    className="
      group flex flex-col justify-between aspect-square
      rounded-2xl bg-slate-900/50 border border-slate-800/80
      hover:border-blue-500/40 overflow-hidden transition-all
      duration-300 hover:-translate-y-1.5
      hover:shadow-[0_0_35px_rgba(37,99,235,0.15)]
    "
  >
    {/* Image */}
    <div className="relative w-full h-[45%] overflow-hidden border-b border-slate-800/60 bg-slate-950 shrink-0">
      <ProjectImage
        src={project.image}
        alt={project.title}
        projectId={project.id}
      />
    </div>

    {/* Contenu */}
    <div className="p-4 sm:p-5 flex-1 flex flex-col justify-center min-h-0 overflow-hidden">
      <h3 className="text-base sm:text-lg font-bold text-white mb-1 leading-snug group-hover:text-blue-300 transition-colors truncate">
        {project.title}
      </h3>

      <p className="text-[11px] sm:text-xs font-semibold text-blue-400 mb-1.5 tracking-wide truncate">
        {project.technologies}
      </p>

      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2">
        {project.description}
      </p>
    </div>

    {/* Actions */}
    <div className="px-4 sm:px-5 pb-4 pt-1 flex items-center justify-between border-t border-white/[0.04] shrink-0">
      <a
        href={project.demoUrl}
        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-500 hover:text-blue-400 transition-all group-hover:translate-x-1"
      >
        Voir le projet
        <ArrowRight size={15} />
      </a>

      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Code source de ${project.title}`}
          className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
        >
          <FaGithub size={17} />
        </a>
      )}
    </div>
  </motion.div>
);

export default ProjectCard;