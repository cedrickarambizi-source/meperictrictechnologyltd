import { Quote } from "lucide-react";

const LeadershipMessage = () => {
  return (
    <section className="py-[75px] bg-[hsl(var(--mist))]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="h-10 w-10 text-foreground/15 mx-auto mb-[19px]" />
          <blockquote className="text-xl md:text-2xl lg:text-3xl text-foreground font-normal leading-[1.25] tracking-[-0.016em] mb-[19px]">
            "Our responsibility extends beyond installation. We build infrastructure
            that serves communities for decades. Every project reflects our commitment
            to safety, reliability, and long-term value."
          </blockquote>
          <div className="flex items-center justify-center gap-[11px]">
            <div className="w-8 h-px bg-foreground/20" />
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
