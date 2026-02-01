import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/projects/ProjectCard";
import { oldProjects, newProjects } from "@/data/projects";

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

      {/* Legacy Projects Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-mep-orange font-semibold uppercase tracking-wider text-sm">
              Our Legacy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Completed Projects
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

      {/* Recent Projects Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-mep-orange font-semibold uppercase tracking-wider text-sm">
              Recent & Ongoing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Featured Projects
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
