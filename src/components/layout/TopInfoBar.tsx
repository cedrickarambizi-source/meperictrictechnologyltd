import { Mail, Phone, MapPin } from "lucide-react";

const TopInfoBar = () => {
  return (
    <div className="bg-[#0A0A0F] w-full py-2.5 border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-3 text-xs font-medium text-white/50">
          <a
            href="https://maps.app.goo.gl/UMiHCVPAyGDR3C9B6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <MapPin className="h-3.5 w-3.5" />
            <span>KG 684 St, Kigali, Kacyiru</span>
          </a>
          <a
            href="tel:+250782750432"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone className="h-3.5 w-3.5" />
            <span>+250 782 750 432 / +250 788 307 952</span>
          </a>
          <a
            href="mailto:info@we-mep.rw"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>info@we-mep.rw</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopInfoBar;
