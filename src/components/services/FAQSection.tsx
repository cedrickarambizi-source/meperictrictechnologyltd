import ScrollReveal from "@/components/motion/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is MEP engineering?",
    answer:
      "MEP stands for Mechanical, Electrical, and Plumbing engineering. It encompasses the design, installation, and maintenance of building systems including HVAC, electrical power distribution, lighting, plumbing, fire protection, and vertical transportation such as elevators. MEP Erictric Technology Ltd provides comprehensive MEP solutions for commercial, residential, and institutional projects across Rwanda and East Africa.",
  },
  {
    question: "Do you install elevators in Rwanda?",
    answer:
      "Yes, MEP Erictric Technology Ltd is a leading elevator installation company in Rwanda. We supply, install, and maintain passenger elevators, freight elevators, hospital elevators, and platform lifts. We partner with internationally recognized manufacturers like FUJIHD to deliver safe, reliable vertical transportation solutions across Kigali and the wider East African region.",
  },
  {
    question: "Do you provide generator installation services?",
    answer:
      "Yes, we provide complete generator supply, installation, and maintenance services. Our electrical engineering team handles generator sizing, installation, automatic transfer switch (ATS) configuration, and ongoing preventive maintenance to ensure uninterrupted power supply for commercial buildings, hospitals, and industrial facilities.",
  },
  {
    question: "Do you offer maintenance services for elevators and electrical systems?",
    answer:
      "Absolutely. We offer comprehensive maintenance programs including 24/7 emergency support, preventive maintenance contracts (monthly and annual), elevator modernization, electrical system upgrades, and performance optimization. Our response time for emergency calls is under 2 hours, and we service all major elevator brands.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              Common Questions
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our MEP engineering and elevator installation services in Rwanda.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQSection;
