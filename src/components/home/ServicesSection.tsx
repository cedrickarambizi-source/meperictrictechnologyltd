import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Service images
import transmissionLine from "@/assets/services/transmission-line.jpg";
import internetConnection from "@/assets/services/internet-connection.jpg";
import wastewaterTreatment from "@/assets/services/wastewater-treatment.jpg";
import accessPoint from "@/assets/services/access-point.jpg";
import cctvInstallation from "@/assets/services/cctv-installation.jpg";
import elevatorTechnician from "@/assets/services/elevator-technician.jpg";

const services = [
  {
    image: transmissionLine,
    title: "Transmission Line",
    description: "High voltage power transmission infrastructure for reliable electricity distribution across regions.",
  },
  {
    image: internetConnection,
    title: "Internet Connection",
    description: "High-speed fiber optic and enterprise network solutions for seamless connectivity.",
  },
  {
    image: wastewaterTreatment,
    title: "Waste Water Treatment Plant",
    description: "Modern water treatment facilities ensuring clean water and environmental compliance.",
  },
  {
    image: accessPoint,
    title: "Access Point",
    description: "Enterprise-grade wireless network access points for comprehensive coverage.",
  },
  {
    image: cctvInstallation,
    title: "CCTV Installation",
    description: "Professional security surveillance systems for comprehensive property protection.",
  },
  {
    image: elevatorTechnician,
    title: "Smart Elevator Installation & Repair Solutions",
    description: "State-of-the-art elevator systems for residential, commercial, and industrial buildings.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="section-divider"></span>
          </div>
          <span className="text-mep-orange font-semibold uppercase tracking-widest text-sm">
            Our Services
          </span>
          <h2 className="section-heading mt-2 mb-4">
            Comprehensive MEP & Technology Solutions
          </h2>
          <p className="section-subheading text-lg">
            From power infrastructure to smart building technology – 
            we deliver excellence and innovation at every level.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="px-4 lg:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden border border-border/30 h-full hover:-translate-y-1">
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-6 lg:p-7">
                      <h3 className="font-heading font-bold text-lg lg:text-xl mb-3 text-foreground">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-5 leading-relaxed text-sm">
                        {service.description}
                      </p>
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all group/link"
                      >
                        Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-6 h-12 w-12 bg-primary text-primary-foreground hover:bg-primary/90 border-none shadow-lg" />
            <CarouselNext className="hidden md:flex -right-6 h-12 w-12 bg-primary text-primary-foreground hover:bg-primary/90 border-none shadow-lg" />
          </Carousel>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-6 md:hidden">
          ← Swipe to explore more services →
        </p>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
            View All Services <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
