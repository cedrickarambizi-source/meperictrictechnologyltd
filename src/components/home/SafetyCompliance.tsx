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
     <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
       <div className="container mx-auto px-4">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
           {/* Content */}
           <div className="space-y-6">
             <div className="flex items-center gap-3">
               <span className="w-12 h-0.5 bg-mep-orange"></span>
               <span className="text-mep-orange font-semibold uppercase tracking-wider text-sm">
                 Safety & Quality
               </span>
             </div>
             
             <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">
               Committed to Safety, Precision, and Reliability
             </h2>
             
             <p className="text-primary-foreground/80 text-lg leading-relaxed">
               Engineering excellence requires unwavering commitment to safety standards 
               and quality procedures. Every system we install is designed, tested, and 
               documented to meet the highest industry standards.
             </p>
           </div>
 
           {/* Commitment Grid */}
           <div className="grid sm:grid-cols-2 gap-4">
             {commitments.map((item, index) => (
               <div
                 key={index}
                 className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-5 transition-all duration-300 hover:bg-white/15"
               >
                 <item.icon className="h-8 w-8 text-mep-orange mb-3" />
                 <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                 <p className="text-primary-foreground/70 text-sm leading-relaxed">
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