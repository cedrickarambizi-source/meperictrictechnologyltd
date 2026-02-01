import Layout from "@/components/layout/Layout";
import { MapPin, CheckCircle, Calendar, Building, User, Phone } from "lucide-react";

// Import project images
import ikazeHouse from "@/assets/projects/ikaze-house.png";
import afPlaza from "@/assets/projects/af-plaza.png";
import kafamHouse from "@/assets/projects/kafam-house.png";
import laCroixDuSud from "@/assets/projects/la-croix-du-sud.png";
import yyussaCityCenter from "@/assets/projects/yyussa-city-center.png";
import bahoHospital from "@/assets/projects/baho-hospital.png";

interface ProjectDetail {
  label: string;
  value: string;
}

interface Project {
  title: string;
  image: string;
  details: ProjectDetail[];
  activities: string[];
}

const featuredProjects: Project[] = [
  {
    title: "IKAZE HOUSE",
    image: ikazeHouse,
    details: [
      { label: "Project Location", value: "Kigali – Remera-Gisiment" },
      { label: "Project Name", value: "Ikaze House Commercial Building" },
      { label: "Project Owner", value: "Nkeramihigo Jean Bosco" },
      { label: "Owner Contact", value: "+250 788 304 600" },
      { label: "Period of Installation", value: "2018 – 2020" },
      { label: "Number of Floors", value: "B, G, 1, 2, 3, 4, 5, 6 (Eight floors)" },
    ],
    activities: [
      "Electrical works",
      "Fire alarm system",
      "CCTV cameras",
      "IP telephone system",
      "Internet installation",
      "Elevator (lift) access door control",
      "Firefighting system",
      "Plumbing works",
    ],
  },
  {
    title: "A&F PLAZA",
    image: afPlaza,
    details: [
      { label: "Project Name", value: "A&F Plaza" },
      { label: "Period of Installation", value: "2023" },
    ],
    activities: [
      "Supply and installation of 2 elevators (lifts)",
    ],
  },
  {
    title: "KAFAM HOUSE",
    image: kafamHouse,
    details: [
      { label: "Project Location", value: "Kigali – Nyarutarama – Gishushu" },
      { label: "Project Name", value: "Kafam Commercial Building" },
      { label: "Project Owner", value: "Karagwa Joseph" },
      { label: "Owner Contact", value: "+250 782 419 496" },
      { label: "Period of Installation", value: "2018 – 2022" },
      { label: "Number of Floors", value: "B1, B2, B3, G, 1, 2, 3, 4, 5, 6 (Ten floors)" },
    ],
    activities: [
      "Electrical works",
      "Fire alarm system",
      "CCTV cameras",
      "IP telephone system",
      "Internet installation",
      "Elevator (lift) supply and installation",
      "Generator installation",
      "Firefighting system",
    ],
  },
  {
    title: "LA CROIX DU SUD – Kwa Nyirinkwaya",
    image: laCroixDuSud,
    details: [
      { label: "Period of Installation", value: "2024 – Ongoing" },
      { label: "Number of Floors", value: "B, G, 1, 2, 3, 4 (Six floors)" },
    ],
    activities: [
      "Supply and installation of electrical works",
      "Elevator (lift) supply and installation",
      "Fire alarm system",
      "Generator installation",
      "Firefighting system",
      "Switchgear installation",
      "Transformer installation",
      "MV line cables",
    ],
  },
  {
    title: "YYUSSA CITY CENTER",
    image: yyussaCityCenter,
    details: [
      { label: "Service Type", value: "Maintenance and Repair" },
      { label: "Period", value: "2025 – Ongoing" },
    ],
    activities: [
      "Maintenance and repair of 7 elevators",
      "Maintenance and repair of 2 escalators",
    ],
  },
  {
    title: "BAHO INTERNATIONAL HOSPITAL",
    image: bahoHospital,
    details: [
      { label: "Project Location", value: "Nyarutarama" },
      { label: "Project Name", value: "Baho International Hospital" },
      { label: "Project Owner", value: "Kayibanda Joseph" },
      { label: "Owner Contact", value: "+250 788 306 805" },
      { label: "Period of Installation", value: "2016 – 2021" },
      { label: "Number of Floors", value: "B1, G, 1, 2, 3, 4 (Six floors)" },
    ],
    activities: [
      "Electrical works",
      "Fire alarm system",
      "CCTV cameras",
      "IP telephone system",
      "Internet installation",
      "Elevator (lift) access door control",
      "Firefighting system",
      "Plumbing works",
      "Nursing signalization",
      "Bed head installation",
      "Air conditioning system",
    ],
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Discover our portfolio of completed and ongoing MEP and elevator projects 
            across Rwanda and East Africa.
          </p>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-card border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-xl lg:text-2xl text-white drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6 lg:p-8 space-y-6">
                  {/* Project Details */}
                  <div className="space-y-3">
                    {project.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3 text-sm">
                        <span className="font-medium text-foreground min-w-[140px]">
                          {detail.label}:
                        </span>
                        <span className="text-muted-foreground">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* What We Have Done Section */}
                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-primary mb-4 flex items-center gap-2 text-lg">
                      <span className="w-8 h-0.5 bg-mep-orange"></span>
                      What We Have Done
                    </h4>
                    <ul className="space-y-2.5">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
