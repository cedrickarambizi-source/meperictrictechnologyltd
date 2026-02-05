 import { Quote } from "lucide-react";
 
 const LeadershipMessage = () => {
   return (
     <section className="py-16 lg:py-20 bg-muted/30">
       <div className="container mx-auto px-4">
         <div className="max-w-4xl mx-auto text-center">
           {/* Quote icon */}
           <Quote className="h-12 w-12 text-mep-orange/30 mx-auto mb-6" />
           
           {/* Message */}
           <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground font-medium leading-relaxed mb-8">
             "Our responsibility extends beyond installation. We build infrastructure 
             that serves communities for decades. Every project reflects our commitment 
             to safety, reliability, and long-term value."
           </blockquote>
           
           {/* Attribution */}
           <div className="flex items-center justify-center gap-4">
             <div className="w-12 h-0.5 bg-mep-orange"></div>
             <div className="text-left">
               <p className="font-bold text-foreground">Engineering Leadership Team</p>
               <p className="text-muted-foreground text-sm">MEP Erictric Technology Ltd</p>
             </div>
           </div>
         </div>
       </div>
     </section>
   );
 };
 
 export default LeadershipMessage;