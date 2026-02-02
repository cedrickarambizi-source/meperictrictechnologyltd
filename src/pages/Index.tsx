import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsShowcase from "@/components/home/ProjectsShowcase";
import PartnersSection from "@/components/home/PartnersSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <ProjectsShowcase />
      <PartnersSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
