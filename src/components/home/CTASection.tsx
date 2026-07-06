import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-mep-orange to-[#FF9500] relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-6 leading-tight">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-base md:text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Get a free consultation from our expert engineers today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-foreground font-bold px-10 py-5 rounded-xl hover:bg-white/90 transition-all duration-300 shadow-2xl hover:shadow-3xl text-lg hover:gap-3"
          >
            Contact Us Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
