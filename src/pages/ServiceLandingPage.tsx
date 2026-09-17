import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/motion/ScrollReveal";
import SEOHead from "@/components/seo/SEOHead";
import StructuredData, { buildBreadcrumbSchema } from "@/components/seo/StructuredData";
import { serviceLandings, ServiceLanding } from "@/data/serviceLandings";

const SITE_URL = "https://meperictrictech.com";

const ServiceLandingPage = ({ service }: { service: ServiceLanding }) => {
  const path = `/services/${service.slug}`;
  const others = serviceLandings.filter((item) => item.slug !== service.slug);

  return (
    <Layout>
      <SEOHead title={service.seoTitle} description={service.seoDescription} canonical={path} />

      <StructuredData
        id={`breadcrumb-${service.slug}`}
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.navLabel, path },
        ])}
      />

      <StructuredData
        id={`service-schema-${service.slug}`}
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.h1,
          serviceType: service.serviceType,
          description: service.seoDescription,
          url: `${SITE_URL}${path}`,
          provider: {
            "@type": "Organization",
            name: "MEP Erictric Technology Ltd",
            url: SITE_URL,
            telephone: "+250788645567",
            email: "info@meperictrictech.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Remera – Gisimenti, Ikaze House F2-22",
              addressLocality: "Kigali",
              addressCountry: "RW",
            },
          },
          areaServed: [
            { "@type": "Country", name: "Rwanda" },
            { "@type": "Place", name: "East Africa" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${service.navLabel} services`,
            itemListElement: service.offerings.map((offering) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: offering.title,
                description: offering.description,
              },
            })),
          },
        }}
      />

      {/* Hero */}
      <section className="bg-[hsl(var(--carbon))] text-white py-[75px]">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <nav aria-label="Breadcrumb" className="mb-[11px] text-sm text-white/60">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <span className="mx-2">/</span>
              <span aria-current="page" className="text-white/90">{service.navLabel}</span>
            </nav>
            <span className="eyebrow block text-white/60 mb-[11px]">{service.hero}</span>
            <h1 className="section-heading max-w-3xl">{service.h1}</h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mt-[19px]">
              {service.intro}
            </p>
            <Link to="/contact" className="pill-primary mt-[19px]">
              Talk to our engineers <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Offerings + image */}
      <section className="py-[75px] bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div className="rounded-[15px] overflow-hidden">
            <img
              src={service.image}
              alt={service.imageAlt}
              loading="lazy"
              decoding="async"
              className="w-full h-80 lg:h-[420px] object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl text-foreground mb-[19px]">What we deliver</h2>
            <div className="grid sm:grid-cols-2 gap-[11px]">
              {service.offerings.map((offering) => (
                <div key={offering.title} className="rounded-[15px] bg-[hsl(var(--mist))] p-[19px]">
                  <h3 className="font-bold text-base text-foreground mb-2">{offering.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{offering.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specs + process */}
      <section className="py-[75px] bg-[hsl(var(--mist))]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl text-foreground mb-[19px]">Technical specifications</h2>
            <dl className="rounded-[15px] bg-background p-[19px]">
              {service.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4 border-b border-border/60 py-[11px] last:border-0">
                  <dt className="text-muted-foreground text-sm">{spec.label}</dt>
                  <dd className="font-bold text-sm text-foreground text-right">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl text-foreground mb-[19px]">How we execute</h2>
            <ol className="space-y-[11px]">
              {service.process.map((step, index) => (
                <li key={step} className="flex items-start gap-[11px] rounded-[15px] bg-background p-[19px]">
                  <span className="font-mono font-bold text-sm text-foreground/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[75px] bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-heading text-foreground mb-[19px]">Common questions</h2>
          <div className="space-y-[11px]">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="rounded-[15px] bg-[hsl(var(--mist))] p-[19px]">
                <h3 className="font-bold text-base text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-[45px] border-t border-border pt-[19px]">
            <h2 className="text-xl text-foreground mb-[11px]">Other services</h2>
            <ul className="flex flex-wrap gap-[11px]">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/services/${item.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--mist))] px-5 py-2 text-sm font-bold text-foreground hover:bg-secondary transition-colors"
                  >
                    <CheckCircle className="h-4 w-4 text-foreground/40" />
                    {item.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--mist))] px-5 py-2 text-sm font-bold text-foreground hover:bg-secondary transition-colors"
                >
                  All services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceLandingPage;
