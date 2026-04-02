import { useState, useEffect } from "react";
import { FileText, Calculator } from "lucide-react";
import { Link } from "react-router-dom";
import yyussaCityCenter from "@/assets/projects/yyussa-city-center.png";
import kgpApartment from "@/assets/projects/kgp-apartment.png";
import omicaBuilding from "@/assets/projects/omica-building.png";
import laCroixDuSud from "@/assets/projects/la-croix-du-sud.png";
import kafamHouse from "@/assets/projects/kafam-house.png";
import villaHouse from "@/assets/projects/villa-house.png";

const slides = [
  {
    image: yyussaCityCenter,
    alt: "YYUSSA City Center",
    project: "YYUSSA CITY CENTER",
    location: "Kigali",
    year: "2025",
  },
  {
    image: kgpApartment,
    alt: "KGP Apartment",
    project: "KGP APARTMENT",
    location: "Kigali",
    year: "2024",
  },
  {
    image: omicaBuilding,
    alt: "Omica Apartment",
    project: "OMICA APARTMENT",
    location: "Kigali",
    year: "2023–2024",
  },
  {
    image: laCroixDuSud,
    alt: "La Croix du Sud",
    project: "PROJECT LA CROIX DU SUD",
    location: "Kigali",
    year: "2022–2023",
  },
  {
    image: villaHouse,
    alt: "Kwa Nyirinkwaya",
    project: "KWA NYIRINKWAYA",
    location: "Kigali",
    year: "2023",
  },
  {
    image: kafamHouse,
    alt: "Kafam House",
    project: "KAFAM HOUSE",
    location: "Nyarutarama, Kigali",
    year: "2018–2022",
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
    <section className="relative h-[100vh] min-h-[600px] max-h-[1100px] overflow-hidden">
      {/* Slides with smooth fade + zoom parallax */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            loading={index === 0 ? "eager" : "lazy"}
            decoding={index === 0 ? "sync" : "async"}
            className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
              index === currentSlide ? "scale-110" : "scale-100"
            }`}
          />
          {/* Dark blue gradient overlay 45% */}
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(216,72%,17%,0.55)] via-[hsl(216,62%,27%,0.4)] to-[hsl(216,62%,27%,0.25)]" />
        </div>
      ))}

      {/* Static Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl space-y-8">
            {/* Authority badge */}
            <div className="flex items-center gap-3 animate-fade-in">
              <span className="w-12 h-0.5 bg-mep-orange"></span>
              <span className="text-mep-orange font-semibold uppercase tracking-widest text-sm">
                Trusted Engineering Partner Since 2016
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight animate-slide-up">
              Powering Rwanda & East Africa with Excellence in MEP Solutions
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed animate-slide-up">
              Delivering world-class Mechanical, Electrical & Plumbing systems since 2016.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up">
              <Link
                to="/contact"
                className="bg-mep-orange hover:bg-mep-orange-hover text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
              >
                Request a Quote
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white/80 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center"
              >
                View Projects
              </Link>
              <Link
                to="/services"
                className="text-white/80 hover:text-white font-semibold px-6 py-4 rounded-lg transition-all duration-300 inline-flex items-center gap-2 hover:bg-white/5"
              >
                <Calculator className="h-5 w-5" />
                MEP Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Project Info Tag (bottom-left) */}
      <div className="absolute bottom-8 left-0 z-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-6 py-3 transition-all duration-700">
            <div className="w-1 h-10 bg-mep-orange rounded-full" />
            <div>
              <p className="text-white font-semibold text-sm md:text-base">
                {slides[currentSlide].project}
              </p>
              <p className="text-white/70 text-xs md:text-sm">
                {slides[currentSlide].location} · {slides[currentSlide].year}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Profile Button (bottom-right) */}
      <div className="absolute bottom-8 right-0 z-20 hidden md:block">
        <div className="container mx-auto px-4 lg:px-8 flex justify-end">
          <a
            href="https://drive.google.com/file/d/1rSXmarbXMECfryBugomxR1DQU3jkHUec/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium px-5 py-3 rounded-xl hover:bg-white/20 transition-all duration-300"
          >
            <FileText className="h-4 w-4" />
            Company Profile
          </a>
        </div>
      </div>

      {/* Mobile sticky quote button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-3 bg-white/95 backdrop-blur-sm border-t shadow-lg">
        <Link
          to="/contact"
          className="block w-full bg-mep-orange hover:bg-mep-orange-hover text-white font-semibold py-3.5 rounded-lg text-center transition-all"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
};

export default HeroSlider;
