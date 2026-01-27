import Layout from "@/components/layout/Layout";
import { CheckCircle, Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">About Us</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Learn about our journey, values, and commitment to excellence in MEP 
            and elevator engineering.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading mb-8">Our Story</h2>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                Founded in 2016, MEP Erictric Technology Ltd is a Rwandan-based engineering 
                company located in Remera – Gisimenti, Kigali. The company specializes in 
                the supply, installation, and maintenance of elevators and vertical 
                transportation systems, alongside comprehensive Mechanical, Electrical, 
                and Plumbing (MEP) solutions.
              </p>
              <p>
                With a strong focus on safety, reliability, and innovation, the company 
                has grown into one of the leading elevator and MEP solution providers in 
                Rwanda and the East African region. Through partnerships with internationally 
                recognized elevator manufacturers, the company delivers state-of-the-art 
                solutions for residential, commercial, and industrial buildings.
              </p>
              <p>
                Our team of experienced engineers and technicians are committed to delivering 
                projects on time, within budget, and to the highest quality standards. We 
                take pride in our work and strive to exceed client expectations on every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg text-center card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide world-class MEP and elevator solutions that enhance building 
                functionality, safety, and efficiency for our clients across East Africa.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg text-center card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the leading MEP and vertical transportation solutions provider 
                in East Africa, recognized for excellence, innovation, and reliability.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg text-center card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Safety, integrity, innovation, and customer satisfaction are at the 
                core of everything we do. We never compromise on quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "8+ years of industry experience",
                "Partnership with international manufacturers",
                "Certified and experienced engineers",
                "Comprehensive maintenance programs",
                "24/7 emergency support",
                "Competitive pricing",
                "On-time project delivery",
                "Quality guaranteed",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                  <CheckCircle className="h-6 w-6 text-mep-orange flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
