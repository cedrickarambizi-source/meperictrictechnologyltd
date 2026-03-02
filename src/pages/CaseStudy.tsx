import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { allProjects } from "@/data/projects";
import { ArrowLeft, ArrowRight, CheckCircle, MapPin, Calendar, Building2, User } from "lucide-react";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = allProjects.find(
    (p) => p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") === slug
  );

  if (!project) {
    return (
      <Layout>
        <section className="py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-primary font-semibold hover:underline">← Back to Projects</Link>
        </section>
      </Layout>
    );
  }

  const locationDetail = project.details?.find((d) => d.label.includes("Location"));
  const periodDetail = project.details?.find((d) => d.label.includes("Period"));
  const ownerDetail = project.details?.find((d) => d.label.includes("Owner") && !d.label.includes("Contact"));
  const floorsDetail = project.details?.find((d) => d.label.includes("Floors"));

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover brightness-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="container mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link to="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 text-sm font-medium">
                <ArrowLeft className="h-4 w-4" /> All Projects
              </Link>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.categories.map((cat) => (
                  <span key={cat} className="px-3 py-1 bg-mep-orange text-white text-xs font-semibold rounded-full">{cat}</span>
                ))}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white">{project.title}</h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-mep-orange" /> What We Delivered
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.activities.map((activity, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-mep-orange flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{activity}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div>
              <ScrollReveal delay={0.2}>
                <div className="bg-card border rounded-xl p-6 shadow-sm space-y-5 sticky top-8">
                  <h3 className="font-bold text-lg text-foreground border-b pb-3">Project Details</h3>

                  {locationDetail && (
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div><p className="text-xs text-muted-foreground">Location</p><p className="text-sm font-medium text-foreground">{locationDetail.value}</p></div>
                    </div>
                  )}
                  {periodDetail && (
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div><p className="text-xs text-muted-foreground">Period</p><p className="text-sm font-medium text-foreground">{periodDetail.value}</p></div>
                    </div>
                  )}
                  {ownerDetail && (
                    <div className="flex items-start gap-3">
                      <User className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div><p className="text-xs text-muted-foreground">Client</p><p className="text-sm font-medium text-foreground">{ownerDetail.value}</p></div>
                    </div>
                  )}
                  {floorsDetail && (
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <div><p className="text-xs text-muted-foreground">Scale</p><p className="text-sm font-medium text-foreground">{floorsDetail.value}</p></div>
                    </div>
                  )}

                  <div className="pt-3 border-t">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "completed" ? "bg-primary/10 text-primary" : "bg-mep-orange/10 text-mep-orange"
                    }`}>
                      {project.status === "completed" ? "✓ Completed" : "● Ongoing"}
                    </span>
                  </div>

                  <Link to="/contact" className="btn-primary w-full flex items-center justify-center gap-2 text-sm">
                    Start a Similar Project <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudy;
