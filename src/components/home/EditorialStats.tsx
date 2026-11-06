import AnimatedCounter from "./AnimatedCounter";
import ScrollReveal from "@/components/motion/ScrollReveal";

const stats = [
  { number: 26, suffix: "+", label: "Projects Completed", note: "Commercial, residential, government and industrial buildings" },
  { number: 10, suffix: "+", label: "Years of Operation", note: "Registered with the Rwanda Development Board in 2016" },
  { number: 3, suffix: "+", label: "Government Institutions", note: "Public-sector clients served across Rwanda" },
  { number: 100, suffix: "+", label: "Satisfied Clients", note: "Installation and maintenance relationships" },
];

const EditorialStats = () => (
  <section className="bg-[hsl(var(--carbon))] py-[75px] border-t border-white/5">
    <div className="container mx-auto px-6 lg:px-12">
      <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow text-white/50 mb-3">01 — By the numbers</p>
            <h2 className="text-3xl md:text-5xl font-normal tracking-[-0.025em] text-white max-w-xl leading-[1.05]">
              A decade of engineered buildings in Rwanda.
            </h2>
          </div>
          <p className="text-white/50 max-w-sm text-sm leading-relaxed">
            Measured output, not marketing claims. Every figure reflects delivered and commissioned work.
          </p>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 0.08}>
            <div className="py-8 pr-6 lg:border-r border-white/10 last:border-r-0 h-full">
              <span className="mono text-[11px] text-white/40">0{i + 1}</span>
              <AnimatedCounter
                end={s.number}
                suffix={s.suffix}
                duration={2200}
                className="text-[64px] md:text-[88px] leading-none font-normal tracking-[-0.04em] text-white mt-4 tabular-nums"
              />
              <p className="text-white text-sm font-bold uppercase tracking-wide mt-4">{s.label}</p>
              <p className="text-white/50 text-sm mt-2 leading-relaxed">{s.note}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default EditorialStats;
