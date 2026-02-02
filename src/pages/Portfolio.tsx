import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/projects/ProjectCard";
import { oldProjects, newProjects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Explore our flagship projects showcasing our expertise in MEP engineering 
            and elevator solutions across Rwanda.
          </p>
        </div>
      </section>

      {/* Old Projects Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-mep-orange font-semibold uppercase tracking-wider text-sm">
              Our Legacy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Old Projects
            </h2>
            <p className="text-muted-foreground">
              Years of excellence in MEP engineering and elevator installations across Rwanda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {oldProjects.map((project, index) => (
              <ProjectCard key={`old-${index}`} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* New & Recent Projects Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-mep-orange font-semibold uppercase tracking-wider text-sm">
              Recent & Ongoing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              New & Recent Projects
            </h2>
            <p className="text-muted-foreground">
              Our latest projects showcasing comprehensive MEP solutions and modern engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {newProjects.map((project, index) => (
              <ProjectCard key={`new-${index}`} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            className="inline-flex items-center gap-2 bg-mep-orange hover:bg-mep-orange-hover text-white font-semibold px-8 py-4 rounded-md transition-colors"
          >
            Get Started <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
