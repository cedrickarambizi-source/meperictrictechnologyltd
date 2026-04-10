import { useState, useEffect } from "react";
import { Calculator, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

import amahoroStadium from "@/assets/projects/amahoro-stadium.webp";
import pinnacleHotel from "@/assets/projects/pinnacle-hotel.jpg";
import kigaliConventionCentre from "@/assets/projects/kigali-convention-centre.jpg";

const slides = [
  {
    image: amahoroStadium,
    project: "AMAHORO NATIONAL STADIUM",
    location: "Kigali, Rwanda",
    year: "Landmark Project",
    tags: ["Electrical", "MEP Systems", "Fire Safety"],
  },
  {
    image: pinnacleHotel,
    project: "PINNACLE HOTEL",
    location: "Kigali, Rwanda",
    year: "Hospitality",
    tags: ["Electrical", "Plumbing", "HVAC"],
  },
  {
    image: kigaliConventionCentre,
    project: "KIGALI CONVENTION CENTRE",
    location: "Kigali, Rwanda",
    year: "Iconic Structure",
    tags: ["Electrical", "Elevator", "Fire Safety"],
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100vh] min-h-[700px] overflow-hidden bg-[#0A0A0F]">
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className={`w-full h-full transition-transform duration-[8000ms] ease-out ${
              index === currentSlide ? "scale-105" : "scale-100"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.project}
              loading={index === 0 ? "eager" : "lazy"}
              decoding={index === 0 ? "sync" : "async"}
              fetchPriority={index === 0 ? "high" : "auto"}
              className="w-full h-full object-cover"
              style={{ imageRendering: 'auto' }}
            />
          </div>
          {/* Subtle gradient for text readability only */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
        </div>
      ))}

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-mep-orange/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animation: `float ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            {/* Orange pill badge */}
            <div className="inline-flex items-center gap-2 bg-mep-orange/15 border border-mep-orange/30 rounded-full px-5 py-2 animate-fade-in">
              <span className="w-2 h-2 bg-mep-orange rounded-full animate-pulse" />
              <span className="text-mep-orange font-semibold uppercase tracking-widest text-xs">
                &nbsp;TRUSTED ENGINEERING PARTNER SINCE 2016
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl lg:text-7xl text-white leading-[0.95] tracking-tight animate-slide-up xl:text-xl font-extrabold text-center md:text-2xl"
            >
              Powering Rwanda &East Africa With
              <br className="hidden md:block" />
              Excellence in MEP
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed animate-slide-up mx-auto">
              World-class Mechanical, Electrical & Plumbing solutions
              engineered for modern structures across East Africa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2 animate-slide-up justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-semibold px-7 py-4 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-300 text-sm"
              >
                View Our Projects
              </Link>
              <a
                href="https://claude.ai/public/artifacts/16323224-122e-4455-9272-efa6e71df1fe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold px-5 py-4 rounded-xl transition-all duration-300 text-sm bg-[#ed6307]"
              >
                <Calculator className="h-4 w-4" /> MEP Calculator
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-5 w-5 text-white/30 animate-scroll-bounce" />
      </div>

      {/* Slide indicators */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-2 h-8 bg-mep-orange"
                : "w-2 h-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
