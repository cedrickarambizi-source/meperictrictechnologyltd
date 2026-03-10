import { Link } from "react-router-dom";
import { ArrowRight, Building, Zap, Activity, MapPin } from "lucide-react";

const projects = [
  {
    title: "MINAFFET Project",
    category: "Elevators & Electrical",
    description: "2 Elevators, Electrical, CCTV, Fire, Plumbing installation",
    icon: Building,
  },
  {
    title: "Hospital Pédiatrique de Remera",
    category: "Full MEP",
    description: "Complete MEP solutions and elevator systems for healthcare",
    icon: Activity,
  },
  {
    title: "World Vision Rwanda HQ",
    category: "Elevator & Electrical",
    description: "Modern elevator installation and electrical infrastructure",
    icon: Building,
  },
  {
    title: "Rushaki 30kV Transmission Line",
    category: "Electrical",
    description: "High voltage transmission line engineering project",
    icon: Zap,
  },
  {
    title: "OMICA Apartment",
    category: "Ongoing",
    description: "Electrical systems and elevator installation",
    icon: Building,
  },
  {
    title: "Baho International Hospital",
    category: "Full MEP",
    description: "Comprehensive MEP solutions for medical facility",
    icon: Activity,
  },
  {
    title: "KGP Apartment",
    category: "Electrical & Elevator",
    description: "6 elevators, generator, switchgear, transformer, MV line cables",
    icon: Building,
  },
  {
    title: "Victory Villa",
    category: "Full MEP",
    description: "Electrical, fire alarm, CCTV, elevator, access door control",
    icon: Building,
  },
  {
    title: "MINAFFET Procurement Office",
    category: "Elevator",
    description: "Elevator (Lift) installation across 7 levels",
    icon: Building,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-mep-orange font-semibold uppercase tracking-wider text-sm">
            Our Projects
          </span>
          <h2 className="section-heading mt-2 mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="section-subheading">
            From government buildings to hospitals and commercial complexes, 
            our portfolio showcases our commitment to excellence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border rounded-lg overflow-hidden card-hover"
            >
              <div className="h-48 bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <project.icon className="h-20 w-20 text-primary/30" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-mep-orange/10 text-mep-orange text-xs font-semibold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="font-heading font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  Rwanda
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
            View All Projects <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
