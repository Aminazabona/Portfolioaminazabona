import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { contactInfo } from '../data/contactInfo';

const ContactSuccess = ({ onReset }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-slate-900/40 rounded-2xl border border-blue-500/30">
      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
        <CheckCircle2 size={28} />
      </div>
      <h4 className="text-lg font-bold text-white mb-1">Message envoyé directement !</h4>
      <p className="text-xs sm:text-sm text-slate-400 mb-5 max-w-sm">
        Votre message a bien été transmis à Amina Zabona ({contactInfo.email}).
      </p>
      <button
        onClick={onReset}
        className="px-4 py-2 text-xs font-semibold text-blue-400 hover:text-white bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/60 rounded-xl transition-colors cursor-pointer"
      >
        Envoyer un autre message
      </button>
    </div>
  );
};

export default ContactSuccess;