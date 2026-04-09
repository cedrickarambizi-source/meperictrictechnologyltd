import { motion } from "framer-motion";
import ScrollReveal from "@/components/motion/ScrollReveal";
import StaggerChildren, { staggerItem } from "@/components/motion/StaggerChildren";
import AnimatedCounter from "./AnimatedCounter";
import { Shield, Award, Users, Building2, Clock, Globe } from "lucide-react";

const stats = [
  { number: 10, suffix: "+", label: "Years of Excellence", icon: Clock },
  { number: 60, suffix: "+", label: "Projects Completed", icon: Building2 },
  { number: 20, suffix: "+", label: "Expert Engineers", icon: Users },
  { number: 15, suffix: "+", label: "Certifications", icon: Award },
  { number: 6, suffix: "+", label: "International Partners", icon: Globe },
  { number: 24, suffix: "/7", label: "Emergency Support", icon: Shield },
];

const TrustIndicators = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-[#6c6f67]">
      {/* Subtle background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mep-orange/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/3 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-mep-orange/15 border border-mep-orange/30 rounded-full px-5 py-2 mb-6">
            <span className="text-mep-orange font-semibold uppercase tracking-widest text-xs">
              Why Choose Us
            </span>
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-3 mb-5">
            Trusted by Rwanda's Leading Organizations
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Our track record speaks for itself — delivering world-class engineering solutions
            for government, healthcare, commercial, and industrial clients.
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className={`text-center p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-1 cursor-default ${
                index === 2
                  ? "bg-white/10 border-mep-orange/30 orange-glow"
                  : "bg-white/5 border-white/10 hover:border-mep-orange/20 hover:bg-white/8"
              }`}
            >
              <stat.icon className="h-7 w-7 text-mep-orange mx-auto mb-4" />
              <AnimatedCounter
                end={stat.number}
                suffix={stat.suffix}
                duration={2000}
                className="text-3xl font-black text-white mb-1 md:text-2xl"
              />
              <p className="text-white/50 text-xs font-medium tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default TrustIndicators;
