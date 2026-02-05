 import { ClipboardCheck, Ruler, Wrench, CheckCircle2, Headphones } from "lucide-react";
 
 const steps = [
   {
     number: "01",
     title: "Assessment & Planning",
     description: "Comprehensive site evaluation, requirements analysis, and technical feasibility studies to establish project foundations.",
     icon: ClipboardCheck,
   },
   {
     number: "02",
     title: "Technical Design",
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
     title: "Testing & Compliance",
     description: "Rigorous quality assurance, performance testing, and regulatory compliance verification before handover.",
     icon: CheckCircle2,
   },
   {
     number: "05",
     title: "Handover & Support",
     description: "Complete documentation delivery, operator training, and ongoing maintenance support for long-term reliability.",
     icon: Headphones,
   },
 ];
 
 const EngineeringProcess = () => {
   return (
     <section className="py-20 lg:py-28 bg-background">
       <div className="container mx-auto px-4">
         {/* Header */}
         <div className="max-w-3xl mb-16">
           <div className="flex items-center gap-3 mb-4">
             <span className="section-divider-left"></span>
             <span className="text-mep-orange font-semibold uppercase tracking-wider text-sm">
               Our Engineering Approach
             </span>
           </div>
           <h2 className="section-heading mb-4">
             How We Execute Projects
           </h2>
           <p className="text-muted-foreground text-lg leading-relaxed">
             A disciplined, systematic approach ensures every project meets the highest 
             standards of safety, quality, and technical excellence.
           </p>
         </div>
 
         {/* Process Steps - Grid Layout */}
         <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
           {steps.map((step, index) => (
             <div
               key={index}
               className="group relative"
             >
               {/* Connector line - visible on desktop */}
               {index < steps.length - 1 && (
                 <div className="hidden lg:block absolute top-8 left-[calc(50%+24px)] right-0 h-0.5 bg-border" />
               )}
               
               <div className="bg-card border border-border/50 rounded-xl p-6 h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20 relative z-10">
                 {/* Step number with icon */}
                 <div className="flex items-center gap-4 mb-4">
                   <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-110 transition-transform">
                     {step.number}
                   </div>
                   <step.icon className="h-6 w-6 text-mep-orange" />
                 </div>
                 
                 <h3 className="font-bold text-lg text-foreground mb-2">
                   {step.title}
                 </h3>
                 <p className="text-muted-foreground text-sm leading-relaxed">
                   {step.description}
                 </p>
               </div>
             </div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default EngineeringProcess;