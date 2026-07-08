import { useEffect, useRef } from "react";
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
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const forcePlay = () => {
      video.muted = true;
      video.defaultMuted = true;
      video.autoplay = true;
      video.loop = true;
      video.playsInline = true;
      video.setAttribute("muted", "");
      video.setAttribute("autoplay", "");
      video.setAttribute("loop", "");
      video.setAttribute("playsinline", "true");
      video.setAttribute("webkit-playsinline", "true");
      video.setAttribute("preload", "auto");
      video.play().catch(() => {});
    };

    const resumePlayback = () => {
      if (video.ended) video.currentTime = 0;
      if (video.paused || video.readyState >= 2) forcePlay();
    };

    forcePlay();
    video.addEventListener("loadedmetadata", forcePlay);
    video.addEventListener("loadeddata", forcePlay);
    video.addEventListener("canplay", forcePlay);
    video.addEventListener("pause", resumePlayback);
    video.addEventListener("ended", resumePlayback);
    document.addEventListener("visibilitychange", resumePlayback);
    document.addEventListener("touchstart", resumePlayback, { passive: true });
    document.addEventListener("touchend", resumePlayback, { passive: true });
    document.addEventListener("click", resumePlayback, { passive: true });
    document.addEventListener("scroll", resumePlayback, { passive: true });
    window.addEventListener("focus", resumePlayback);
    window.addEventListener("pageshow", resumePlayback);

    return () => {
      video.removeEventListener("loadedmetadata", forcePlay);
      video.removeEventListener("loadeddata", forcePlay);
      video.removeEventListener("canplay", forcePlay);
      video.removeEventListener("pause", resumePlayback);
      video.removeEventListener("ended", resumePlayback);
      document.removeEventListener("visibilitychange", resumePlayback);
      document.removeEventListener("touchstart", resumePlayback);
      document.removeEventListener("touchend", resumePlayback);
      document.removeEventListener("click", resumePlayback);
      document.removeEventListener("scroll", resumePlayback);
      window.removeEventListener("focus", resumePlayback);
      window.removeEventListener("pageshow", resumePlayback);
    };
  }, []);

  return (
    <Layout>
      <SEOHead
        title="MEP Erictric Technology | MEP & Elevator Solutions Rwanda"
        description="Leading MEP contractor in Kigali specializing in elevator installation, electrical systems, generator supply, and mechanical engineering services."
        canonical="/"
      />
      <StructuredData id="org-schema" data={organizationSchema} />
      <StructuredData id="local-business-schema" data={localBusinessSchema} />
      <StructuredData id="site-nav-schema" data={siteNavigationSchema} />

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
        className="fixed inset-0 h-full w-full object-cover z-0"
        src="/videos/hero-bg.mp4"
      />
      <div className="fixed inset-0 bg-black/30 z-0" />

      <div className="relative z-10">
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
      </div>
    </Layout>
  );
};

export default Index;
