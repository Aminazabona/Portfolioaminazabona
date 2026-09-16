import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { contactInfo } from '../data/contactInfo';

const ContactInfo = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(contactInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="flex flex-col justify-center h-full space-y-6">
      {/* Badge disponibilité */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold w-fit">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>{contactInfo.status}</span>
      </div>

      {/* Titre & Message */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Discutons de votre projet
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed max-w-md">
          Vous avez une idée d'application, un besoin en développement web ou une opportunité professionnelle ? N'hésitez pas à me contacter !
        </p>
      </div>

      {/* Coordonnées */}
      <div className="space-y-3 pt-1">
        {/* Email avec copie rapide */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-colors">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <Mail size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Email</p>
              <a href={`mailto:${contactInfo.email}`} className="text-xs sm:text-sm text-white font-medium hover:text-blue-400 transition-colors truncate block">
                {contactInfo.email}
              </a>
            </div>
          </div>
          <button
            onClick={handleCopyEmail}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0"
            title="Copier l'email"
            aria-label="Copier l'email"
          >
            {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
          </button>
        </div>

        {/* Téléphone avec appel et copie */}
        <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-colors">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <Phone size={18} />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Téléphone / WhatsApp</p>
              <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="text-xs sm:text-sm text-white font-medium hover:text-blue-400 transition-colors truncate block">
                {contactInfo.phone}
              </a>
            </div>
          </div>
          <button
            onClick={handleCopyPhone}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors shrink-0"
            title="Copier le numéro"
            aria-label="Copier le numéro"
          >
            {copiedPhone ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
          </button>
        </div>

        {/* Localisation */}
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
            <MapPin size={18} />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Localisation</p>
            <p className="text-xs sm:text-sm text-white font-medium">{contactInfo.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;