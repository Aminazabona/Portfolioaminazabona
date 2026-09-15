import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandNodejs,
  TbInfinity,
} from "react-icons/tb";

import { SiFastapi } from "react-icons/si";

const TechLogo = ({ type }) => {
  const icons = {
    html: {
      Icon: TbBrandHtml5,
      color: "text-orange-500",
    },

    css: {
      Icon: TbBrandCss3,
      color: "text-blue-500",
    },

    js: {
      Icon: TbBrandJavascript,
      color: "text-yellow-400",
    },

    react: {
      Icon: TbBrandReact,
      color: "text-cyan-400",
    },

    next: {
      Icon: TbBrandNextjs,
      color: "text-white",
    },

    tailwind: {
      Icon: TbBrandTailwind,
      color: "text-cyan-400",
    },

    node: {
      Icon: TbBrandNodejs,
      color: "text-green-500",
    },

    fastapi: {
      Icon: SiFastapi,
      color: "text-teal-400",
    },

    devops: {
      Icon: TbInfinity,
      color: "text-violet-400",
    },
  };

  const item = icons[type];

  if (!item) return null;

  const { Icon, color } = item;

  return (
    <Icon
      className={`w-10 h-10 ${color} transition-transform duration-300 group-hover:scale-110`}
    />
  );
};

export default TechLogo;