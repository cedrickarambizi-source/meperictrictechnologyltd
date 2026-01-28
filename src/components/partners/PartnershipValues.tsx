import { Shield, Award, Building2, Wrench } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Engineering Compliance & Safety Standards",
    description: "Rigorous adherence to international safety codes and regulatory requirements across all installations.",
  },
  {
    icon: Award,
    title: "Manufacturer-Certified Installations",
    description: "Factory-trained technicians delivering installations that meet original equipment specifications.",
  },
  {
    icon: Building2,
    title: "Large-Scale Project Delivery Experience",
    description: "Proven track record executing complex MEP infrastructure for institutional and commercial clients.",
  },
  {
    icon: Wrench,
    title: "Long-Term Maintenance & Asset Support",
    description: "Comprehensive lifecycle management ensuring optimal performance and regulatory compliance.",
  },
];

const PartnershipValues = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4 tracking-tight">
            Why Organizations Partner With Us
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Four pillars of engineering excellence that define our partnership value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 
                         hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-mep-orange/20 flex items-center justify-center mb-6
                            group-hover:bg-mep-orange/30 transition-colors duration-300">
                <value.icon className="w-7 h-7 text-mep-orange" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-heading font-semibold text-primary-foreground mb-3 leading-tight">
                {value.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipValues;
