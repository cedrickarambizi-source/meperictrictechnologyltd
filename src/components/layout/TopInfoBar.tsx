import { Mail, Phone, MapPin } from "lucide-react";

const TopInfoBar = () => {
  return (
    <div className="info-bar w-full py-2.5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-white">
          <div className="flex items-center gap-6">
            <a 
              href="mailto:info@mepelectric.rw" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@mepelectric.rw</span>
            </a>
            <a 
              href="tel:+250788123456" 
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              <span>+250 788 123 456</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="hidden md:inline">Remera – Gisimenti, Ikaze House F2-22, Kigali</span>
            <span className="md:hidden">Kigali, Rwanda</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
