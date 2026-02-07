import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  CheckCircle,
} from "lucide-react";

// Service images
import transmissionLine from "@/assets/services/transmission-line.jpg";
import internetConnection from "@/assets/services/internet-connection.jpg";
import wastewaterTreatment from "@/assets/services/wastewater-treatment.jpg";
import accessPoint from "@/assets/services/access-point.jpg";
import cctvInstallation from "@/assets/services/cctv-installation.jpg";
import elevatorInstallation from "@/assets/services/elevator-installation.jpg";
import elevatorMaintenance from "@/assets/services/elevator-maintenance.jpg";
import electricalSystems from "@/assets/services/electrical-systems.jpg";

const services = [
  {
    image: transmissionLine,
    title: "Transmission Line",
    description: "High voltage power transmission infrastructure for reliable electricity distribution. We design, install, and maintain transmission lines that power communities and industries across the region.",
    benefits: ["High voltage systems", "Power distribution", "Grid connectivity", "Safety compliance"],
  },
  {
    image: internetConnection,
    title: "Internet Connection",
    description: "Enterprise-grade fiber optic and network infrastructure solutions. We provide end-to-end connectivity services ensuring high-speed, reliable internet access for businesses and institutions.",
    benefits: ["Fiber optic installation", "Network design", "High-speed connectivity", "Enterprise solutions"],
  },
  {
    image: wastewaterTreatment,
    title: "Waste Water Treatment Plant",
    description: "Modern water treatment facilities designed for environmental compliance and sustainability. Complete solutions from design to installation and ongoing maintenance.",
    benefits: ["Water purification", "Environmental compliance", "Sustainable systems", "Regular maintenance"],
  },
  {
    image: accessPoint,
    title: "Access Point",
    description: "Professional wireless network infrastructure with enterprise-grade access points. Comprehensive coverage solutions for offices, hotels, hospitals, and commercial spaces.",
    benefits: ["Full coverage", "Enterprise hardware", "Scalable solutions", "Secure networks"],
  },
  {
    image: cctvInstallation,
    title: "CCTV Installation",
    description: "Professional security surveillance systems for comprehensive property protection. HD cameras, monitoring systems, and integrated security solutions for all property types.",
    benefits: ["HD surveillance", "24/7 monitoring", "Remote access", "Professional installation"],
  },
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
    image: electricalSystems,
    title: "Electrical Engineering Systems",
    description: "Complete electrical infrastructure design, installation, and power distribution systems. From low voltage to high voltage transmission lines.",
    benefits: ["Power distribution", "Lighting systems", "Generator installation", "Transmission lines"],
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
            Comprehensive MEP, technology, and infrastructure solutions tailored to your project needs. 
            From design to maintenance, we deliver excellence at every stage.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-mep-orange flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
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
                <div className={`rounded-xl overflow-hidden shadow-lg bg-muted/30 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-80 object-cover brightness-105 contrast-105"
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
