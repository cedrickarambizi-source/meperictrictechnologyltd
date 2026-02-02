import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  CheckCircle,
} from "lucide-react";

// Service images
import elevatorInstallation from "@/assets/services/elevator-installation.jpg";
import elevatorMaintenance from "@/assets/services/elevator-maintenance.jpg";
import escalators from "@/assets/services/escalators.jpg";
import platformLifts from "@/assets/services/platform-lifts.jpg";
import electricalSystems from "@/assets/services/electrical-systems.jpg";
import mechanicalSystems from "@/assets/services/mechanical-systems.jpg";
import plumbingSystems from "@/assets/services/plumbing-systems.jpg";
import preventiveMaintenance from "@/assets/services/preventive-maintenance.jpg";

const services = [
  {
    image: elevatorInstallation,
    title: "Elevator Supply & Installation",
    description: "State-of-the-art elevator systems for residential, commercial, and industrial buildings. We partner with internationally recognized manufacturers to deliver reliable, safe, and efficient vertical transportation solutions.",
    benefits: ["Premium quality equipment", "Professional installation", "Customized solutions", "Safety compliance"],
  },
  {
    image: elevatorMaintenance,
    title: "Elevator Maintenance & Modernization",
    description: "Comprehensive maintenance programs and modernization solutions for existing elevator systems. Our preventive maintenance ensures optimal performance and extended equipment life.",
    benefits: ["24/7 emergency support", "Preventive maintenance", "Parts replacement", "Performance optimization"],
  },
  {
    image: escalators,
    title: "Escalators & Moving Walkways",
    description: "Complete escalator and moving walkway solutions for commercial centers, airports, and public spaces. Designed for high traffic and maximum reliability.",
    benefits: ["High capacity systems", "Energy efficient", "Low maintenance", "Safety features"],
  },
  {
    image: platformLifts,
    title: "Platform & Accessibility Lifts",
    description: "Specialized accessibility solutions including platform lifts and wheelchair lifts. Ensuring buildings are accessible to everyone.",
    benefits: ["ADA compliant", "Space efficient", "Indoor/outdoor options", "Easy operation"],
  },
  {
    image: electricalSystems,
    title: "Electrical Engineering Systems",
    description: "Complete electrical infrastructure design, installation, and power distribution systems. From low voltage to high voltage transmission lines.",
    benefits: ["Power distribution", "Lighting systems", "Generator installation", "Transmission lines"],
  },
  {
    image: mechanicalSystems,
    title: "Mechanical Engineering Systems",
    description: "HVAC systems, ventilation, and mechanical infrastructure for optimal building performance. Climate control solutions for any environment.",
    benefits: ["HVAC installation", "Ventilation systems", "Fire suppression", "Building automation"],
  },
  {
    image: plumbingSystems,
    title: "Plumbing & Water Systems",
    description: "Advanced plumbing solutions including water supply, drainage, and fire protection systems. Complete water management infrastructure.",
    benefits: ["Water supply", "Drainage systems", "Fire protection", "Water treatment"],
  },
  {
    image: preventiveMaintenance,
    title: "Preventive Maintenance Contracts",
    description: "Tailored maintenance contracts ensuring system reliability and longevity. Regular inspections and proactive maintenance to prevent downtime.",
    benefits: ["Regular inspections", "Priority service", "Cost predictability", "Extended lifespan"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Comprehensive MEP and elevator solutions tailored to your project needs. 
            From design to maintenance, we deliver excellence at every stage.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-mep-orange flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Get a Quote <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
                <div className={`rounded-lg overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover grayscale"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-mep-orange">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your specific requirements and get a tailored proposal.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-mep-orange font-semibold px-8 py-4 rounded-md hover:bg-gray-100 transition-colors"
          >
            Contact Us Today <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
