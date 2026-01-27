import Layout from "@/components/layout/Layout";
import { Building, Zap, Activity, MapPin, ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "MINAFFET Project",
    category: "Government",
    description: "Complete MEP installation including 2 elevators, electrical systems, CCTV, fire protection, and plumbing for Rwanda's Ministry of Foreign Affairs.",
    scope: ["2 Passenger Elevators", "Electrical Systems", "CCTV Installation", "Fire Protection", "Plumbing"],
    icon: Building,
  },
  {
    title: "Hospital Pédiatrique de Remera",
    category: "Healthcare",
    description: "Full MEP and elevator solutions for a pediatric healthcare facility, ensuring safe and efficient operations for patient care.",
    scope: ["Hospital Elevators", "HVAC Systems", "Medical Gas", "Electrical Infrastructure", "Plumbing"],
    icon: Activity,
  },
  {
    title: "World Vision Rwanda HQ",
    category: "Corporate",
    description: "Modern elevator and complete electrical infrastructure installation for the international organization's headquarters.",
    scope: ["Passenger Elevator", "Electrical Distribution", "Emergency Power", "Lighting Systems"],
    icon: Building,
  },
  {
    title: "Rushaki 30kV Transmission Line",
    category: "Infrastructure",
    description: "High voltage transmission line engineering project supporting Rwanda's power infrastructure development.",
    scope: ["30kV Transmission", "Tower Installation", "Line Stringing", "Substation Work"],
    icon: Zap,
  },
  {
    title: "A&F Plaza",
    category: "Commercial",
    description: "Comprehensive MEP solutions for a multi-story commercial plaza, including vertical transportation systems.",
    scope: ["Commercial Elevators", "HVAC", "Electrical", "Plumbing", "Fire Protection"],
    icon: Building,
  },
  {
    title: "Baho International Hospital",
    category: "Healthcare",
    description: "State-of-the-art MEP infrastructure for a major international hospital facility.",
    scope: ["Multiple Elevators", "Medical MEP", "HVAC Systems", "Power Distribution"],
    icon: Activity,
  },
];

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Explore our flagship projects showcasing our expertise in MEP engineering 
            and elevator solutions across Rwanda.
          </p>
        </div>
      </section>

      {/* Portfolio Items */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className={`bg-secondary rounded-lg h-80 flex items-center justify-center ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <item.icon className="h-32 w-32 text-primary/20" />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-block px-3 py-1 bg-mep-orange/10 text-mep-orange text-sm font-semibold rounded-full mb-4">
                    {item.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">{item.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Project Scope:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.scope.map((scope, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-secondary text-sm rounded-full"
                        >
                          {scope}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    Rwanda
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients. Contact us today for a consultation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-mep-orange hover:bg-mep-orange-hover text-white font-semibold px-8 py-4 rounded-md transition-colors"
          >
            Get Started <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
