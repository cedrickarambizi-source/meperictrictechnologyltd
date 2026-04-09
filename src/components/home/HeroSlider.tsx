import { useState, useEffect } from "react";
import { FileText, Calculator, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

import landmarkProject from "@/assets/projects/landmark-project.png";
import omicaBuilding from "@/assets/projects/omica-building.png";
import kimironkoCommercial from "@/assets/projects/kimironko-commercial.png";
import kafamHouse from "@/assets/projects/kafam-house.png";
import kgpApartment from "@/assets/projects/kgp-apartment.png";
import bahoHospital from "@/assets/projects/baho-hospital.png";

const slides = [
  {
    image: landmarkProject,
    project: "LANDMARK PROJECT",
    location: "Kigali – Nyarugenge",
    year: "2023–2024",
    tags: ["Electrical", "Elevator", "Fire Safety", "+1"],
    services: [
      "Supply and installation of electrical activities",
      "Supply and installation of two elevators (lifts)",
      "Fire alarm system",
    ],
    moreCount: 5,
  },
  {
    image: omicaBuilding,
    project: "OMICA BUILDING",
    location: "Kigali",
    year: "2023–2024",
    tags: ["Electrical", "Elevator", "Fire Safety"],
    services: [
      "Supply and installation of electrical activities",
      "Elevator (lift)",
      "Fire alarm system",
    ],
    moreCount: 5,
  },
  {
    image: kimironkoCommercial,
    project: "KIMIRONKO COMMERCIAL BUILDING",
    location: "Kigali",
    year: "2022–2023",
    tags: ["Electrical", "Elevator", "Fire Safety"],
    services: [
      "Supply and installation of electrical activities",
      "Elevator (lift)",
      "Fire alarm system",
    ],
    moreCount: 5,
  },
  {
    image: kafamHouse,
    project: "KAFAM HOUSE",
    location: "Nyarutarama, Kigali",
    year: "2018–2022",
    tags: ["Electrical", "Elevator", "CCTV", "Fire Safety"],
    services: [
      "Electrical works & fire alarm system",
      "Elevator (lift) supply and installation",
      "CCTV cameras & IP telephone",
    ],
    moreCount: 5,
  },
  {
    image: kgpApartment,
    project: "KGP APARTMENT",
    location: "Kigali",
    year: "2023–Ongoing",
    tags: ["Electrical", "Elevator"],
    services: [
      "Supply and installation of electrical works",
      "Elevator systems (6 lifts)",
      "Generator installation",
    ],
    moreCount: 4,
  },
  {
    image: bahoHospital,
    project: "BAHO INTERNATIONAL HOSPITAL",
    location: "Nyarutarama, Kigali",
    year: "2016–2021",
    tags: ["Electrical", "Elevator", "Plumbing", "Fire Safety"],
    services: [
      "Electrical works & fire alarm system",
      "Elevator (lift) access door control",
      "Plumbing works & nursing systems",
    ],
    moreCount: 6,
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
              index === currentSlide ? "scale-110" : "scale-100"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.project}
              loading={index === 0 ? "eager" : "lazy"}
              decoding={index === 0 ? "sync" : "async"}
              fetchPriority={index === 0 ? "high" : "auto"}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Deep cinematic gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F] via-[#0A0A0F]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-[#0A0A0F]/30" />
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
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#12356e]">
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
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight animate-slide-up xl:text-lg"
            >
              Powering Rwanda &{" "}
              <br className="hidden md:block" />
              East Africa With{" "}
              <br className="hidden md:block" />
              <span className="text-gradient-orange">Excellence</span> in MEP
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed animate-slide-up">
              World-class Mechanical, Electrical & Plumbing solutions
              engineered for modern structures across East Africa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2 animate-slide-up">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-mep-orange hover:bg-mep-orange-hover text-white font-bold px-7 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_hsl(24_100%_50%/0.3)] hover:shadow-[0_0_40px_hsl(24_100%_50%/0.5)] text-sm"
              >
                <ArrowRight className="h-4 w-4" /> Request a Quote
              </Link>
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
                className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold px-5 py-4 rounded-xl hover:bg-white/5 transition-all duration-300 text-sm"
              >
                <Calculator className="h-4 w-4" /> MEP Calculator
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info Card (bottom-left) */}
      <div className="absolute bottom-24 md:bottom-12 left-0 z-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="glass-card inline-flex items-center gap-4 px-6 py-4 transition-all duration-700">
            <div className="w-1 h-12 bg-mep-orange rounded-full" />
            <div>
              <div className="flex gap-2 mb-1">
                {slides[currentSlide].tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="text-[10px] text-mep-orange bg-mep-orange/10 px-2 py-0.5 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-white font-bold text-sm">
                {slides[currentSlide].project}
              </p>
              <p className="text-white/50 text-xs">
                {slides[currentSlide].location} · {slides[currentSlide].year}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Profile (bottom-right) */}
      <div className="absolute bottom-24 md:bottom-12 right-0 z-20 hidden md:block">
        <div className="container mx-auto px-6 lg:px-12 flex justify-end">
          <a
            href="https://drive.google.com/file/d/1rSXmarbXMECfryBugomxR1DQU3jkHUec/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card inline-flex items-center gap-2 text-white/80 hover:text-white font-medium px-5 py-3 transition-all duration-300 hover:bg-white/10 text-sm"
          >
            <FileText className="h-4 w-4" />
            Download Company Profile
          </a>
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

      {/* Mobile sticky quote button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-[#0A0A0F]/95 backdrop-blur-xl border-t border-white/10">
        <Link
          to="/contact"
          className="block w-full bg-mep-orange hover:bg-mep-orange-hover text-white font-bold py-3.5 rounded-xl text-center transition-all shadow-[0_0_20px_hsl(24_100%_50%/0.3)]"
        >
          Request a Quote →
        </Link>
      </div>
    </section>
  );
};

export default HeroSlider;
