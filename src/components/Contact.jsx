import React from 'react';
import { motion } from 'motion/react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="relative py-12 sm:py-16 overflow-hidden">
      {/* Halo lumineux d'ambiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Conteneur principal (max-w-7xl mx-auto px-6) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative border border-blue-900/40 rounded-3xl p-6 sm:p-10 pt-10 sm:pt-14 bg-slate-950/30 backdrop-blur-sm shadow-[0_0_50px_rgba(30,58,138,0.1)]"
        >
          {/* Titre centré qui coupe la bordure supérieure */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 bg-slate-950 flex items-center justify-center">
            <h2 className="text-sm sm:text-base font-bold uppercase tracking-widest text-blue-500 whitespace-nowrap">
              Contact
            </h2>
          </div>

          {/* Disposition en deux colonnes : Infos & Formulaire */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
            <div className="lg:col-span-7 bg-slate-900/30 border border-slate-800/60 rounded-2xl p-5 sm:p-7">
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;