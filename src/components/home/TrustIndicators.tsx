import ScrollReveal from "@/components/motion/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Play, ShieldCheck, Award, Zap } from "lucide-react";

const TrustIndicators = () => {
  return (
    <section className="py-[75px] relative overflow-hidden bg-background">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-[75px] items-center">
          {/* Video — Left */}
          <ScrollReveal className="lg:col-span-6">
            <div className="relative">
               <div className="relative rounded-[15px] overflow-hidden shadow-none ring-1 ring-border aspect-video bg-foreground">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/videos/hero-bg.mp4"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent" />
                 <div className="absolute top-4 right-4 flex items-center gap-2 bg-background/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                   <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
                  LIVE TOUR
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                  <div>
                    <div className="text-white/70 text-[10px] md:text-xs font-semibold tracking-widest uppercase">
                      Welcome to
                    </div>
                    <div className="text-white text-sm md:text-lg font-bold leading-tight">
                      MEP Erictric Technology
                    </div>
                  </div>
                   <div className="w-11 h-11 rounded-full bg-background/95 flex items-center justify-center">
                    <Play className="h-5 w-5 text-mep-blue fill-mep-blue ml-0.5" />
                  </div>
                </div>
              </div>
               <div className="hidden md:flex absolute -bottom-16 -left-12 bg-background rounded-[15px] px-[19px] py-4 items-center gap-[11px] ring-1 ring-border">
                <div className="w-11 h-11 rounded-lg bg-mep-blue/10 flex items-center justify-center">
                  <Award className="h-5 w-5 text-mep-blue" />
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-mep-blue leading-none">10+</div>
                  <div className="text-[11px] text-gray-600 font-semibold uppercase tracking-wide">Years Experience</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text — Right */}
          <ScrollReveal className="lg:col-span-6">
             <div className="space-y-[19px]">
               <div className="inline-flex items-center gap-2 text-muted-foreground text-xs font-bold uppercase font-mono">
                About MEP Erictric
              </div>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-foreground">
                Building a Sustainable Future with{" "}
                 <span>Precision</span>{" "}
                in MEP Solutions
              </h2>
               <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                MEP Erictric Technology was established to transform MEP engineering
                in Rwanda through seamless integration, sustainability, and
                cost-effective solutions — founded by experienced engineers
                passionate about innovation and efficiency.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                 <div className="flex items-center gap-[11px] bg-muted rounded-[15px] p-[19px]">
                  <ShieldCheck className="h-5 w-5 text-mep-blue flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">Safety-First Engineering</span>
                </div>
                 <div className="flex items-center gap-[11px] bg-muted rounded-[15px] p-[19px]">
                  <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">Sustainable Solutions</span>
                </div>
              </div>
               <div className="bg-muted rounded-[15px] p-[19px]">
                <h4 className="text-mep-blue font-bold mb-2">Our Mission</h4>
                 <p className="text-muted-foreground leading-relaxed">
                  To provide high-quality, efficient, and sustainable MEP solutions,
                  ensuring seamless integration, cost-effectiveness, and long-term
                  client satisfaction.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/about-us"
                   className="pill-primary"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/projects"
                   className="inline-flex items-center gap-2 text-foreground font-bold px-2 py-3 border-b border-border hover:border-foreground transition-colors"
                >
                  View Our Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
