import Layout from "@/components/layout/Layout";
import { CheckCircle, Target, Eye, Award, MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import StructuredData, { buildBreadcrumbSchema } from "@/components/seo/StructuredData";

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About MEP Erictric | Engineering Company in Kigali"
        description="Trusted engineering contractor delivering high-quality MEP and elevator solutions across Rwanda."
        canonical="/about"
      />
      <StructuredData
        id="breadcrumb-about"
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
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

      {/* Location & Operations Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-mep-orange font-semibold uppercase tracking-wider text-sm">
              Our Location & Operations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Strategically Located in Kigali
            </h2>
            <p className="text-muted-foreground">
              Based in the heart of Rwanda's capital, we are positioned to serve clients 
              across the country and the broader East African region with efficiency and reliability.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Map Embed */}
            <div className="bg-card rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4983!2d30.1072!3d-1.9489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6f2a0e31b0d%3A0x7c0d7e6d8b9b9c9d!2sRemera%2C%20Kigali!5e0!3m2!1sen!2srw!4v1706180000000!5m2!1sen!2srw"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="MEP Erictric Technology Ltd Location"
              />
              <a
                href="https://maps.app.goo.gl/W22hCAhc31BeCAsS9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Open in Google Maps
              </a>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 shadow-sm border">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-mep-orange" />
                  Headquarters
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-lg">MEP Erictric Technology Ltd</p>
                    <p className="text-muted-foreground">Remera – Gisimenti</p>
                    <p className="text-muted-foreground">Ikaze House F2-22</p>
                    <p className="text-muted-foreground">Kigali, Rwanda</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-sm border">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Phone className="h-5 w-5 text-mep-orange" />
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href="tel:+250788645567" className="hover:text-primary transition-colors">
                      +250 788 645 567
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href="tel:+250781175264" className="hover:text-primary transition-colors">
                      +250 781 175 264
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href="mailto:meperictric40@gmail.com" className="hover:text-primary transition-colors">
                      meperictric40@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 shadow-sm border">
                <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-mep-orange" />
                  Our Commitment
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Strategically located in Kigali's Remera district, we maintain close proximity 
                  to major commercial and residential developments. Our central location enables 
                  rapid response times for maintenance calls and efficient project management 
                  across Rwanda and the East African region. We are committed to accessibility, 
                  reliability, and delivering engineering excellence to every client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
