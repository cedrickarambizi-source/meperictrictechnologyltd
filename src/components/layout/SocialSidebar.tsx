import { Instagram, Youtube, Facebook, Linkedin } from "lucide-react";

const SocialSidebar = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1">
      <a
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-all duration-300 rounded-l-lg bg-destructive"
      >
        <Facebook className="h-4 w-4" />
      </a>
      <a
        href="https://x.com/MEPerictrictech"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X"
        className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-all duration-300 rounded-l-lg bg-destructive"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-all duration-300 rounded-l-lg bg-destructive"
      >
        <Linkedin className="h-4 w-4" />
      </a>
      <a
        href="https://www.instagram.com/meperictrictechnologyltd/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-all duration-300 rounded-l-lg bg-destructive"
      >
        <Instagram className="h-4 w-4" />
      </a>
      <a
        href="https://www.youtube.com/@MepErictric"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
        className="flex items-center justify-center w-10 h-10 text-white/70 hover:text-white transition-all duration-300 rounded-l-lg bg-destructive"
      >
        <Youtube className="h-4 w-4" />
      </a>
    </div>
  );
};

export default SocialSidebar;
