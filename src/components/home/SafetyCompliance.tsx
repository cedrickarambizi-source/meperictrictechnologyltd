import { Shield, Award, FileCheck, Users } from "lucide-react";

const commitments = [
  {
    icon: Shield,
    title: "Safety Standards",
    description: "All installations comply with international safety regulations and local building codes.",
  },
  {
    icon: Award,
    title: "Certified Professionals",
    description: "Our engineers hold certifications from recognized industry bodies and manufacturers.",
  },
  {
    icon: FileCheck,
    title: "Quality Documentation",
    description: "Complete technical documentation, test reports, and compliance certificates for every project.",
  },
  {
    icon: Users,
    title: "Trained Personnel",
    description: "Continuous training programs ensure our team stays current with industry best practices.",
  },
];

const SafetyCompliance = () => {
  return (
    <section className="py-[75px] text-white bg-[hsl(var(--carbon))]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-[11px]">
            <span className="eyebrow block text-white/60">Safety & Quality</span>
            <h2 className="section-heading">
              Committed to Safety, Precision, and Reliability
            </h2>
            <p className="text-white/60 text-lg leading-relaxed pt-[11px]">
              Engineering excellence requires unwavering commitment to safety standards
              and quality procedures. Every system we install is designed, tested, and
              documented to meet the highest industry standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-[11px]">
            {commitments.map((item, index) => (
              <div
                key={index}
                className="rounded-[15px] bg-white/5 p-[19px] shadow-none transition-all duration-500 hover:-translate-y-1 hover:bg-white/10"
              >
                <item.icon className="h-7 w-7 text-white/70 mb-[11px]" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyCompliance;
