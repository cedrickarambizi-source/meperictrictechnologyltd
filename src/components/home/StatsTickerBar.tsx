import AnimatedCounter from "./AnimatedCounter";
import { Briefcase, Clock, Landmark, Users } from "lucide-react";

const stats = [
  { number: 26, suffix: "+", label: "Projects Completed", icon: Briefcase },
  { number: 10, suffix: "+", label: "Years Experience", icon: Clock },
  { number: 3, suffix: "+", label: "Government Institutions Served", icon: Landmark },
  { number: 100, suffix: "+", label: "Satisfied Clients", icon: Users },
];

const StatsTickerBar = () => {
  return (
    <section className="relative bg-[hsl(var(--carbon))]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex items-center gap-[11px] py-[19px] px-6 ${
                index < stats.length - 1 ? "md:border-r border-white/5" : ""
              }`}
            >
              <stat.icon className="h-5 w-5 text-white/50 flex-shrink-0" />
              <div>
                <AnimatedCounter
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2000}
                  className="text-2xl md:text-3xl font-normal tracking-[-0.02em] text-white"
                />
                <p className="text-white/50 text-2xs font-bold uppercase font-mono mt-1">
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
