import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Award } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

// Import ALL project images
import landmarkProject from "@/assets/projects/landmark-project.png";
import omicaBuilding from "@/assets/projects/omica-building.png";
import kimironkoCommercial from "@/assets/projects/kimironko-commercial.png";
import wintanaApartment from "@/assets/projects/wintana-apartment.png";
import worldvisionHq from "@/assets/projects/worldvision-hq.png";
import ikazeHouse from "@/assets/projects/ikaze-house.png";
import afPlaza from "@/assets/projects/af-plaza.png";
import kafamHouse from "@/assets/projects/kafam-house.png";
import laCroixDuSud from "@/assets/projects/la-croix-du-sud.png";
import yyussaCityCenter from "@/assets/projects/yyussa-city-center.png";
import bahoHospital from "@/assets/projects/baho-hospital.png";
import twigaHouse from "@/assets/projects/twiga-house.png";
import hospitalPediatriqueRemera from "@/assets/projects/hospital-pediatrique-remera.png";
import mininter from "@/assets/projects/mininter.png";
import nisr from "@/assets/projects/nisr.png";
import rwaruteneTransmission from "@/assets/projects/rwarutene-transmission.png";
import gahangaStreetLight from "@/assets/projects/gahanga-street-light.png";

const projects = [
  {
    title: "LANDMARK PROJECT",
    image: landmarkProject,
    summary: "Electrical, Elevators, Fire Alarm, CCTV, IP Phone, Internet, Generator, Firefighting",
  },
  {
    title: "OMICA BUILDING",
    image: omicaBuilding,
    summary: "Electrical, Elevator, Fire Alarm, Generator, Firefighting, Switchgear, Transformer",
  },
  {
    title: "KIMIRONKO COMMERCIAL BUILDING",
    image: kimironkoCommercial,
    summary: "Electrical, Elevator, Fire Alarm, Generator, Firefighting, Switchgear, Transformer",
  },
  {
    title: "WINTANA APARTMENT",
    image: wintanaApartment,
    summary: "Electrical works, Elevator supply and installation",
  },
  {
    title: "WORLDVISION HQ RWANDA",
    image: worldvisionHq,
    summary: "Elevator supply and installation",
  },
  {
    title: "IKAZE HOUSE",
    image: ikazeHouse,
    summary: "Electrical, Fire Alarm, CCTV, IP Phone, Internet, Elevator, Firefighting, Plumbing",
  },
  {
    title: "A&F PLAZA",
    image: afPlaza,
    summary: "Supply and installation of 2 elevators (lifts)",
  },
  {
    title: "KAFAM HOUSE",
    image: kafamHouse,
    summary: "Electrical, Fire Alarm, CCTV, IP Phone, Internet, Elevator, Generator, Firefighting",
  },
  {
    title: "LA CROIX DU SUD – Kwa Nyirinkwaya",
    image: laCroixDuSud,
    summary: "Electrical, Elevator, Fire Alarm, Generator, Firefighting, Switchgear, Transformer, MV Line",
  },
  {
    title: "YYUSSA CITY CENTER",
    image: yyussaCityCenter,
    summary: "Maintenance and repair of 7 elevators and 2 escalators",
  },
  {
    title: "BAHO INTERNATIONAL HOSPITAL",
    image: bahoHospital,
    summary: "Electrical, Fire Alarm, CCTV, IP Phone, Elevator, Firefighting, Plumbing, Nursing Systems, AC",
  },
  {
    title: "TWIGA HOUSE ACCOMMODATION",
    image: twigaHouse,
    summary: "Elevator supply and installation",
  },
  {
    title: "HOSPITAL PÉDIATRIQUE DE REMERA",
    image: hospitalPediatriqueRemera,
    summary: "Electrical, Elevator, Scanner installation",
  },
  {
    title: "MININTER",
    image: mininter,
    summary: "Elevator supply and installation",
  },
  {
    title: "NATIONAL INSTITUTE OF STATISTICS (NISR)",
    image: nisr,
    summary: "Elevator supply and installation",
  },
  {
    title: "RWARUTENE 30KV TRANSMISSION LINE",
    image: rwaruteneTransmission,
    summary: "Electrical Transmission Line Construction (1.6 km)",
  },
  {
    title: "GAHANGA STREET LIGHT",
    image: gahangaStreetLight,
    summary: "Electrical Street Light Installation (2.8 km)",
  },
];

const ProjectsShowcase = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const autoplayPlugin = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [autoplayPlugin]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Credibility Statement */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <Award className="h-8 w-8 text-mep-orange" />
        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-primary text-center tracking-tight">
            10+ Years of Proven Experience in Engineering & Elevator Solutions
          </h3>
          <Award className="h-8 w-8 text-mep-orange" />
        </div>

        {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="section-divider"></span>
        </div>
        <span className="text-mep-orange font-semibold uppercase tracking-widest text-sm">
            What We Have Done
          </span>
          <h2 className="section-heading mt-2 mb-4">
            Our Completed Projects
          </h2>
          <p className="section-subheading">
            Explore our portfolio of successfully delivered MEP and engineering projects 
            across Rwanda and East Africa.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_85%] lg:flex-[0_0_75%] px-4"
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl group">
                    <div className="relative aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Project info overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 transform transition-transform duration-300">
                        <span className="inline-block px-3 py-1 bg-mep-orange text-white text-xs font-semibold rounded-full mb-3">
                          Completed Project
                        </span>
                        <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-white mb-2 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-white/90 text-sm lg:text-base mt-2 line-clamp-2 max-w-lg">
                          {project.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-primary/90 hover:bg-primary text-white rounded-full shadow-lg transition-all -translate-x-1/2 md:translate-x-0"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-primary/90 hover:bg-primary text-white rounded-full shadow-lg transition-all translate-x-1/2 md:translate-x-0"
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-primary w-8"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
        <Link to="/projects" className="btn-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
            View All Projects <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
