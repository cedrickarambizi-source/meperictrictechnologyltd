import { useState } from "react";

// Partner/Client data with professional placeholders
const partners = [
  { name: "MTN Rwanda", category: "Telecommunications" },
  { name: "Equity Bank", category: "Financial Services" },
  { name: "Simba Supermarket", category: "Retail" },
  { name: "World Vision Rwanda", category: "International NGO" },
  { name: "MINAFFET", category: "Government" },
  { name: "Ikaze House", category: "Commercial Real Estate" },
  { name: "Baho International Hospital", category: "Healthcare" },
  { name: "Remera Hospital", category: "Healthcare" },
  { name: "OMICA Apartments", category: "Residential Development" },
  { name: "A&F Plaza", category: "Commercial Real Estate" },
  { name: "Twiga House", category: "Commercial Real Estate" },
  { name: "Victor Villa", category: "Residential Development" },
  { name: "Wild Urban Oasis Park", category: "Infrastructure" },
  { name: "Hospital Pédiatrique de Remera", category: "Healthcare" },
  { name: "Government Institutions", category: "Public Sector" },
  { name: "Commercial RE Developers", category: "Real Estate" },
  { name: "Residential Developers", category: "Real Estate" },
  { name: "Private Healthcare Groups", category: "Healthcare" },
  { name: "Power & Transmission", category: "Energy" },
  { name: "Infrastructure Partners", category: "Construction" },
];

// Professional logo placeholder component
const LogoPlaceholder = ({ name, category }: { name: string; category: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate initials from name
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map(word => word[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`
        flex-shrink-0 w-40 h-24 mx-6 flex flex-col items-center justify-center
        bg-white rounded-lg border border-border/50 shadow-sm
        transition-all duration-300 cursor-pointer
        ${isHovered ? 'shadow-md scale-105' : 'grayscale hover:grayscale-0'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        text-2xl font-heading font-bold tracking-tight
        transition-colors duration-300
        ${isHovered ? 'text-primary' : 'text-muted-foreground'}
      `}>
        {initials}
      </div>
      <div className={`
        text-[10px] font-medium uppercase tracking-wider mt-1
        transition-colors duration-300
        ${isHovered ? 'text-mep-orange' : 'text-muted-foreground/60'}
      `}>
        {category}
      </div>
    </div>
  );
};

const LogoMarquee = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        {/* Marquee container */}
        <div className="flex overflow-hidden">
          <div 
            className={`
              flex animate-marquee
              ${isPaused ? '[animation-play-state:paused]' : '[animation-play-state:running]'}
            `}
          >
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <LogoPlaceholder key={`first-${index}`} name={partner.name} category={partner.category} />
            ))}
            {/* Duplicate for seamless loop */}
            {partners.map((partner, index) => (
              <LogoPlaceholder key={`second-${index}`} name={partner.name} category={partner.category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
