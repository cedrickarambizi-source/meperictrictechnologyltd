import { Link } from "react-router-dom";
import { 
  Building2, 
  Wrench, 
  Zap, 
  Droplets, 
  Settings, 
  Shield,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Elevator Supply & Installation",
    description: "State-of-the-art elevator systems for residential, commercial, and industrial buildings.",
  },
  {
    icon: Wrench,
    title: "Elevator Maintenance & Modernization",
    description: "Comprehensive maintenance programs and modernization solutions for existing elevator systems.",
  },
  {
    icon: Zap,
    title: "Electrical Engineering Systems",
    description: "Complete electrical infrastructure design, installation, and power distribution systems.",
  },
  {
    icon: Settings,
    title: "Mechanical Engineering Systems",
    description: "HVAC systems, ventilation, and mechanical infrastructure for optimal building performance.",
  },
  {
    icon: Droplets,
    title: "Plumbing & Water Systems",
    description: "Advanced plumbing solutions including water supply, drainage, and fire protection systems.",
  },
  {
    icon: Shield,
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
              className="bg-card p-8 rounded-lg shadow-sm card-hover group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
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
