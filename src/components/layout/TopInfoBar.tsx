import { Mail, Phone, MapPin, Instagram, Youtube } from "lucide-react";

const TopInfoBar = () => {
  return (
    <div className="bg-[#0A0A0F] w-full py-2.5 border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-white/50">
          <div className="flex items-center gap-5">
            <a
              href="mailto:meperictric40@gmail.com"
              className="flex items-center gap-2 hover:text-mep-orange transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">meperictric40@gmail.com</span>
            </a>
            <a
              href="tel:+250788645567"
              className="flex items-center gap-2 hover:text-mep-orange transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>+250 788 645 567</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://maps.app.goo.gl/UMiHCVPAyGDR3C9B6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-mep-orange transition-colors"
            >
              <MapPin className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Our Location</span>
            </a>
            <div className="hidden sm:flex items-center gap-3 ml-2 pl-4 border-l border-white/10">
              <a href="https://x.com/MEPerictrictech" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-mep-orange hover:scale-110 transition-all duration-300">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.instagram.com/meperictrictechnologyltd/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-mep-orange hover:scale-110 transition-all duration-300">
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a href="https://www.youtube.com/@MepErictric" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-mep-orange hover:scale-110 transition-all duration-300">
                <Youtube className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
