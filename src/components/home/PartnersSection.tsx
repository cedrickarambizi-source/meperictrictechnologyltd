import { useState } from "react";

import eaglePartner from "@/assets/partners/eagle-partner.png";
import fujihd from "@/assets/partners/fujihd-logo.png";
import tsty from "@/assets/partners/tsty-logo.png";
import equity from "@/assets/partners/equity-logo.png";
import ncba from "@/assets/partners/ncba-logo.png";
import partner6 from "@/assets/partners/partner-6.jpg";
import bahoHospital from "@/assets/partners/baho-hospital-logo.jpg";
import sofaluxKap from "@/assets/partners/sofalux-kap-logo.jpg";
import rwandaMfa from "@/assets/partners/rwanda-mfa-logo.jpg";
import rwandaCoat from "@/assets/partners/rwanda-coat-logo.png";

const partners = [
  { name: "Eagle Partner", logo: eaglePartner },
  { name: "FUJIHD - Hengfu Group", logo: fujihd },
  { name: "TSTY", logo: tsty },
  { name: "Equity", logo: equity },
  { name: "NCBA", logo: ncba },
  { name: "Partner", logo: partner6 },
  { name: "Baho International Hospital", logo: bahoHospital },
  { name: "Sofalux Ltd - KAP", logo: sofaluxKap },
  { name: "Ministry of Foreign Affairs", logo: rwandaMfa },
  { name: "Government of Rwanda", logo: rwandaCoat },
];

const PartnersSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-heading text-foreground mb-4 text-3xl">
            Our Valued Clients & Partners
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted by leading organizations across East Africa.
          </p>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div
            className={`flex items-center animate-marquee ${isPaused ? "[animation-play-state:paused]" : "[animation-play-state:running]"}`}
          >
            {[...Array(3)].map((_, setIndex) =>
              partners.map((partner, index) => (
                <div
                  key={`${setIndex}-${index}`}
                  className="flex-shrink-0 mx-8 lg:mx-10 w-44 h-28 flex items-center justify-center bg-[#F5F5F5] rounded-2xl border border-border/30 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    loading="lazy"
                    decoding="async"
                    className="max-w-[150px] max-h-[90px] object-contain"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
