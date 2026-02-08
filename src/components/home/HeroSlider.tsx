import { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import heroElectrical from "@/assets/hero-electrical.jpg";
import heroElevator from "@/assets/hero-elevator.jpg";
import heroMechanical from "@/assets/hero-mechanical.jpg";
import heroHospital from "@/assets/hero-hospital.jpg";

const slides = [
  { image: heroElectrical, alt: "Electrical Infrastructure" },
  { image: heroElevator, alt: "Modern Elevator Systems" },
  { image: heroMechanical, alt: "Mechanical Engineering" },
  { image: heroHospital, alt: "Commercial Buildings" },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[650px] md:h-[750px] lg:h-[85vh] min-h-[700px] max-h-[900px] overflow-hidden">
      {/* Slides with smooth fade transition */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            loading={index === 0 ? "eager" : "lazy"}
            decoding={index === 0 ? "sync" : "async"}
            className="w-full h-full object-cover brightness-110 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-transparent" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl animate-slide-up space-y-8">
            {/* Authority badge */}
            <div className="flex items-center gap-3">
              <span className="w-12 h-0.5 bg-mep-orange"></span>
              <span className="text-mep-orange font-semibold uppercase tracking-widest text-sm">
                Trusted Engineering Partner Since 2016
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight">
              Powering Rwanda and East Africa with Excellence in Mechanical, 
              Electrical & Plumbing Solutions
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed">
              Since 2016, MEP Erictric Technology Ltd has delivered world-class MEP 
              and elevator solutions for residential, commercial, and industrial projects.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Request a Quote
              </Link>
              <Link to="/projects" className="btn-secondary inline-flex items-center">
                View Our Projects
              </Link>
              <a
                href="https://drive.google.com/file/d/1rSXmarbXMECfryBugomxR1DQU3jkHUec/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-800 hover:bg-amber-900 text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 inline-flex items-center gap-2 shadow-lg"
              >
                <FileText className="h-5 w-5" />
                View Our Company Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
