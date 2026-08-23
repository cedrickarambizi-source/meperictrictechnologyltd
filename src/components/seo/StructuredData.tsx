import { useEffect } from "react";

interface StructuredDataProps {
  data: Record<string, unknown> | Record<string, unknown>[];
  id: string;
}

const StructuredData = ({ data, id }: StructuredDataProps) => {
  useEffect(() => {
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(id);
      if (el) el.remove();
    };
  }, [data, id]);

  return null;
};

export default StructuredData;

// Reusable schema builders
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MEP Erictric Technology Ltd",
  url: "https://meperictrictech.com",
  logo: "https://meperictrictech.com/og-image.png",
  description: "Leading MEP contractor in Kigali specializing in elevator installation, electrical systems, and mechanical engineering services.",
  foundingDate: "2016",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Remera – Gisimenti, Ikaze House F2-22",
    addressLocality: "Kigali",
    addressCountry: "RW",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+250788399856",
    contactType: "customer service",
    email: "Hopetechnical1@gmail.com",
    availableLanguage: ["English", "French", "Kinyarwanda"],
  },
  sameAs: [],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  additionalType: "https://schema.org/ElectricalContractor",
  name: "MEP Erictric Technology Ltd",
  url: "https://meperictrictech.com",
  image: "https://meperictrictech.com/og-image.png",
  telephone: "+250788399856",
  email: "Hopetechnical1@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Remera – Gisimenti, Ikaze House F2-22",
    addressLocality: "Kigali",
    addressCountry: "RW",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.9536,
    longitude: 30.0606,
  },
  areaServed: [
    { "@type": "Country", name: "Rwanda" },
    { "@type": "Place", name: "East Africa" },
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "17:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "MEP Engineering Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Elevator Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Electrical Engineering Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mechanical & Plumbing Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CCTV & Security Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Internet & Network Infrastructure" } },
    ],
  },
};

export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: "Main Navigation",
  hasPart: [
    { "@type": "WebPage", name: "Home", url: "https://meperictrictech.com/" },
    { "@type": "WebPage", name: "Projects", url: "https://meperictrictech.com/projects" },
    { "@type": "WebPage", name: "Partners & Clients", url: "https://meperictrictech.com/partners" },
    { "@type": "WebPage", name: "Meet Our Team", url: "https://meperictrictech.com/team" },
    { "@type": "WebPage", name: "Services", url: "https://meperictrictech.com/services" },
    { "@type": "WebPage", name: "About Us", url: "https://meperictrictech.com/about" },
    { "@type": "WebPage", name: "Portfolio", url: "https://meperictrictech.com/portfolio" },
    { "@type": "WebPage", name: "Contact", url: "https://meperictrictech.com/contact" },
  ],
};

export const buildBreadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `https://meperictrictech.com${item.path}`,
  })),
});

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is MEP engineering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MEP stands for Mechanical, Electrical, and Plumbing engineering. It encompasses the design, installation, and maintenance of building systems including HVAC, electrical power distribution, lighting, plumbing, fire protection, and vertical transportation such as elevators. MEP Erictric Technology Ltd provides comprehensive MEP solutions for commercial, residential, and institutional projects across Rwanda and East Africa.",
      },
    },
    {
      "@type": "Question",
      name: "Do you install elevators in Rwanda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, MEP Erictric Technology Ltd is a leading elevator installation company in Rwanda. We supply, install, and maintain passenger elevators, freight elevators, hospital elevators, and platform lifts. We partner with internationally recognized manufacturers like FUJIHD to deliver safe, reliable vertical transportation solutions across Kigali and the wider East African region.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide generator installation services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide complete generator supply, installation, and maintenance services. Our electrical engineering team handles generator sizing, installation, automatic transfer switch (ATS) configuration, and ongoing preventive maintenance to ensure uninterrupted power supply for commercial buildings, hospitals, and industrial facilities.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer maintenance services for elevators and electrical systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We offer comprehensive maintenance programs including 24/7 emergency support, preventive maintenance contracts (monthly and annual), elevator modernization, electrical system upgrades, and performance optimization. Our response time for emergency calls is under 2 hours, and we service all major elevator brands.",
      },
    },
  ],
};
