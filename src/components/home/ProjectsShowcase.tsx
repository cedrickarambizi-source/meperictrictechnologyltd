import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight, Check } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import landmarkProject from "@/assets/projects/landmark-project.png";
import omicaBuilding from "@/assets/projects/omica-building.png";
import kimironkoCommercial from "@/assets/projects/kimironko-commercial.png";
import wintanaApartment from "@/assets/projects/wintana-apartment.png";
import worldvisionHq from "@/assets/projects/worldvision-hq.png";
import kgpApartment from "@/assets/projects/kgp-apartment.png";

const projects = [
  {
    title: "LANDMARK PROJECT",
    image: landmarkProject,
    status: "Completed" as const,
    tags: ["Electrical", "Elevator", "Fire Safety", "+1"],
    services: [
      "Supply and installation of electrical activities",
      "Supply and installation of two elevators (lifts)",
      "Fire alarm system",
    ],
    moreCount: 5,
  },
  {
    title: "OMICA BUILDING",
    image: omicaBuilding,
    status: "Completed" as const,
    tags: ["Electrical", "Elevator", "Fire Safety"],
    services: [
      "Supply and installation of electrical activities",
      "Elevator (lift)",
      "Fire alarm system",
    ],
    moreCount: 5,
  },
  {
    title: "KIMIRONKO COMMERCIAL BUILDING",
    image: kimironkoCommercial,
    status: "Completed" as const,
    tags: ["Electrical", "Elevator", "Fire Safety"],
    services: [
      "Supply and installation of electrical activities",
      "Elevator (lift)",
      "Fire alarm system",
    ],
    moreCount: 5,
  },
  {
    title: "WINTANA APARTMENT",
    image: wintanaApartment,
    status: "Completed" as const,
    tags: ["Electrical", "Elevator"],
    services: [
      "Supply and installation of electrical activities",
      "Elevator (lift)",
    ],
    moreCount: 0,
  },
  {
    title: "WORLDVISION HQ RWANDA",
    image: worldvisionHq,
    status: "Completed" as const,
    tags: ["Elevator"],
    services: ["Elevator supply and installation"],
    moreCount: 0,
  },
  {
    title: "KGP APARTMENT",
    image: kgpApartment,
    status: "Ongoing" as const,
    tags: ["Electrical", "Elevator"],
    services: [
      "Supply and installation of electrical works",
      "Elevator systems (6 lifts)",
      "Generator installation",
    ],
    moreCount: 4,
  },
];

const ProjectsShowcase = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplayPlugin = Autoplay({
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [autoplayPlugin]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#12356e]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mep-orange/3 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 bg-mep-orange/15 border border-mep-orange/30 rounded-full px-5 py-2 mb-6">
            <span className="text-mep-orange font-semibold uppercase tracking-widest text-xs">
              What We Have Done
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
            Our Completed Projects
          </h2>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
            Explore our portfolio of successfully delivered MEP and engineering projects
            across Rwanda and East Africa.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Status badge */}
                      <div className="absolute top-3 right-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          project.status === "Ongoing"
                            ? "bg-mep-orange text-white"
                            : "bg-[#0D1B4B] text-white"
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      {/* Tags */}
                      <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="bg-white/90 backdrop-blur-sm text-foreground text-[10px] font-semibold px-2.5 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-bold text-foreground mb-3 text-sm leading-tight">
                        {project.title}
                      </h3>
                      <ul className="space-y-2 flex-1">
                        {project.services.map((service, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <Check className="h-3.5 w-3.5 text-mep-orange flex-shrink-0 mt-0.5" />
                            {service}
                          </li>
                        ))}
                      </ul>
                      {project.moreCount > 0 && (
                        <Link to="/projects" className="text-mep-orange font-semibold text-xs mt-3 hover:underline inline-block">
                          +{project.moreCount} more activities →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full shadow-lg transition-all border border-white/10"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full shadow-lg transition-all border border-white/10"
            aria-label="Next"
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
              className={`rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-mep-orange w-8 h-2.5"
                  : "bg-white/20 hover:bg-white/40 w-2.5 h-2.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/projects" className="inline-flex items-center gap-2 bg-mep-orange hover:bg-mep-orange-hover text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_hsl(24_100%_50%/0.3)] hover:shadow-[0_0_40px_hsl(24_100%_50%/0.5)] hover:gap-3">
            View All Projects <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
