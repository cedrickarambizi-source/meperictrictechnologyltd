import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/projects/ProjectCard";
import ScrollReveal from "@/components/motion/ScrollReveal";
import StaggerChildren, { staggerItem } from "@/components/motion/StaggerChildren";
import { allProjects, allCategories, allLocations, type ServiceCategory, type ProjectLocation } from "@/data/projects";
import { Award, Shield, FileCheck, Building2, Filter } from "lucide-react";
import authCertificatesImg from "@/assets/certificates/authorization-certificates.png";
import completionCertificatesImg from "@/assets/certificates/completion-certificates.png";

const certifications = [
  { name: "RDB Company Registration", authority: "Rwanda Development Board", year: "2016", description: "Official domestic company registration certificate" },
  { name: "FUJIHD Authorization", authority: "FUJIHD Elevator Co., Ltd", year: "2024", description: "Authorized agent for elevator supply and service in Rwanda" },
  { name: "Daikin Distributor Authorization", authority: "Daikin Industries Ltd", year: "2024", description: "Authorized distributor for air conditioners and refrigeration systems" },
  { name: "SafeEagle Authorization", authority: "Shenzhen Jinjian Era Technology Co., Ltd", year: "2023", description: "Overseas distributor for X-ray baggage scanners and security equipment" },
  { name: "TSTY Electric Authorization", authority: "TSTY Electric Co., Ltd", year: "2024", description: "Authorized agent for transformers and switchgear in Rwanda" },
  { name: "MEP Erictric Cables Authorization", authority: "Wuxi Jiangnan Cable Co.", year: "2025", description: "Usage rights for cable production and customization in China" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | "All">("All");
  const [activeLocation, setActiveLocation] = useState<ProjectLocation | "All">("All");
  const [activeStatus, setActiveStatus] = useState<"all" | "completed" | "ongoing">("all");

  const filteredProjects = useMemo(() => {
    return allProjects.filter((p) => {
      const catMatch = activeCategory === "All" || p.categories.includes(activeCategory);
      const locMatch = activeLocation === "All" || p.location === activeLocation;
      const statusMatch = activeStatus === "all" || p.status === activeStatus;
      return catMatch && locMatch && statusMatch;
    });
  }, [activeCategory, activeLocation, activeStatus]);

  const FilterPill = ({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) => (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
        active
          ? "bg-primary text-primary-foreground shadow-md"
          : "bg-muted text-muted-foreground hover:bg-muted/80"
      }`}
    >
      {label}
    </button>
  );

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Discover our portfolio of completed and ongoing MEP and elevator projects
              across Rwanda and East Africa.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters + Projects */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <ScrollReveal className="mb-12">
            <div className="bg-card border rounded-xl p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-foreground font-semibold mb-2">
                <Filter className="h-5 w-5 text-primary" />
                Filter Projects
              </div>

              {/* Category */}
              <div>
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2 block">Service Category</span>
                <div className="flex flex-wrap gap-2">
                  <FilterPill label="All" active={activeCategory === "All"} onClick={() => setActiveCategory("All")} />
                  {allCategories.map((c) => (
                    <FilterPill key={c} label={c} active={activeCategory === c} onClick={() => setActiveCategory(c)} />
                  ))}
                </div>
              </div>

              {/* Location & Status */}
              <div className="flex flex-wrap gap-8">
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2 block">Location</span>
                  <div className="flex flex-wrap gap-2">
                    <FilterPill label="All" active={activeLocation === "All"} onClick={() => setActiveLocation("All")} />
                    {allLocations.map((l) => (
                      <FilterPill key={l} label={l} active={activeLocation === l} onClick={() => setActiveLocation(l)} />
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-2 block">Status</span>
                  <div className="flex flex-wrap gap-2">
                    <FilterPill label="All" active={activeStatus === "all"} onClick={() => setActiveStatus("all")} />
                    <FilterPill label="Completed" active={activeStatus === "completed"} onClick={() => setActiveStatus("completed")} />
                    <FilterPill label="Ongoing" active={activeStatus === "ongoing"} onClick={() => setActiveStatus("ongoing")} />
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground pt-2">
                Showing {filteredProjects.length} of {allProjects.length} projects
              </p>
            </div>
          </ScrollReveal>

          {/* Project Grid with AnimatePresence */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              <p className="text-lg">No projects match your current filters.</p>
              <button
                onClick={() => { setActiveCategory("All"); setActiveLocation("All"); setActiveStatus("all"); }}
                className="mt-4 text-primary font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-mep-orange font-semibold uppercase tracking-wider text-sm">Certifications & Compliance</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our Credentials & Authorizations</h2>
            <p className="text-muted-foreground">We maintain the highest standards of compliance and hold authorizations from leading international manufacturers.</p>
          </ScrollReveal>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <motion.div key={index} variants={staggerItem} className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{cert.name}</h3>
                    <p className="text-sm text-mep-orange font-medium mb-1">{cert.authority}</p>
                    <p className="text-xs text-muted-foreground mb-2">Issued: {cert.year}</p>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>

          {/* Certificate Images */}
          <ScrollReveal className="space-y-8">
            <div className="bg-card border rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-xl">Registration & Authorization Certificates</h3>
              </div>
              <img src={authCertificatesImg} alt="MEP Erictric Technology Ltd Authorization Certificates" loading="lazy" decoding="async" className="w-full rounded-lg" />
            </div>
            <div className="bg-card border rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-xl">Project Completion Certificates</h3>
              </div>
              <img src={completionCertificatesImg} alt="MEP Erictric Technology Ltd Project Completion Certificates" loading="lazy" decoding="async" className="w-full rounded-lg" />
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
              <Building2 className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-3">Committed to Excellence & Compliance</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our certifications and authorizations from internationally recognized manufacturers demonstrate our commitment to delivering world-class MEP and elevator solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">Join our growing list of satisfied clients. Contact us today for a consultation.</p>
          <a href="/contact" className="btn-primary inline-flex items-center gap-2">Get in Touch</a>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
