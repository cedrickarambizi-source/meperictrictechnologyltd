import Layout from "@/components/layout/Layout";
import { Linkedin, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// Team member photos
import nzabonimamaEric from "@/assets/team/nzabonimana-eric.jpg";
import jeanPaulTuyambaze from "@/assets/team/jean-paul-tuyambaze.jpg";
import rwilizaGerald from "@/assets/team/rwiliza-gerald.jpg";
import callixteNdayisenga from "@/assets/team/callixte-ndayisenga.jpg";
import jimmyBimenyimana from "@/assets/team/jimmy-bimenyimana.jpg";
import umutoniwaseDivine from "@/assets/team/umutoniwase-divine.jpg";
import fabriceTuyizere from "@/assets/team/fabrice-tuyizere.jpg";
import ngabonzizaBenjamin from "@/assets/team/ngabonziza-benjamin-plumbing.jpg";
import cedricKarambizi from "@/assets/team/cedric-karambizi.jpg";
import isaacMuhoza from "@/assets/team/isaac-muhoza.jpg";

const teamMembers = [{
  name: "Nzabonimana Eric",
  role: "Founder & CEO",
  description: "Visionary leader with 15+ years in MEP engineering",
  photo: nzabonimamaEric
}, {
  name: "Jean Paul Tuyambaze",
  role: "Operations Manager",
  description: "Expert in project delivery and operations excellence",
  photo: jeanPaulTuyambaze
}, {
  name: "Gerald Rwililiza",
  role: "Senior Mechanical Engineer",
  description: "Specialist in HVAC and mechanical systems",
  photo: rwilizaGerald
}, {
  name: "Callixte Ndayisenga",
  role: "Senior Electrical Engineer",
  description: "Expert in electrical systems and power distribution",
  photo: callixteNdayisenga
}, {
  name: "Jimmy Bimenyimana",
  role: "Senior Transmission Line Engineer",
  description: "Specialist in high voltage transmission infrastructure",
  photo: jimmyBimenyimana
}, {
  name: "NGABONZIZA Benjamin",
  role: "Senior Plumbing Engineer",
  description: "Expert in plumbing systems and water infrastructure",
  photo: ngabonzizaBenjamin
}, {
  name: "Isaac Muhoza",
  role: "MEP Design Engineer",
  description: "Specialist in MEP systems design and coordination",
  photo: isaacMuhoza
}, {
  name: "Fabrice Tuyizere",
  role: "Tender Manager",
  description: "Expert in tender preparation and contract management",
  photo: fabriceTuyizere
}, {
  name: "Umutoniwase Divine",
  role: "Finance Manager",
  description: "Expert in financial planning and management",
  photo: umutoniwaseDivine
}, {
  name: "Cedric Karambizi",
  role: "Marketing Director",
  description: "Strategic marketing and business development leader",
  photo: cedricKarambizi
}];

interface TeamCardProps {
  member: typeof teamMembers[0];
  index: number;
  isVisible: boolean;
}

const TeamCard = ({
  member,
  index,
  isVisible
}: TeamCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return <div className={`
        group relative cursor-pointer
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `} style={{
    transitionDelay: `${index * 100}ms`
  }} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`
          relative bg-team-card rounded-2xl overflow-hidden 
          transition-all duration-500 ease-out
          shadow-team hover:shadow-team-hover
          ${isHovered ? '-translate-y-2' : 'translate-y-0'}
        `}>
        {/* Image Container - Taller portrait orientation */}
        <div className="relative h-80 overflow-hidden bg-team-card-accent">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-team-card via-transparent to-transparent z-10" />
          
          {/* Member Photo */}
          <img src={member.photo} alt={member.name} className={`
              w-full h-full object-cover object-[center_15%]
              transition-transform duration-500
              ${isHovered ? 'scale-105' : 'scale-100'}
            `} />

          {/* Decorative Elements */}
          <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-team-accent/10 blur-xl" />
          <div className="absolute bottom-8 left-4 w-16 h-16 rounded-full bg-team-accent-secondary/10 blur-xl" />
        </div>

        {/* Content */}
        <div className="relative z-20 p-6 -mt-8">
          {/* Role Badge */}
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-team-role bg-team-role-bg rounded-full mb-3 bg-zinc-950">
            {member.role}
          </span>

          {/* Name */}
          <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-team-accent transition-colors duration-300">
            {member.name}
          </h3>

          {/* Description - Appears on hover */}
          <div className={`
              overflow-hidden transition-all duration-500 ease-out
              ${isHovered ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}
            `}>
            <p className="text-team-text-muted text-sm leading-relaxed">
              {member.description}
            </p>
          </div>

          {/* Social Links */}
          <div className={`
              flex gap-3 mt-4 transition-all duration-500 ease-out
              ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}>
            <a href="#" className="p-2 bg-team-social rounded-full hover:bg-team-accent transition-colors duration-300" aria-label={`${member.name} LinkedIn`}>
              <Linkedin className="h-4 w-4 text-white" />
            </a>
            <a href="#" className="p-2 bg-team-social rounded-full hover:bg-team-accent transition-colors duration-300" aria-label={`${member.name} Email`}>
              <Mail className="h-4 w-4 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>;
};

const Team = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  useEffect(() => {
    const gridElement = gridRef.current;
    const headerElement = headerRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === gridElement && entry.isIntersecting) {
          setIsGridVisible(true);
        }
        if (entry.target === headerElement && entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    });
    if (gridElement) observer.observe(gridElement);
    if (headerElement) observer.observe(headerElement);
    return () => observer.disconnect();
  }, []);
  return <Layout>
      {/* Hero Section */}
      <section className="bg-team-bg py-20 lg:py-28">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div ref={headerRef} className={`
              text-center mb-16 transition-all duration-700 ease-out
              ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}>
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
          <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => <TeamCard key={member.name} member={member} index={index} isVisible={isGridVisible} />)}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20 animate-fade-in">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-team-card rounded-full">
              <span className="text-team-text-muted">Want to join our team?</span>
              <a href="/contact" className="font-semibold text-team-accent hover:text-team-accent-secondary transition-colors">
                Get in touch →
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};

export default Team;
