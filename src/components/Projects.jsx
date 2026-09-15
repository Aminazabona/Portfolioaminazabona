import React from 'react';
import { motion } from 'motion/react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="relative py-12 sm:py-16 overflow-hidden">
      {/* Halo lumineux d'ambiance bleu nuit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Conteneur principal (max-w-7xl mx-auto px-6) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative border border-blue-900/40 rounded-3xl p-6 sm:p-8 pt-10 sm:pt-12 bg-slate-950/30 backdrop-blur-sm shadow-[0_0_50px_rgba(30,58,138,0.1)]"
        >
          {/* Titre centré qui coupe la bordure supérieure */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 bg-slate-950 flex items-center justify-center">
            <h2 className="text-sm sm:text-base font-bold uppercase tracking-widest text-blue-500 whitespace-nowrap">
              Mes Projets
            </h2>
          </div>

          {/* Grille responsive des projets (1 col mobile, 2 cols tablette, 3 cols desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;