import { Mail, Phone, MapPin } from "lucide-react";

const TopInfoBar = () => {
  return (
    <div className="info-bar w-full py-2.5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm font-medium text-white">
          <div className="flex items-center gap-6">
            <a 
              href="mailto:meperictric40@gmail.com" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">meperictric40@gmail.com</span>
            </a>
            <a 
              href="tel:+250788645567" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              <span>+250 788 645 567</span>
            </a>
          </div>
          <a 
            href="https://maps.app.goo.gl/UMiHCVPAyGDR3C9B6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <MapPin className="h-4 w-4" />
            <span className="hidden md:inline">Our Location</span>
            <span className="md:hidden">Location</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
