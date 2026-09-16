import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-[75px] bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
         <div className="max-w-4xl mx-auto text-center text-foreground">
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-[19px]">
            Ready to Start Your Next Project?
          </h2>
           <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free consultation from our expert engineers today.
          </p>
          <Link
            to="/contact"
             className="pill-primary text-base"
          >
            Contact Us Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
