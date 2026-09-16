import React, { useState } from 'react';
import { Send, AlertCircle } from 'lucide-react';
import { contactInfo } from '../data/contactInfo';
import ContactSuccess from './ContactSuccess';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ sending: false, submitted: false, error: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ sending: true, submitted: false, error: null });

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${contactInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          Nom: formData.name,
          Email: formData.email,
          Sujet: formData.subject,
          Message: formData.message,
          _subject: `Message Portfolio de ${formData.name} : ${formData.subject}`,
          _captcha: 'false',
        }),
      });

      if (res.ok) {
        setStatus({ sending: false, submitted: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Erreur');
      }
    } catch {
      setStatus({
        sending: false,
        submitted: false,
        error: "Échec de l'envoi direct. Vous pouvez m'écrire par email.",
      });
    }
  };

  if (status.submitted) {
    return <ContactSuccess onReset={() => setStatus({ sending: false, submitted: false, error: null })} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status.error && (
        <div className="p-3 rounded-xl bg-red-950/50 border border-red-800/50 text-red-300 text-xs flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <AlertCircle size={16} className="shrink-0 text-red-400" />
            <span>{status.error}</span>
          </div>
          <a
            href={`mailto:${contactInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`}
            className="underline font-semibold hover:text-white"
          >
            Ouvrir email
          </a>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">Votre nom</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Ex: Christian K."
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">Votre adresse email</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="nom@exemple.com"
            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1.5">Sujet</label>
        <input
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          placeholder="Ex: Proposition de projet / Recrutement"
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 mb-1.5">Votre message</label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Parlez-moi de votre projet ou de vos besoins..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/70 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status.sending}
        className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
      >
        <span>{status.sending ? 'Envoi en cours...' : 'Envoyer le message'}</span>
        <Send size={15} />
      </button>
    </form>
  );
};

export default ContactForm;