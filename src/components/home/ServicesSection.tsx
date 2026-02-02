import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Service images
import elevatorInstallation from "@/assets/services/elevator-installation.jpg";
import elevatorMaintenance from "@/assets/services/elevator-maintenance.jpg";
import electricalSystems from "@/assets/services/electrical-systems.jpg";
import mechanicalSystems from "@/assets/services/mechanical-systems.jpg";
import plumbingSystems from "@/assets/services/plumbing-systems.jpg";
import preventiveMaintenance from "@/assets/services/preventive-maintenance.jpg";

const services = [
  {
    image: elevatorInstallation,
    title: "Elevator Supply & Installation",
    description: "State-of-the-art elevator systems for residential, commercial, and industrial buildings.",
  },
  {
    image: elevatorMaintenance,
    title: "Elevator Maintenance & Modernization",
    description: "Comprehensive maintenance programs and modernization solutions for existing elevator systems.",
  },
  {
    image: electricalSystems,
    title: "Electrical Engineering Systems",
    description: "Complete electrical infrastructure design, installation, and power distribution systems.",
  },
  {
    image: mechanicalSystems,
    title: "Mechanical Engineering Systems",
    description: "HVAC systems, ventilation, and mechanical infrastructure for optimal building performance.",
  },
  {
    image: plumbingSystems,
    title: "Plumbing & Water Systems",
    description: "Advanced plumbing solutions including water supply, drainage, and fire protection systems.",
  },
  {
    image: preventiveMaintenance,
    title: "Preventive Maintenance Contracts",
    description: "Tailored maintenance contracts ensuring system reliability and longevity.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-mep-orange font-semibold uppercase tracking-wider text-sm">
            Our Services
          </span>
          <h2 className="section-heading mt-2 mb-4">
            Comprehensive MEP & Elevator Solutions
          </h2>
          <p className="section-subheading">
            From vertical transportation systems to complete mechanical, electrical, 
            and plumbing infrastructure – we deliver excellence at every level.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-lg shadow-sm card-hover group overflow-hidden"
            >
              {/* Service Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Service Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary inline-flex items-center gap-2">
            View All Services <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
