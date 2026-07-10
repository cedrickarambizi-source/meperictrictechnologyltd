import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/seo/SEOHead";
import StructuredData, { buildBreadcrumbSchema } from "@/components/seo/StructuredData";
import ScrollReveal from "@/components/motion/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Award,
  Layers,
  Wrench,
  Settings,
  Package,
  Headphones,
  Download,
  CheckCircle2,
} from "lucide-react";
import fujihdLogo from "@/assets/partners/fujihd-logo.png";
import fujihdCatalog from "@/assets/catalogs/fujihd-catalog.pdf.asset.json";

const whyFujihd = [
  {
    icon: ShieldCheck,
    title: "Reliable & Durable Engineering",
    description:
      "Precision-manufactured drive systems and control units engineered for decades of dependable service.",
  },
  {
    icon: Cpu,
    title: "Modern Elevator Technology",
    description:
      "Gearless traction, VVVF drives, and intelligent control systems delivering smooth, energy-efficient rides.",
  },
  {
    icon: Award,
    title: "Safety-Certified Systems",
    description:
      "Compliant with EN 81 and international safety standards, backed by rigorous factory testing.",
  },
  {
    icon: Layers,
    title: "Wide Range of Elevator Types",
    description:
      "Passenger, freight/cargo, home, hospital, panoramic and machine-room-less (MRL) configurations.",
  },
];

const services = [
  {
    icon: Wrench,
    title: "Elevator Supply & Installation",
    description:
      "Turn-key supply and factory-standard installation of FUJIHD elevator systems for all building types.",
  },
  {
    icon: Settings,
    title: "Maintenance & Servicing",
    description:
      "Scheduled preventive maintenance and 24/7 emergency servicing to keep every unit safe and compliant.",
  },
  {
    icon: Package,
    title: "Spare Parts & Genuine Components",
    description:
      "Original FUJIHD spare parts sourced directly from the manufacturer to preserve system integrity.",
  },
  {
    icon: Headphones,
    title: "Technical Support & Consultation",
    description:
      "Engineering consultation, shaft design review, and lifecycle planning from certified specialists.",
  },
];

const trustPoints = [
  "Quality assurance from factory to final installation",
  "Genuine FUJIHD parts and components",
  "Manufacturer-backed warranty on supplied units",
  "Direct technical support from FUJIHD engineers",
];

const FujihdElevator = () => {
  return (
    <Layout>
      <SEOHead
        title="FUJIHD Elevator — Authorized Partner | MEP Erictric Technology Ltd"
        description="MEP Erictric Technology Ltd is an authorized FUJIHD Elevator partner in Rwanda since 2019, supplying and installing FUJIHD-manufactured passenger, freight, home, hospital and panoramic elevators."
        canonical="/fujihd-elevator"
      />
      <StructuredData
        id="breadcrumb-fujihd"
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FUJIHD Elevator", path: "/fujihd-elevator" },
        ])}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-mep-orange/20 text-mep-orange text-xs font-semibold tracking-widest uppercase mb-6">
                Authorized Partner Since 2019
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight tracking-tight mb-6">
                FUJIHD Elevator —
                <br />
                <span className="text-mep-orange">Authorized Partner</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 font-medium mb-6">
                Trusted Elevator Solutions Since 2019
              </p>
              <p className="text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-xl">
                MEP Erictric Technology Ltd has been an authorized partner of FUJIHD
                Elevator since 2019. The majority of the elevators we supply, install
                and maintain across Rwanda are manufactured by FUJIHD — delivering
                proven engineering, safety and long-term reliability.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="relative aspect-square max-w-md mx-auto bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl flex items-center justify-center p-12">
                <img
                  src={fujihdLogo}
                  alt="FUJIHD Elevator authorized partner logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="aspect-[4/3] rounded-2xl bg-secondary border border-border flex items-center justify-center text-muted-foreground text-sm">
                Elevator project photo placeholder
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground tracking-tight mb-6">
                Our Partnership
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                MEP Erictric Technology Ltd is an officially authorized partner and
                dealer of FUJIHD Elevator in Rwanda. Our partnership has been active
                since 2019, and the majority of elevators installed and maintained by
                our team are FUJIHD-manufactured units.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                This direct manufacturer relationship allows us to deliver certified
                installations, source genuine parts, and provide our clients with the
                full backing of FUJIHD's engineering and support infrastructure.
              </p>
              <ul className="space-y-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-mep-orange flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why FUJIHD */}
      <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground tracking-tight mb-4">
                Why FUJIHD Elevators
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Global-standard elevator engineering trusted for high-traffic
                commercial, residential and institutional buildings.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyFujihd.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div className="group h-full p-8 rounded-xl bg-card border border-border hover:border-mep-orange/40 hover:shadow-lg transition-all duration-300">
                  <div className="w-14 h-14 rounded-lg bg-mep-orange/10 flex items-center justify-center mb-6 group-hover:bg-mep-orange/20 transition-colors">
                    <item.icon className="w-7 h-7 text-mep-orange" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Elevator Services */}
      <section className="py-20 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground tracking-tight mb-4">
                Our Elevator Services
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                End-to-end FUJIHD elevator services — from initial supply through the
                full operational lifecycle of every installed unit.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.1}>
                <div className="flex gap-5 p-8 rounded-xl bg-card border border-border hover:shadow-lg transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-primary" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-foreground tracking-tight mb-4">
                FUJIHD Elevator Catalog
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Explore the complete FUJIHD product range — passenger, freight, home,
                hospital and panoramic elevators — with full technical specifications.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-border bg-card shadow-lg">
              <object
                data={fujihdCatalog.url}
                type="application/pdf"
                className="w-full h-[600px] hidden md:block"
                aria-label="FUJIHD Elevator catalog PDF preview"
              >
                <div className="p-10 text-center text-muted-foreground">
                  PDF preview is not available in this browser.
                </div>
              </object>
              <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-primary text-primary-foreground">
                <div className="text-left">
                  <p className="font-heading font-semibold">FUJIHD Product Catalog</p>
                  <p className="text-sm text-primary-foreground/70">
                    Full technical brochure (PDF)
                  </p>
                </div>
                <a
                  href={fujihdCatalog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-mep-orange hover:bg-mep-orange-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Catalog
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary-foreground tracking-tight mb-6 leading-tight">
              Interested in installing a
              <br />
              <span className="text-mep-orange">FUJIHD elevator?</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Contact our engineering team today for consultation, site assessment
              and a tailored FUJIHD elevator proposal.
            </p>
            <Button
              asChild
              className="bg-mep-orange hover:bg-mep-orange-hover text-white font-semibold px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default FujihdElevator;