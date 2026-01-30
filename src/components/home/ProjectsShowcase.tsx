import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import landmarkProject from "@/assets/projects/landmark-project.png";
import omicaBuilding from "@/assets/projects/omica-building.png";
import oassParkApartment from "@/assets/projects/oass-park-apartment.png";
import kimironkoCommercial from "@/assets/projects/kimironko-commercial.png";
import wintanaApartment from "@/assets/projects/wintana-apartment.png";
import worldvisionHq from "@/assets/projects/worldvision-hq.png";

const projects = [
  {
    title: "Landmark Project",
    image: landmarkProject,
    activities: "Electrical, Elevators, Fire Alarm, CCTV, IP Phone, Generator, Firefighting",
  },
  {
    title: "Omica Building",
    image: omicaBuilding,
    activities: "Electrical, Elevator, Fire Alarm, Generator, Firefighting, Switchgear, Transformer",
  },
  {
    title: "OASS Park Apartment",
    image: oassParkApartment,
    activities: "Structural Works, Walling, Plastering",
  },
  {
    title: "Kimironko Commercial Building",
    image: kimironkoCommercial,
    activities: "Electrical, Elevator, Fire Alarm, Generator, Firefighting, Switchgear, MV Line",
  },
  {
    title: "Wintana Apartment",
    image: wintanaApartment,
    activities: "Electrical, Elevator Installation",
  },
  {
    title: "WorldVision Headquarters Rwanda",
    image: worldvisionHq,
    activities: "Elevator Supply and Installation",
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
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-mep-orange font-semibold uppercase tracking-wider text-sm">
            Projects Showcase
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
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_70%] px-4"
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="inline-block px-3 py-1 bg-mep-orange text-white text-xs font-semibold rounded-full">
                            What We Have Done
                          </span>
                        </div>
                        <p className="text-white/90 text-sm mt-2 line-clamp-2">
                          {project.activities}
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
          <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
            View All Projects <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
