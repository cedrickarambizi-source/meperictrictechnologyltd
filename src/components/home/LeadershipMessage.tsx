import { Quote } from "lucide-react";

const LeadershipMessage = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8 lg:text-3xl">
            "Our responsibility extends beyond installation. We build infrastructure
            that serves communities for decades. Every project reflects our commitment
            to safety, reliability, and long-term value."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-0.5 bg-mep-orange rounded-full" />
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
