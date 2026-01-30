import Layout from "@/components/layout/Layout";
import { MapPin, CheckCircle } from "lucide-react";

// Import project images
import landmarkProject from "@/assets/projects/landmark-project.png";
import omicaBuilding from "@/assets/projects/omica-building.png";
import oassParkApartment from "@/assets/projects/oass-park-apartment.png";
import kimironkoCommercial from "@/assets/projects/kimironko-commercial.png";
import wintanaApartment from "@/assets/projects/wintana-apartment.png";
import worldvisionHQ from "@/assets/projects/worldvision-hq.png";

const featuredProjects = [
  {
    title: "Landmark Project",
    image: landmarkProject,
    location: "Kigali, Rwanda",
    activities: [
      "Supply and Installation of Electrical Activities",
      "Two Elevators (Lifts)",
      "Fire Alarm System",
      "CCTV Cameras",
      "IP Telephone",
      "Internet Network",
      "Generator Installation",
      "Firefighting System",
    ],
  },
  {
    title: "Omica Building",
    image: omicaBuilding,
    location: "Kigali, Rwanda",
    activities: [
      "Supply and Installation of Electrical Activities",
      "Elevator (Lift)",
      "Fire Alarm System",
      "Generator Installation",
      "Firefighting System",
      "Switchgear",
      "Transformer",
      "MV Line Cables",
    ],
  },
  {
    title: "OASS Park Apartment",
    image: oassParkApartment,
    location: "Kigali, Rwanda",
    activities: [
      "Structural Works",
      "Walling",
      "Plastering",
    ],
  },
  {
    title: "Kimironko Commercial Building",
    image: kimironkoCommercial,
    location: "Kimironko, Kigali",
    activities: [
      "Supply and Installation of Electrical Activities",
      "Elevator (Lift)",
      "Fire Alarm System",
      "Generator Installation",
      "Firefighting System",
      "Switchgear",
      "Transformer",
      "MV Line Cable",
    ],
  },
  {
    title: "Wintana Apartment",
    image: wintanaApartment,
    location: "Kigali, Rwanda",
    activities: [
      "Supply and Installation of Electrical Activities",
      "Elevator (Lift)",
    ],
  },
  {
    title: "WorldVision Headquarters Rwanda",
    image: worldvisionHQ,
    location: "Kigali, Rwanda",
    activities: [
      "Elevator Supply and Installation",
    ],
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Projects</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Discover our portfolio of completed and ongoing MEP and elevator projects 
            across Rwanda and East Africa.
          </p>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-card border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Image - Grayscale */}
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Project Content */}
                <div className="p-6 lg:p-8">
                  {/* Title and Location */}
                  <h3 className="font-heading font-bold text-xl lg:text-2xl mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  
                  {/* What We Have Done Section */}
                  <div className="border-t pt-5">
                    <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-mep-orange"></span>
                      What We Have Done
                    </h4>
                    <ul className="space-y-2">
                      {project.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-mep-orange flex-shrink-0 mt-0.5" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            className="btn-primary inline-flex items-center gap-2"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
