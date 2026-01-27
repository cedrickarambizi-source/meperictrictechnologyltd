import Layout from "@/components/layout/Layout";
import HeroSlider from "@/components/home/HeroSlider";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
