import { useState } from "react";
import profil from "../assets/images/profil.jpg";

const HeroVisual = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative flex items-center justify-center w-full max-w-[500px] sm:max-w-[600px] aspect-square mx-auto">
      <div className="absolute inset-0 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative w-[94%] h-[94%] rounded-full overflow-hidden bg-slate-900 shadow-[0_0_70px_rgba(37,99,235,0.45)]">
        {!imgError ? (
          <img
            src={profil}
            alt="Amina Zabona"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-900">
            <span className="text-5xl font-bold text-blue-400">AZ</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroVisual;