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
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal className="text-center mb-14">
          <span className="text-mep-orange font-semibold uppercase tracking-widest text-sm">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-3 mb-4">
            Trusted by Rwanda's Leading Organizations
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Our track record speaks for itself — delivering world-class engineering solutions 
            for government, healthcare, commercial, and industrial clients.
          </p>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center p-6 rounded-xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
            >
              <stat.icon className="h-7 w-7 text-mep-orange mx-auto mb-3" />
              <AnimatedCounter
                end={stat.number}
                suffix={stat.suffix}
                duration={2000}
                className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1"
              />
              <p className="text-primary-foreground/70 text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};

export default TrustIndicators;
