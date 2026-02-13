import Layout from "@/components/layout/Layout";
import { useState, useEffect, useRef } from "react";
import TeamMemberCard from "@/components/team/TeamMemberCard";

// Team member photos
import nzabonimamaEric from "@/assets/team/nzabonimana-eric.jpg";
import jeanPaulTuyambaze from "@/assets/team/jean-paul-tuyambaze.jpg";
import rwilizaGerald from "@/assets/team/rwiliza-gerald.jpg";
import callixteNdayisenga from "@/assets/team/callixte-ndayisenga.jpg";
import jimmyBimenyimana from "@/assets/team/jimmy-bimenyimana.jpg";
import umutoniwaseDivine from "@/assets/team/umutoniwase-divine.jpg";
import fabriceTuyizere from "@/assets/team/fabrice-tuyizere.jpg";
import ngabonzizaBenjamin from "@/assets/team/ngabonziza-benjamin-plumbing.jpg";
import Karambizicedric from "@/assets/team/Karambizi-cedric.jpg";
import isaacMuhoza from "@/assets/team/isaac-muhoza.jpg";

const teamMembers = [
  {
    name: "Nzabonimana Eric",
    role: "Founder & CEO",
    description: "Visionary leader with 15+ years in MEP engineering",
    photo: nzabonimamaEric,
  },
  {
    name: "Jean Paul Tuyambaze",
    role: "Operations Manager",
    description: "Expert in project delivery and operations excellence",
    photo: jeanPaulTuyambaze,
  },
  {
    name: "Karambizi Cedric",
    role: "Marketing Director",
    description: "Strategic marketing and business development leader",
    photo: KarambiziCedric,
  },
  {
    name: "Gerald Rwililiza",
    role: "Senior Mechanical Engineer",
    description: "Specialist in HVAC and mechanical systems",
    photo: rwilizaGerald,
  },
  {
    name: "Callixte Ndayisenga",
    role: "Senior Electrical Engineer",
    description: "Expert in electrical systems and power distribution",
    photo: callixteNdayisenga,
  },
  {
    name: "Jimmy Bimenyimana",
    role: "Senior Transmission Line Engineer",
    description: "Specialist in high voltage transmission infrastructure",
    photo: jimmyBimenyimana,
  },
  {
    name: "NGABONZIZA Benjamin",
    role: "Senior Plumbing Engineer",
    description: "Expert in plumbing systems and water infrastructure",
    photo: ngabonzizaBenjamin,
  },
  {
    name: "Isaac Muhoza",
    role: "MEP Design Engineer",
    description: "Specialist in MEP systems design and coordination",
    photo: isaacMuhoza,
  },
  {
    name: "Fabrice Tuyizere",
    role: "Tender Manager",
    description: "Expert in tender preparation and contract management",
    photo: fabriceTuyizere,
  },
  {
    name: "Umutoniwase Divine",
    role: "Finance Manager",
    description: "Expert in financial planning and management",
m,         photo: umutoniwaseDivine,
  },
];

const Team = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isGridVisible, setIsGridVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    const gridElement = gridRef.current;
    const headerElement = headerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === gridElement && entry.isIntersecting) {
            setIsGridVisible(true);
          }
          if (entry.target === headerElement && entry.isIntersecting) {
            setIsHeaderVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (gridElement) observer.observe(gridElement);
    if (headerElement) observer.observe(headerElement);

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      {/* Hero Section - Deep Navy Background */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 py-16 lg:py-24 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`
              text-center mb-16 transition-all duration-700 ease-out
              ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <span className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-widest text-mep-orange bg-mep-orange/10 rounded-full mb-4">
              Our Leadership
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Meet Our Team
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Experienced professionals driving excellence in MEP engineering
              and vertical transportation solutions across East Africa.
            </p>
          </div>

          {/* Team Grid - Consistent 1:1 Cards */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6"
          >
            {teamMembers.map((member, index) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                index={index}
                isVisible={isGridVisible}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`
              text-center mt-20 transition-all duration-700 delay-500
              ${isGridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700/50">
              <span className="text-slate-400">Want to join our team?</span>
              <a
                href="/contact"
                className="font-semibold text-mep-orange hover:text-white transition-colors"
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
