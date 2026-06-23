import ScrollReveal from "@/components/motion/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const TrustIndicators = () => {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-[#eaf1fb] via-white to-[#dbe7f7]">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-mep-blue uppercase tracking-widest">
            Quick Tour of Our Projects
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Video — Left */}
          <ScrollReveal>
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
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs md:text-sm font-semibold px-3 py-1.5 rounded-md">
                Welcome to MEP Erictric Technology
              </div>
            </div>
          </ScrollReveal>

          {/* Text — Right */}
          <ScrollReveal>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-mep-blue leading-tight">
                Building a Sustainable Future with Precision in MEP Solutions
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                MEP Erictric Technology was established to transform MEP engineering
                in Rwanda through seamless integration, sustainability, and
                cost-effective solutions. Founded by experienced engineers passionate
                about innovation and efficiency.
              </p>

              <div className="bg-mep-blue/5 border-l-4 border-mep-blue rounded-r-lg p-5">
                <h4 className="text-mep-blue font-bold mb-2">Our Mission</h4>
                <p className="text-gray-700 italic leading-relaxed">
                  To provide high-quality, efficient, and sustainable MEP solutions,
                  ensuring seamless integration, cost-effectiveness, and long-term
                  client satisfaction.
                </p>
              </div>

              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 bg-mep-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-mep-blue/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
