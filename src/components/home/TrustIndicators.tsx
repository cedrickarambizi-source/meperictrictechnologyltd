import ScrollReveal from "@/components/motion/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Play, ShieldCheck, Award, Zap } from "lucide-react";

const TrustIndicators = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-[#eaf1fb] via-white to-[#dbe7f7]">
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 rounded-full bg-mep-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-[#ed6307]/10 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Video — Left */}
          <ScrollReveal className="lg:col-span-6">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-full h-full rounded-2xl border-2 border-mep-blue/30 hidden md:block" />
              <div className="absolute -bottom-5 -right-5 w-32 h-32 rounded-2xl bg-[#ed6307]/20 blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-mep-blue/10 aspect-video bg-black">
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
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm text-mep-blue text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#ed6307] animate-pulse" />
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
                  <div className="w-11 h-11 rounded-full bg-white/95 flex items-center justify-center shadow-xl">
                    <Play className="h-5 w-5 text-mep-blue fill-mep-blue ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="hidden md:flex absolute -bottom-16 -left-12 bg-white rounded-xl shadow-2xl px-5 py-4 items-center gap-3 ring-1 ring-mep-blue/10">
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
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-mep-blue/10 text-mep-blue text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ed6307]" />
                About MEP Erictric
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-mep-blue leading-[1.1]">
                Building a Sustainable Future with{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Precision</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-[#ed6307]/30 -z-0" />
                </span>{" "}
                in MEP Solutions
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                MEP Erictric Technology was established to transform MEP engineering
                in Rwanda through seamless integration, sustainability, and
                cost-effective solutions — founded by experienced engineers
                passionate about innovation and efficiency.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm ring-1 ring-mep-blue/10">
                  <ShieldCheck className="h-5 w-5 text-mep-blue flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">Safety-First Engineering</span>
                </div>
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm ring-1 ring-mep-blue/10">
                  <Zap className="h-5 w-5 text-[#ed6307] flex-shrink-0" />
                  <span className="text-sm font-semibold text-gray-800">Sustainable Solutions</span>
                </div>
              </div>
              <div className="bg-mep-blue/5 border-l-4 border-mep-blue rounded-r-lg p-5">
                <h4 className="text-mep-blue font-bold mb-2">Our Mission</h4>
                <p className="text-gray-700 italic leading-relaxed">
                  To provide high-quality, efficient, and sustainable MEP solutions,
                  ensuring seamless integration, cost-effectiveness, and long-term
                  client satisfaction.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/about-us"
                  className="inline-flex items-center gap-2 bg-mep-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-mep-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-mep-blue font-semibold px-2 py-3 border-b-2 border-transparent hover:border-mep-blue transition-all"
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
