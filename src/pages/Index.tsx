import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import StatsTickerBar from "@/components/home/StatsTickerBar";
import TrustIndicators from "@/components/home/TrustIndicators";
import EngineeringProcess from "@/components/home/EngineeringProcess";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsShowcase from "@/components/home/ProjectsShowcase";
import SafetyCompliance from "@/components/home/SafetyCompliance";
import LeadershipMessage from "@/components/home/LeadershipMessage";
import PartnersSection from "@/components/home/PartnersSection";
import CTASection from "@/components/home/CTASection";
import SEOHead from "@/components/seo/SEOHead";
import StructuredData, {
  organizationSchema,
  localBusinessSchema,
  siteNavigationSchema,
} from "@/components/seo/StructuredData";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="MEP Erictric Technology Ltd | Professional MEP & Elevator Solutions in Rwanda"
        description="Leading MEP contractor in Kigali specializing in elevator installation, electrical systems, generator supply, and mechanical engineering services."
        canonical="/"
      />
      <StructuredData id="org-schema" data={organizationSchema} />
      <StructuredData id="local-business-schema" data={localBusinessSchema} />
      <StructuredData id="site-nav-schema" data={siteNavigationSchema} />
      <HeroSlider />
      <StatsTickerBar />
      <TrustIndicators />
      <EngineeringProcess />
      <ServicesSection />
      <ProjectsShowcase />
      <SafetyCompliance />
      <LeadershipMessage />
      <PartnersSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
