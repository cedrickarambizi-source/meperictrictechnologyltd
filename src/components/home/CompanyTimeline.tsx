import ScrollReveal from "@/components/motion/ScrollReveal";

const milestones = [
  { year: "2016", title: "Company founded", text: "MEP Erictric Technology Ltd registered with the Rwanda Development Board in Remera – Gisimenti, Kigali." },
  { year: "2023", title: "SafeEagle authorization", text: "Overseas distributor for X-ray baggage scanners and security equipment." },
  { year: "2024", title: "FUJIHD, Daikin & TSTY", text: "Authorized agent for FUJIHD elevators, Daikin air conditioning, and TSTY transformers and switchgear in Rwanda." },
  { year: "2025", title: "MEP Erictric Cables", text: "Usage rights for cable production and customization with Wuxi Jiangnan Cable Co." },
];

const CompanyTimeline = () => (
  <section className="bg-[hsl(var(--mist))] py-[75px]">
    <div className="container mx-auto px-6 lg:px-12">
      <ScrollReveal>
        <p className="eyebrow text-muted-foreground mb-3">03 — Company history</p>
        <h2 className="section-heading max-w-2xl mb-14">From a Kigali engineering firm to an authorized regional partner.</h2>
      </ScrollReveal>
      <ol className="grid md:grid-cols-4 gap-0 border-t border-foreground/20">
        {milestones.map((m, i) => (
          <ScrollReveal key={m.year} delay={i * 0.1}>
            <li className="relative pt-8 pr-8 pb-4">
              <span className="absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full bg-foreground" aria-hidden />
              <p className="text-5xl md:text-6xl font-normal tracking-[-0.04em] text-foreground tabular-nums">{m.year}</p>
              <p className="text-sm font-bold text-foreground mt-5">{m.title}</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{m.text}</p>
            </li>
          </ScrollReveal>
        ))}
      </ol>
    </div>
  </section>
);

export default CompanyTimeline;
