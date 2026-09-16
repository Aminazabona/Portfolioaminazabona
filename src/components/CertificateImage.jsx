import React, { useState } from 'react';
import { Award, BrainCircuit, GraduationCap, Eye } from 'lucide-react';

export const CertificateImage = ({ src, alt, certId, label, isProfilePhoto }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative w-full h-full group/img overflow-hidden">
      {!hasError ? (
        <>
          <img
            src={src}
            alt={alt}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          {/* Badge discret au survol pour indiquer que c'est cliquable */}
          <div className="absolute inset-0 bg-blue-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5 text-white text-xs font-semibold backdrop-blur-[2px]">
            <Eye size={16} className="text-blue-400" />
            <span>Agrandir</span>
          </div>
        </>
      ) : (
        /* Fallback stylisé avec indicateur d'emplacement */
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-950 p-4 text-center">
          <div className="w-11 h-11 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-2">
            {certId === 'certif-talent4startup' && <Award size={22} />}
            {certId === 'certif-ia-goinnovation' && <BrainCircuit size={22} />}
            {certId === 'certif-isig' && <GraduationCap size={22} />}
          </div>
          <p className="text-xs font-semibold text-slate-200">
            {label || alt}
          </p>
          <p className="text-[10px] text-blue-400/80 mt-0.5">
            {isProfilePhoto ? 'Ajoutez votre photo ici' : 'Photo du certificat'}
          </p>
        </div>
      )}
    </div>
  );
};

export default CertificateImage;