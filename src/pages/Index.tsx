import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsShowcase from "@/components/home/ProjectsShowcase";
import EngineeringProcess from "@/components/home/EngineeringProcess";
import SafetyCompliance from "@/components/home/SafetyCompliance";
import TrustIndicators from "@/components/home/TrustIndicators";
import LeadershipMessage from "@/components/home/LeadershipMessage";
import PartnersSection from "@/components/home/PartnersSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <AboutSection />
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
