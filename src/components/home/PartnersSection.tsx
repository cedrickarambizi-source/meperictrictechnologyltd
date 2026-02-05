import { useState } from "react";

// Import partner logos
import eaglePartner from "@/assets/partners/eagle-partner.png";
import fujihd from "@/assets/partners/fujihd-logo.png";
import tsty from "@/assets/partners/tsty-logo.png";
import equity from "@/assets/partners/equity-logo.png";
import ncba from "@/assets/partners/ncba-logo.png";
import partner6 from "@/assets/partners/partner-6.jpg";

const partners = [
  { name: "Eagle Partner", logo: eaglePartner },
  { name: "FUJIHD - Hengfu Group", logo: fujihd },
  { name: "TSTY", logo: tsty },
  { name: "Equity", logo: equity },
  { name: "NCBA", logo: ncba },
  { name: "Partner", logo: partner6 },
];

const PartnersSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-16 lg:py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="section-divider"></span>
          </div>
          <span className="text-mep-orange font-semibold uppercase tracking-widest text-sm">
            Trusted By Industry Leaders
          </span>
          <h2 className="section-heading mt-2 mb-4">
            Partners & Clients
          </h2>
          <p className="section-subheading text-lg">
            We collaborate with leading organizations across various industries to deliver 
            exceptional engineering solutions.
          </p>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Marquee container */}
        <div className="flex overflow-hidden">
          <div
            className={`flex items-center animate-marquee ${isPaused ? "[animation-play-state:paused]" : "[animation-play-state:running]"}`}
          >
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 lg:mx-10 w-44 h-28 flex items-center justify-center bg-card rounded-xl border border-border/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-[150px] max-h-[90px] object-contain"
                />
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 lg:mx-10 w-44 h-28 flex items-center justify-center bg-card rounded-xl border border-border/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-[150px] max-h-[90px] object-contain"
                />
              </div>
            ))}
            {/* Third set for wider screens */}
            {partners.map((partner, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 mx-8 lg:mx-10 w-44 h-28 flex items-center justify-center bg-card rounded-xl border border-border/30 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-[150px] max-h-[90px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
