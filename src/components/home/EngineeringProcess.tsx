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
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="section-divider-left" />
            <span className="text-mep-orange font-semibold uppercase tracking-widest text-xs">
              Our Engineering Approach
            </span>
            <span className="section-divider-left" />
          </div>
          <h2 className="section-heading text-foreground mb-4">
            How We Execute Projects
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            A disciplined, systematic approach ensures every project meets the highest
            standards of safety, quality, and efficiency.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-mep-orange/30" />

          {steps.map((step, index) => (
            <div key={index} className="relative group text-center">
              {/* Number circle */}
              <div className="w-24 h-24 mx-auto rounded-2xl bg-[#F5F5F5] border-2 border-transparent group-hover:border-mep-orange/30 flex flex-col items-center justify-center mb-6 transition-all duration-500 group-hover:shadow-lg group-hover:-translate-y-1 relative z-10">
                <span className="text-mep-orange font-black text-2xl">{step.number}</span>
                <step.icon className="h-5 w-5 text-foreground/40 mt-1" />
              </div>

              <h3 className="font-bold text-lg text-foreground mb-3">
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
