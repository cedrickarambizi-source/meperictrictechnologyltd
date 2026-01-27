import Layout from "@/components/layout/Layout";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Nzabomimana Eric",
    role: "Founder & CEO",
    description: "Visionary leader with 15+ years in MEP engineering",
  },
  {
    name: "Jean Paul Tuyambaze",
    role: "Operations Manager",
    description: "Expert in project delivery and operations excellence",
  },
  {
    name: "Rwihiza Gerald",
    role: "Senior Mechanical Engineer",
    description: "Specialist in HVAC and mechanical systems",
  },
  {
    name: "Callixte Ndayisenga",
    role: "Senior Electrical Engineer",
    description: "Expert in electrical systems and power distribution",
  },
  {
    name: "Jimmy Bimenyimana",
    role: "Senior Transmission Line Engineer",
    description: "Specialist in high voltage transmission infrastructure",
  },
  {
    name: "Umutoniwase Divine",
    role: "Finance Manager",
    description: "Expert in financial planning and management",
  },
  {
    name: "Cedric Karambizi",
    role: "Marketing Director",
    description: "Strategic marketing and business development leader",
  },
  {
    name: "Izereyesu Claude",
    role: "Project Coordinator",
    description: "Expert in project coordination and client relations",
  },
];

const Team = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Meet Our Team</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Our experienced team of engineers and professionals are dedicated to 
            delivering excellence in every project.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-primary text-primary-foreground rounded-lg overflow-hidden card-hover"
              >
                {/* Avatar Placeholder */}
                <div className="h-48 bg-primary-foreground/10 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary-foreground/20 flex items-center justify-center text-3xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-mep-orange font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-sm opacity-80 mb-4">{member.description}</p>
                  <div className="flex justify-center gap-3">
                    <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors">
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
