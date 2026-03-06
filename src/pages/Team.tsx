import Layout from "@/components/layout/Layout";
import { useState } from "react";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import SEOHead from "@/components/seo/SEOHead";
import StructuredData, { buildBreadcrumbSchema } from "@/components/seo/StructuredData";
import ScrollReveal from "@/components/motion/ScrollReveal";
import StaggerChildren, { staggerItem } from "@/components/motion/StaggerChildren";
import { motion } from "framer-motion";
import { Calendar, Briefcase, Users, Globe } from "lucide-react";

// Team member photos
import nzabonimamaEric from "@/assets/team/nzabonimana-eric.jpg";
import jeanPaulTuyambaze from "@/assets/team/jean-paul-tuyambaze.jpg";
import rwilizaGerald from "@/assets/team/rwiliza-gerald.jpg";
import callixteNdayisenga from "@/assets/team/callixte-ndayisenga.jpg";
import jimmyBimenyimana from "@/assets/team/jimmy-bimenyimana.jpg";
import umutoniwaseDivine from "@/assets/team/umutoniwase-divine.jpg";
import fabriceTuyizere from "@/assets/team/fabrice-tuyizere.jpg";
import ngabonzizaBenjamin from "@/assets/team/ngabonziza-benjamin-plumbing.jpg";
import KarambiziCedric from "@/assets/team/cedric-karambizi.jpg";
import isaacMuhoza from "@/assets/team/isaac-muhoza.jpg";

const teamMembers = [
  {
    name: "Nzabonimana Eric",
    role: "Founder & CEO",
    description: "Visionary leader with 15+ years in MEP engineering",
    photo: nzabonimamaEric,
    category: "Leadership",
  },
  {
    name: "Jean Paul Tuyambaze",
    role: "Operations Manager",
    description: "Expert in project delivery and operations excellence",
    photo: jeanPaulTuyambaze,
    category: "Operations",
  },
  {
    name: "Karambizi Cedric",
    role: "Marketing Director",
    description: "Strategic marketing and business development leader",
    photo: KarambiziCedric,
    category: "Leadership",
  },
  {
    name: "Gerald Rwililiza",
    role: "Senior Mechanical Engineer",
    description: "Specialist in HVAC and mechanical systems",
    photo: rwilizaGerald,
    category: "Engineering",
  },
  {
    name: "Callixte Ndayisenga",
    role: "Senior Electrical Engineer",
    description: "Expert in electrical systems and power distribution",
    photo: callixteNdayisenga,
    category: "Engineering",
  },
  {
    name: "Jimmy Bimenyimana",
    role: "Senior Transmission Line Engineer",
    description: "Specialist in high voltage transmission infrastructure",
    photo: jimmyBimenyimana,
    category: "Engineering",
  },
  {
    name: "NGABONZIZA Benjamin",
    role: "Senior Plumbing Engineer",
    description: "Expert in plumbing systems and water infrastructure",
    photo: ngabonzizaBenjamin,
    category: "Engineering",
  },
  {
    name: "Isaac Muhoza",
    role: "MEP Design Engineer",
    description: "Specialist in MEP systems design and coordination",
    photo: isaacMuhoza,
    category: "Engineering",
  },
  {
    name: "Fabrice Tuyizere",
    role: "Tender Manager",
    description: "Expert in tender preparation and contract management",
    photo: fabriceTuyizere,
    category: "Tender & Commercial",
  },
  {
    name: "Umutoniwase Divine",
    role: "Finance Manager",
    description: "Expert in financial planning and management",
    photo: umutoniwaseDivine,
    category: "Finance",
  },
];

const filters = ["All", "Leadership", "Engineering", "Operations", "Finance", "Tender & Commercial"];

const stats = [
  { icon: Calendar, value: "10+", label: "Years Industry Experience" },
  { icon: Briefcase, value: "60+", label: "Engineering Projects Delivered" },
  { icon: Users, value: "15+", label: "Professional Engineers" },
  { icon: Globe, value: "Rwanda", label: "Trusted Across the Region" },
];

const Team = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredMembers = activeFilter === "All"
    ? teamMembers
    : teamMembers.filter((m) => m.category === activeFilter);

  return (
    <Layout>
      <SEOHead
        title="Meet Our Engineering Team | MEP Erictric Technology Ltd"
        description="Meet the skilled engineers and professionals behind MEP Erictric Technology Ltd's elevator and MEP solutions in Rwanda."
        canonical="/team"
      />
      <StructuredData
        id="breadcrumb-team"
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Meet Our Team", path: "/team" },
        ])}
      />

      {/* Dark Premium Background */}
      <div className="bg-team-page-gradient min-h-screen relative">
        {/* Subtle grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Hero Header */}
        <section className="relative pt-24 pb-10 lg:pt-32 lg:pb-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-[38px] font-extrabold text-white tracking-tight mb-5 leading-tight">
                  Meet Our Leadership & Engineering Team
                </h1>
                <div
                  className="mx-auto mb-5"
                  style={{
                    width: 120,
                    height: 4,
                    borderRadius: 4,
                    background: "linear-gradient(90deg, hsl(var(--mep-blue-dark)), hsl(var(--accent-blue)))",
                  }}
                />
                <p className="text-base md:text-[16px] text-white/75 leading-relaxed max-w-[700px] mx-auto">
                  Our certified engineers and specialists deliver world-class Mechanical, Electrical,
                  and Plumbing (MEP) solutions across Rwanda and the region.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative pb-10 lg:pb-14">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-[0_12px_35px_rgba(0,0,0,0.15)] hover:-translate-y-1.5 transition-transform duration-300"
                >
                  <div className="mx-auto mb-3 w-11 h-11 rounded-full bg-[hsl(var(--accent-blue)/0.1)] flex items-center justify-center">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-2xl lg:text-[32px] font-extrabold text-primary mb-1">{stat.value}</p>
                  <p className="text-xs lg:text-sm text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </section>

        {/* Filter + Team Grid */}
        <section className="relative py-16 lg:pt-10 lg:pb-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filters */}
            <ScrollReveal>
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`
                      px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300
                      ${activeFilter === filter
                        ? "bg-primary text-white shadow-lg"
                        : "bg-transparent text-white/80 border border-white/20 hover:bg-accent-blue hover:text-white hover:border-transparent"
                      }
                    `}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Team Grid */}
            <StaggerChildren
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              staggerDelay={0.08}
            >
              {filteredMembers.map((member, index) => (
                <motion.div key={member.name} variants={staggerItem}>
                  <TeamMemberCard member={member} index={index} />
                </motion.div>
              ))}
            </StaggerChildren>

            {/* Bottom CTA */}
            <ScrollReveal delay={0.3}>
              <div className="text-center mt-20">
                <div className="inline-flex items-center gap-4 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/15">
                  <span className="text-white/70">Want to join our team?</span>
                  <a
                    href="/contact"
                    className="font-semibold text-white hover:text-accent-blue transition-colors"
                  >
                    Get in touch →
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Team;
