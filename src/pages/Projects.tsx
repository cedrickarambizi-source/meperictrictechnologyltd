import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/projects/ProjectCard";
import { oldProjects, newProjects } from "@/data/projects";
import { Award, Shield, FileCheck, Building2, ExternalLink } from "lucide-react";
import authCertificatesImg from "@/assets/certificates/authorization-certificates.png";
import completionCertificatesImg from "@/assets/certificates/completion-certificates.png";

const certifications = [
  {
    name: "RDB Company Registration",
    authority: "Rwanda Development Board",
    year: "2016",
    description: "Official domestic company registration certificate",
  },
  {
    name: "FUJIHD Authorization",
    authority: "FUJIHD Elevator Co., Ltd",
    year: "2024",
    description: "Authorized agent for elevator supply and service in Rwanda",
  },
  {
    name: "Daikin Distributor Authorization",
    authority: "Daikin Industries Ltd",
    year: "2024",
    description: "Authorized distributor for air conditioners and refrigeration systems",
  },
  {
    name: "SafeEagle Authorization",
    authority: "Shenzhen Jinjian Era Technology Co., Ltd",
    year: "2023",
    description: "Overseas distributor for X-ray baggage scanners and security equipment",
  },
  {
    name: "TSTY Electric Authorization",
    authority: "TSTY Electric Co., Ltd",
    year: "2024",
    description: "Authorized agent for transformers and switchgear in Rwanda",
  },
  {
    name: "MEP Erictric Cables Authorization",
    authority: "Wuxi Jiangnan Cable Co.",
    year: "2025",
    description: "Usage rights for cable production and customization in China",
  },
];

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

      {/* Certifications & Compliance Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-mep-orange font-semibold uppercase tracking-wider text-sm">
              Certifications & Compliance
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Our Credentials & Authorizations
            </h2>
            <p className="text-muted-foreground">
              We maintain the highest standards of compliance and hold authorizations from 
              leading international manufacturers, ensuring quality and reliability in every project.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
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
              </div>
            ))}
          </div>

          {/* Certificate Images */}
          <div className="space-y-8">
            <div className="bg-card border rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-xl">Registration & Authorization Certificates</h3>
              </div>
              <img
                src={authCertificatesImg}
                alt="MEP Erictric Technology Ltd Authorization Certificates - RDB Registration, FUJIHD, Daikin, SafeEagle, TSTY"
                className="w-full rounded-lg"
              />
            </div>

            <div className="bg-card border rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-xl">Project Completion Certificates</h3>
              </div>
              <img
                src={completionCertificatesImg}
                alt="MEP Erictric Technology Ltd Project Completion Certificates"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Compliance Statement */}
          <div className="mt-12 bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
            <Building2 className="h-10 w-10 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-3">Committed to Excellence & Compliance</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our certifications and authorizations from internationally recognized manufacturers 
              demonstrate our commitment to delivering world-class MEP and elevator solutions. 
              We adhere to the highest safety standards and industry best practices.
            </p>
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
