import Layout from "@/components/layout/Layout";
import LogoMarquee from "@/components/partners/LogoMarquee";
import PartnershipValues from "@/components/partners/PartnershipValues";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Partners = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 tracking-tight leading-tight">
            Strategic Partnerships That Power
            <br />
            <span className="text-mep-orange">Engineering Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our work is trusted by leading institutions, financial organizations, developers, 
            and infrastructure stakeholders across Rwanda and the East African region.
          </p>
        </div>
      </section>

      {/* Logo Marquee */}
      <LogoMarquee />

      {/* Trust Statement Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8 tracking-tight leading-tight">
              Trusted by Institutions That Demand
              <br />
              Precision, Safety, and Reliability
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MEP Erictric Technology Ltd operates in environments where engineering accuracy, 
              regulatory compliance, and operational reliability are non-negotiable. Our partners 
              and clients rely on our technical expertise to deliver systems that perform safely 
              and consistently over their full lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Values */}
      <PartnershipValues />

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6 tracking-tight">
            Partner With an Engineering Team
            <br />
            Built for Complex Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            From elevators and vertical transportation systems to full MEP and electrical 
            infrastructure, we support projects that require precision, accountability, 
            and long-term performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-mep-orange hover:bg-mep-orange-hover text-white font-semibold px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Become a Strategic Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg"
            >
              <Link to="/portfolio">
                Explore Our Project Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
