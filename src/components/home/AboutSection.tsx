import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedCounter from "./AnimatedCounter";

const highlights = [
  "Founded in 2016 in Kigali, Rwanda",
  "Leading MEP & Elevator Solutions Provider",
  "Partnership with International Manufacturers",
  "Safety-driven & Innovation-focused",
];

const stats = [
  { number: 10, suffix: "+", label: "Years of Excellence" },
  { number: 4, suffix: "+", label: "Projects Completed" },
  { number: 20, suffix: "+", label: "Expert Engineers" },
  { number: 15, suffix: "+", label: "Professional Certificates" },
];

const AboutSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="section-divider-left" />
                <span className="text-primary font-semibold uppercase tracking-widest text-xs">
                  About Us
                </span>
              </div>
              <h2 className="section-heading text-foreground leading-tight">
                Rwanda's Leading MEP & Elevator Engineering Company
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Founded in 2016, MEP Erictric Technology Ltd is a Rwandan-based engineering
              company located in Remera – Gisimenti, Kigali. The company specializes in
              the supply, installation, and maintenance of elevators and vertical
              transportation systems, alongside comprehensive Mechanical, Electrical,
              and Plumbing (MEP) solutions.
            </p>

            <ul className="space-y-4 pt-2">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-4"
            >
              Learn More About Us →
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[#0D1B4B] text-white p-8 rounded-2xl text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
              >
                <AnimatedCounter
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2000}
                  className="text-3xl md:text-4xl lg:text-5xl font-black mb-3"
                />
                <div className="text-sm opacity-70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
