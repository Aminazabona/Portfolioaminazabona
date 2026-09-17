import { useState } from "react";
import {
  ShoppingBag,
  LayoutDashboard,
  CloudSun,
} from "lucide-react";

const ProjectImage = ({ src, alt, projectId }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-950 text-center">
        {projectId === "bunamar-shop" && <ShoppingBag size={32} />}
        {projectId === "spgcr" && <LayoutDashboard size={32} />}
        {projectId === "amina-weather" && <CloudSun size={32} />}

        <p className="text-xs text-slate-400 mt-2">
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