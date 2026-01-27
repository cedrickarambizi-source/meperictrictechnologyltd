import Layout from "@/components/layout/Layout";
import { Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const teamMembers = [
  {
    name: "Nzabonimana Eric",
    role: "Founder & CEO",
    description: "Visionary leader with 15+ years in MEP engineering",
    initials: "NE",
  },
  {
    name: "Jean Paul Tuyambaze",
    role: "Operations Manager",
    description: "Expert in project delivery and operations excellence",
    initials: "JPT",
  },
  {
    name: "Rwiliza Gerald",
    role: "Senior Mechanical Engineer",
    description: "Specialist in HVAC and mechanical systems",
    initials: "RG",
  },
  {
    name: "Callixte Ndayisenga",
    role: "Senior Electrical Engineer",
    description: "Expert in electrical systems and power distribution",
    initials: "CN",
  },
  {
    name: "Jimmy Bimenyimana",
    role: "Senior Transmission Line Engineer",
    description: "Specialist in high voltage transmission infrastructure",
    initials: "JB",
  },
  {
    name: "Umutoniwase Divine",
    role: "Finance Manager",
    description: "Expert in financial planning and management",
    initials: "UD",
  },
  {
    name: "Cedric Karambizi",
    role: "Marketing Director",
    description: "Strategic marketing and business development leader",
    initials: "CK",
  },
  {
    name: "Izereyesu Fabrice",
    role: "Tender Manager",
    description: "Expert in tender preparation and contract management",
    initials: "IF",
  },
];

interface TeamCardProps {
  member: typeof teamMembers[0];
  index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative bg-team-card rounded-2xl overflow-hidden 
          transition-all duration-500 ease-out
          shadow-team hover:shadow-team-hover
          ${isHovered ? '-translate-y-2' : 'translate-y-0'}
        `}
      >
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden bg-team-card-accent">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-team-card via-transparent to-transparent z-10" />
          
          {/* Avatar Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className={`
                w-32 h-32 rounded-full bg-gradient-to-br from-team-accent to-team-accent-secondary
                flex items-center justify-center text-3xl font-heading font-bold text-white
                shadow-lg transition-transform duration-500
                ${isHovered ? 'scale-110' : 'scale-100'}
              `}
            >
              {member.initials}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-team-accent/10 blur-xl" />
          <div className="absolute bottom-8 left-4 w-16 h-16 rounded-full bg-team-accent-secondary/10 blur-xl" />
        </div>

        {/* Content */}
        <div className="relative z-20 p-6 -mt-8">
          {/* Role Badge */}
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-team-role bg-team-role-bg rounded-full mb-3">
            {member.role}
          </span>

          {/* Name */}
          <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-team-accent transition-colors duration-300">
            {member.name}
          </h3>

          {/* Description - Appears on hover */}
          <div
            className={`
              overflow-hidden transition-all duration-500 ease-out
              ${isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <p className="text-team-text-muted text-sm leading-relaxed">
              {member.description}
            </p>
          </div>

          {/* Social Links */}
          <div
            className={`
              flex gap-3 mt-4 transition-all duration-500 ease-out
              ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
          >
            <a
              href="#"
              className="p-2 bg-team-social rounded-full hover:bg-team-accent transition-colors duration-300"
              aria-label={`${member.name} LinkedIn`}
            >
              <Linkedin className="h-4 w-4 text-white" />
            </a>
            <a
              href="#"
              className="p-2 bg-team-social rounded-full hover:bg-team-accent transition-colors duration-300"
              aria-label={`${member.name} Email`}
            >
              <Mail className="h-4 w-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-team-bg py-20 lg:py-28">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 text-sm font-semibold uppercase tracking-widest text-team-accent bg-team-accent/10 rounded-full mb-4">
              Our Leadership
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Meet Our Team
            </h1>
            <p className="text-lg md:text-xl text-team-text-muted max-w-2xl mx-auto">
              Experienced professionals driving excellence in MEP engineering 
              and vertical transportation solutions across East Africa.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 animate-fade-in">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-team-card rounded-full">
              <span className="text-team-text-muted">Want to join our team?</span>
              <a
                href="/contact"
                className="font-semibold text-team-accent hover:text-team-accent-secondary transition-colors"
              >
                Get in touch →
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
