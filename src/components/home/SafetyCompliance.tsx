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
    <section className="py-20 lg:py-28 bg-[#1A1A2E] text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-12 h-0.5 bg-mep-orange rounded-full" />
              <span className="text-mep-orange font-semibold uppercase tracking-widest text-xs">
                Safety & Quality
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              Committed to Safety, Precision, and Reliability
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              Engineering excellence requires unwavering commitment to safety standards
              and quality procedures. Every system we install is designed, tested, and
              documented to meet the highest industry standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {commitments.map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-mep-orange/20"
              >
                <item.icon className="h-8 w-8 text-mep-orange mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
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
