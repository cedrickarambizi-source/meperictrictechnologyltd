import Layout from "@/components/layout/Layout";
import PartnershipValues from "@/components/partners/PartnershipValues";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEOHead from "@/components/seo/SEOHead";
import StructuredData, { buildBreadcrumbSchema } from "@/components/seo/StructuredData";
import { ArrowRight } from "lucide-react";

// Import partner logos
import eaglePartner from "@/assets/partners/eagle-partner.png";
import fujihd from "@/assets/partners/fujihd-logo.png";
import tsty from "@/assets/partners/tsty-logo.png";
import equity from "@/assets/partners/equity-logo.png";
import ncba from "@/assets/partners/ncba-logo.png";
import partner6 from "@/assets/partners/partner-6.jpg";
import bahoHospital from "@/assets/partners/baho-hospital-logo.jpg";
import sofaluxKap from "@/assets/partners/sofalux-kap-logo.jpg";
import rwandaMfa from "@/assets/partners/rwanda-mfa-logo.jpg";
import rwandaCoat from "@/assets/partners/rwanda-coat-logo.png";

const partners = [
  { name: "Eagle Partner", logo: eaglePartner },
  { name: "FUJIHD - Hengfu Group", logo: fujihd },
  { name: "TSTY", logo: tsty },
  { name: "Equity", logo: equity },
  { name: "NCBA", logo: ncba },
  { name: "Partner", logo: partner6 },
  { name: "Baho International Hospital", logo: bahoHospital },
  { name: "Sofalux Ltd - KAP", logo: sofaluxKap },
  { name: "Ministry of Foreign Affairs", logo: rwandaMfa },
  { name: "Government of Rwanda", logo: rwandaCoat },
];

const Partners = () => {
  return (
    <Layout>
      <SEOHead
        title="Partners & Clients | MEP Erictric Technology Ltd"
        description="Trusted partners and clients of MEP Erictric Technology Ltd across Rwanda and East Africa."
        canonical="/partners"
      />
      <StructuredData
        id="breadcrumb-partners"
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Partners & Clients", path: "/partners" },
        ])}
      />
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6 tracking-tight leading-tight">
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

      {/* Logo Grid Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4 tracking-tight">
              Our Partners & Clients
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading organizations across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-card rounded-xl border border-border/50 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer h-32"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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
