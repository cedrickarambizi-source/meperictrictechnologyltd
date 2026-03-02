import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/motion/ScrollReveal";
import StaggerChildren, { staggerItem } from "@/components/motion/StaggerChildren";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";

// Service images
import transmissionLine from "@/assets/services/transmission-line.jpg";
import internetConnection from "@/assets/services/internet-connection.jpg";
import wastewaterTreatment from "@/assets/services/wastewater-treatment.jpg";
import accessPoint from "@/assets/services/access-point.jpg";
import cctvInstallation from "@/assets/services/cctv-installation.jpg";
import elevatorTechnician from "@/assets/services/elevator-technician.jpg";
import electricalSystems from "@/assets/services/electrical-systems-new.jpg";

interface ServiceSpec {
  label: string;
  value: string;
}

interface ServiceData {
  image: string;
  title: string;
  description: string;
  benefits: string[];
  specs: ServiceSpec[];
  workflow: string[];
}

const services: ServiceData[] = [
  {
    image: transmissionLine,
    title: "Transmission Line",
    description: "High voltage power transmission infrastructure for reliable electricity distribution. We design, install, and maintain transmission lines that power communities and industries across the region.",
    benefits: ["High voltage systems", "Power distribution", "Grid connectivity", "Safety compliance"],
    specs: [
      { label: "Voltage Range", value: "11kV – 132kV" },
      { label: "Line Types", value: "Overhead & Underground" },
      { label: "Standards", value: "IEC / IEEE compliant" },
    ],
    workflow: ["Site survey & route planning", "Engineering design & permits", "Foundation & pole erection", "Conductor stringing & tensioning", "Testing & commissioning"],
  },
  {
    image: internetConnection,
    title: "Internet Connection",
    description: "Enterprise-grade fiber optic and network infrastructure solutions. We provide end-to-end connectivity services ensuring high-speed, reliable internet access for businesses and institutions.",
    benefits: ["Fiber optic installation", "Network design", "High-speed connectivity", "Enterprise solutions"],
    specs: [
      { label: "Speed", value: "Up to 10 Gbps" },
      { label: "Medium", value: "Single & Multi-mode Fiber" },
      { label: "Topology", value: "Star, Ring, Mesh" },
    ],
    workflow: ["Network needs assessment", "Architecture & topology design", "Cable routing & installation", "Equipment configuration", "Performance testing & handover"],
  },
  {
    image: wastewaterTreatment,
    title: "Waste Water Treatment Plant",
    description: "Modern water treatment facilities designed for environmental compliance and sustainability. Complete solutions from design to installation and ongoing maintenance.",
    benefits: ["Water purification", "Environmental compliance", "Sustainable systems", "Regular maintenance"],
    specs: [
      { label: "Capacity", value: "Custom per project" },
      { label: "Treatment", value: "Primary, Secondary, Tertiary" },
      { label: "Compliance", value: "REMA standards" },
    ],
    workflow: ["Water quality analysis", "System design & sizing", "Civil & mechanical works", "Equipment installation", "Commissioning & training"],
  },
  {
    image: accessPoint,
    title: "Access Point",
    description: "Professional wireless network infrastructure with enterprise-grade access points. Comprehensive coverage solutions for offices, hotels, hospitals, and commercial spaces.",
    benefits: ["Full coverage", "Enterprise hardware", "Scalable solutions", "Secure networks"],
    specs: [
      { label: "Standard", value: "WiFi 6 / 6E" },
      { label: "Coverage", value: "Up to 3,500 sq ft per AP" },
      { label: "Security", value: "WPA3 Enterprise" },
    ],
    workflow: ["Site survey & heat mapping", "AP placement planning", "Installation & cabling", "Network configuration", "Coverage verification"],
  },
  {
    image: cctvInstallation,
    title: "CCTV Installation",
    description: "Professional security surveillance systems for comprehensive property protection. HD cameras, monitoring systems, and integrated security solutions for all property types.",
    benefits: ["HD surveillance", "24/7 monitoring", "Remote access", "Professional installation"],
    specs: [
      { label: "Resolution", value: "Up to 4K Ultra HD" },
      { label: "Storage", value: "NVR / Cloud hybrid" },
      { label: "Analytics", value: "AI motion detection" },
    ],
    workflow: ["Security risk assessment", "Camera placement design", "Cabling & mounting", "NVR setup & configuration", "Client training & handover"],
  },
  {
    image: elevatorTechnician,
    title: "Elevator Supply & Installation",
    description: "State-of-the-art elevator systems for residential, commercial, and industrial buildings. We partner with internationally recognized manufacturers to deliver reliable, safe, and efficient vertical transportation solutions.",
    benefits: ["Premium quality equipment", "Professional installation", "Customized solutions", "Safety compliance"],
    specs: [
      { label: "Capacity", value: "400kg – 5,000kg" },
      { label: "Speed", value: "Up to 4 m/s" },
      { label: "Types", value: "Passenger, Freight, Hospital" },
    ],
    workflow: ["Shaft survey & analysis", "Elevator specification & design", "Manufacturing & logistics", "Installation & alignment", "Safety testing & certification"],
  },
  {
    image: elevatorTechnician,
    title: "Elevator Maintenance & Modernization",
    description: "Comprehensive maintenance programs and modernization solutions for existing elevator systems. Our preventive maintenance ensures optimal performance and extended equipment life.",
    benefits: ["24/7 emergency support", "Preventive maintenance", "Parts replacement", "Performance optimization"],
    specs: [
      { label: "Response Time", value: "< 2 hours" },
      { label: "Contracts", value: "Monthly / Annual" },
      { label: "Coverage", value: "All major brands" },
    ],
    workflow: ["System audit & inspection", "Maintenance plan development", "Scheduled preventive visits", "Parts procurement & replacement", "Performance reporting"],
  },
  {
    image: electricalSystems,
    title: "Electrical Engineering Systems",
    description: "Complete electrical infrastructure design, installation, and power distribution systems. From low voltage to high voltage transmission lines.",
    benefits: ["Power distribution", "Lighting systems", "Generator installation", "Transmission lines"],
    specs: [
      { label: "Voltage", value: "LV to 33kV" },
      { label: "Systems", value: "Power, Lighting, UPS" },
      { label: "Standards", value: "IEC 60364 compliant" },
    ],
    workflow: ["Load analysis & planning", "Single line diagram design", "Panel & switchgear installation", "Cable laying & termination", "Testing & energization"],
  },
];

const ServiceCard = ({ service, index }: { service: ServiceData; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const isReversed = index % 2 === 1;

  return (
    <ScrollReveal delay={index * 0.05}>
      <div className={`grid lg:grid-cols-2 gap-10 items-start ${isReversed ? "" : ""}`}>
        {/* Image */}
        <div className={`rounded-xl overflow-hidden shadow-lg bg-muted/30 ${isReversed ? "lg:order-2" : ""}`}>
          <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              decoding="async"
              className="w-full h-80 lg:h-96 object-cover"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className={isReversed ? "lg:order-1" : ""}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{service.title}</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

          <ul className="space-y-3 mb-6">
            {service.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-mep-orange flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Expandable sections */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 text-primary font-semibold mb-4 hover:gap-3 transition-all"
          >
            {expanded ? "Hide Details" : "View Technical Details"}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                {/* Technical Specs */}
                <div className="bg-muted/50 rounded-lg p-5 mb-4">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Technical Specifications</h4>
                  <div className="space-y-2">
                    {service.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between text-sm border-b border-border/50 pb-2 last:border-0 last:pb-0">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="font-medium text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workflow */}
                <div className="bg-muted/50 rounded-lg p-5">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">Our Process</h4>
                  <div className="space-y-3">
                    {service.workflow.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-sm text-foreground">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-4"
          >
            Get a Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Comprehensive MEP, technology, and infrastructure solutions tailored to your project needs.
              From design to maintenance, we deliver excellence at every stage.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-mep-orange">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Contact our team to discuss your specific requirements and get a tailored proposal.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-background text-foreground font-semibold px-8 py-4 rounded-md hover:bg-muted transition-colors">
            Contact Us Today <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
