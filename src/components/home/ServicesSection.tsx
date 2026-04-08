import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

import elevatorTechnician from "@/assets/services/elevator-technician.jpg";
import transmissionLine from "@/assets/services/transmission-line.jpg";
import internetConnection from "@/assets/services/internet-connection.jpg";
import wastewaterTreatment from "@/assets/services/wastewater-treatment.jpg";
import accessPoint from "@/assets/services/access-point.jpg";
import cctvInstallation from "@/assets/services/cctv-installation.jpg";

const services = [
  {
    image: elevatorTechnician,
    title: "Smart Elevator Installation & Repair",
    description: "State-of-the-art elevator systems for residential, commercial, and industrial buildings.",
    checklist: ["Passenger Lift Installation", "Escalator Installation", "Lift Modernization", "Preventive Maintenance"],
  },
  {
    image: transmissionLine,
    title: "Electrical Systems",
    description: "High voltage power transmission and distribution infrastructure for reliable electricity.",
    checklist: ["Lighting Networks", "Security Systems", "CCTV Installation", "Lightning Protection"],
  },
  {
    image: internetConnection,
    title: "Internet & Network Solutions",
    description: "Enterprise-grade connectivity and smart building integration solutions.",
    checklist: ["Fiber Optic Networks", "Enterprise Connectivity", "Network Infrastructure", "Smart Building Integration"],
  },
  {
    image: wastewaterTreatment,
    title: "Mechanical Systems",
    description: "Complete mechanical engineering solutions for modern buildings and facilities.",
    checklist: ["HVAC Systems", "Fire Fighting", "Pumping Solutions", "Fire Suppression"],
  },
  {
    image: accessPoint,
    title: "Pipeline & Plumbing Systems",
    description: "Professional plumbing and pipeline solutions for all building types.",
    checklist: ["Water Supply", "Sewage Treatment", "Rainwater Harvesting", "Hot Water Systems"],
  },
  {
    image: cctvInstallation,
    title: "Solar & Power Backup",
    description: "Sustainable energy solutions and reliable power backup systems.",
    checklist: ["Solar Panel Installation", "Generator Systems", "UPS Solutions", "Power Monitoring"],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-mep-orange/10 border border-mep-orange/20 rounded-full px-5 py-2 mb-6">
            <span className="text-mep-orange font-semibold uppercase tracking-widest text-xs">
              Our Services
            </span>
          </span>
          <h2 className="section-heading text-foreground mb-4">
            Comprehensive MEP & Technology Solutions
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From power infrastructure to smart building technology —
            we deliver excellence and innovation at every level.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1 border border-transparent hover:border-mep-orange/20"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-5">
                  {service.checklist.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-mep-orange flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-mep-orange font-semibold text-sm hover:gap-3 transition-all group/link"
                >
                  Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

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
