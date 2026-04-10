import { Instagram, Youtube, Linkedin } from "lucide-react";

const SocialSidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1">
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-all duration-300 rounded-l-lg bg-primary"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <a
        href="https://www.instagram.com/meperictrictechnologyltd/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-all duration-300 rounded-l-lg bg-primary"
      >
        <Instagram className="h-4 w-4" />
      </a>
      <a
        href="https://www.youtube.com/@MepErictric"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-all duration-300 rounded-l-lg bg-primary"
      >
        <Youtube className="h-4 w-4" />
      </a>
    </div>
  );
};

export default SocialSidebar;
