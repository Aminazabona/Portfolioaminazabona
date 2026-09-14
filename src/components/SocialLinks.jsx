import { Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/aminazabona",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/amina-zabona",
    icon: FaLinkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/aminazabona",
    icon: FaTwitter,
  },
  {
    name: "Email",
    href: "mailto:aminazabona8@gmail.com",
    icon: Mail,
  },
];

const SocialLinks = () => {
  return (
    <div className="w-full sm:w-auto flex items-center gap-3">
      {socials.map((social) => {
        const Icon = social.icon;

        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="
              w-14 h-14
              sm:w-auto sm:h-auto
              sm:p-3
              flex items-center justify-center
              bg-slate-900/90
              border border-slate-800
              rounded-xl
              text-slate-300
              hover:text-blue-500
              hover:border-blue-500/50
              transition-all duration-200
            "
          >
            <Icon size={22} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;