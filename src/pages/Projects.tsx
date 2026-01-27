import Layout from "@/components/layout/Layout";
import { Building, Zap, Activity, MapPin, Filter } from "lucide-react";
import { useState } from "react";

const allProjects = [
  {
    title: "MINAFFET Procurement Office",
    category: "Elevators",
    description: "Elevator Installation for government procurement office",
    location: "Kigali, Rwanda",
  },
  {
    title: "OMICA Apartment",
    category: "Electrical",
    description: "Electrical & Elevator systems (Ongoing project)",
    location: "Kigali, Rwanda",
    ongoing: true,
  },
  {
    title: "MINAFFET Project",
    category: "Commercial",
    description: "2 Elevators, Electrical, CCTV, Fire, Plumbing",
    location: "Kigali, Rwanda",
  },
  {
    title: "Wild Urban Oasis Park Apartment",
    category: "Commercial",
    description: "Structural & Finishing works",
    location: "Kigali, Rwanda",
  },
  {
    title: "World Vision Rwanda HQ",
    category: "Elevators",
    description: "Elevator & Electrical installation",
    location: "Kigali, Rwanda",
  },
  {
    title: "Hospital Pédiatrique de Remera",
    category: "Hospitals",
    description: "Full MEP & Elevators for pediatric healthcare facility",
    location: "Remera, Kigali",
  },
  {
    title: "A&F Plaza",
    category: "Commercial",
    description: "Complete MEP solutions for commercial complex",
    location: "Kigali, Rwanda",
  },
  {
    title: "Baho International Hospital",
    category: "Hospitals",
    description: "Comprehensive MEP and vertical transportation",
    location: "Kigali, Rwanda",
  },
  {
    title: "Ikaze House Commercial Building",
    category: "Commercial",
    description: "Full MEP infrastructure installation",
    location: "Gisimenti, Kigali",
  },
  {
    title: "Victor Villa",
    category: "Elevators",
    description: "Premium residential elevator installation",
    location: "Kigali, Rwanda",
  },
  {
    title: "Twiga House Accommodation",
    category: "Commercial",
    description: "Complete MEP solutions for hospitality",
    location: "Kigali, Rwanda",
  },
  {
    title: "Remera Hospital – Gisimenti",
    category: "Hospitals",
    description: "Healthcare facility MEP infrastructure",
    location: "Gisimenti, Kigali",
  },
  {
    title: "Rushaki 30kV Transmission Line",
    category: "Transmission Lines",
    description: "High voltage transmission line engineering",
    location: "Rushaki, Rwanda",
  },
  {
    title: "Mushishiro 30kV Transmission Line",
    category: "Transmission Lines",
    description: "Power transmission infrastructure project",
    location: "Mushishiro, Rwanda",
  },
];

const categories = ["All", "Elevators", "Electrical", "Hospitals", "Commercial", "Transmission Lines"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Elevators": return Building;
      case "Electrical": return Zap;
      case "Hospitals": return Activity;
      case "Transmission Lines": return Zap;
      default: return Building;
    }
  };

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

      {/* Filter */}
      <section className="py-8 bg-secondary border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Filter className="h-5 w-5 text-muted-foreground mr-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const Icon = getCategoryIcon(project.category);
              return (
                <div
                  key={index}
                  className="group bg-card border rounded-lg overflow-hidden card-hover"
                >
                  <div className="h-48 bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors relative">
                    <Icon className="h-20 w-20 text-primary/30" />
                    {project.ongoing && (
                      <span className="absolute top-4 right-4 px-3 py-1 bg-mep-orange text-white text-xs font-semibold rounded-full">
                        Ongoing
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-mep-orange/10 text-mep-orange text-xs font-semibold rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-heading font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
