import { ClipboardCheck, Ruler, Wrench, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Site Assessment & Planning",
    description: "Comprehensive site evaluation, requirements analysis, and technical feasibility studies to establish project foundations.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Engineering Design & Approval",
    description: "Detailed engineering specifications, system layouts, and compliance documentation prepared by certified professionals.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Installation & Execution",
    description: "Precision implementation with quality-controlled processes, safety protocols, and continuous project monitoring.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Testing, Handover & Support",
    description: "Rigorous quality assurance, performance testing, regulatory compliance verification, and ongoing support.",
    icon: CheckCircle2,
  },
];

const EngineeringProcess = () => {
  return (
    <section className="py-[75px] bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-[45px]">
          <span className="eyebrow block mb-[11px]">Our Engineering Approach</span>
          <h2 className="section-heading text-foreground mb-[11px]">
            How We Execute Projects
          </h2>
          <p className="section-subheading">
            A disciplined, systematic approach ensures every project meets the highest
            standards of safety, quality, and efficiency.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-[19px] max-w-5xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-border" />

          {steps.map((step, index) => (
            <div key={index} className="relative group text-center">
              {/* Number tile */}
              <div className="w-20 h-20 mx-auto rounded-[15px] bg-[hsl(var(--mist))] flex flex-col items-center justify-center mb-[19px] transition-all duration-500 group-hover:-translate-y-1 relative z-10">
                <span className="text-foreground font-mono font-bold text-lg">{step.number}</span>
                <step.icon className="h-4 w-4 text-foreground/40 mt-1" />
              </div>

              <h3 className="font-bold text-base text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringProcess;
