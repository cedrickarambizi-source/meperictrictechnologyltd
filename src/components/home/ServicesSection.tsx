import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Service images
import transmissionLine from "@/assets/services/transmission-line.jpg";
import internetConnection from "@/assets/services/internet-connection.jpg";
import wastewaterTreatment from "@/assets/services/wastewater-treatment.jpg";
import accessPoint from "@/assets/services/access-point.jpg";
import cctvInstallation from "@/assets/services/cctv-installation.jpg";
import elevatorInstallation from "@/assets/services/elevator-installation.jpg";

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
    image: elevatorInstallation,
    title: "Elevator Supply & Installation",
    description: "State-of-the-art elevator systems for residential, commercial, and industrial buildings.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-mep-orange font-semibold uppercase tracking-wider text-sm">
            Our Services
          </span>
          <h2 className="section-heading mt-2 mb-4">
            Comprehensive MEP & Technology Solutions
          </h2>
          <p className="section-subheading">
            From power infrastructure to smart building technology – 
            we deliver excellence and innovation at every level.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden border border-border/50"
            >
              {/* Service Image - No grayscale, original colors */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Service Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
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
