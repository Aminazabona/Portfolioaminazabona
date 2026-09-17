import { useState } from "react";
import { ShoppingBag, LayoutDashboard, CloudSun } from "lucide-react";

const ProjectImage = ({ src, alt, projectId }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-950 p-4 text-center">
        <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-2">
          {projectId === "bunamar-shop" && <ShoppingBag size={22} />}
          {projectId === "spgcr" && <LayoutDashboard size={22} />}
          {projectId === "amina-weather" && <CloudSun size={22} />}
        </div>

        <p className="text-xs font-semibold text-slate-300">{alt}</p>
        <p className="text-[10px] text-slate-500 mt-0.5">
          Image indisponible
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setHasError(true)}
      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
    />
  );
};

export default ProjectImage;