import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, FileText } from "lucide-react";
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
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
              Powering Rwanda and East Africa with Excellence in Mechanical, 
              Electrical & Plumbing Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
              Since 2016, MEP Erictric Technology Ltd has delivered world-class MEP 
              and elevator solutions for residential, commercial, and industrial projects.
            </p>
            <div className="flex flex-wrap gap-4">
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

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
