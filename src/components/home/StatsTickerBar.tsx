import AnimatedCounter from "./AnimatedCounter";
import { Briefcase, Clock, Globe, Users } from "lucide-react";

const stats = [
  { number: 60, suffix: "+", label: "Projects Completed", icon: Briefcase },
  { number: 10, suffix: "+", label: "Years Experience", icon: Clock },
  { number: 5, suffix: "+", label: "Countries Served", icon: Globe },
  { number: 100, suffix: "+", label: "Satisfied Clients", icon: Users },
];

const StatsTickerBar = () => {
  return (
    <section className="relative border-t border-white/5 bg-[#050570]">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-mep-orange" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex items-center gap-4 py-8 px-6 bg-[#070773] ${
                index < stats.length - 1 ? "md:border-r border-white/5" : ""
              }`}
            >
              <stat.icon className="h-6 w-6 text-mep-orange flex-shrink-0" />
              <div>
                <AnimatedCounter
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2000}
                  className="text-3xl md:text-4xl font-black text-white shimmer-text"
                />
                <p className="text-white/40 text-xs font-medium tracking-wide uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsTickerBar;
