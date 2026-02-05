import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-white rounded-full -translate-x-1/2 -translate-y-1/2 opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-0.5 bg-mep-orange"></span>
            <span className="text-mep-orange font-semibold uppercase tracking-widest text-sm">
              Get Started
            </span>
            <span className="w-12 h-0.5 bg-mep-orange"></span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-6 leading-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl opacity-90 mb-10 max-w-2xl mx-auto">
            Partner with Rwanda's leading MEP and elevator solutions provider. 
            Get a free consultation and quote for your next project.
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            <Link
              to="/contact"
              className="bg-mep-orange hover:bg-mep-orange-hover text-white font-semibold px-8 lg:px-10 py-4 lg:py-5 rounded-md transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 hover:gap-3 text-base lg:text-lg"
            >
              Request a Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+250788123456"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 lg:px-10 py-4 lg:py-5 rounded-md transition-all inline-flex items-center gap-2 text-base lg:text-lg"
            >
              <Phone className="h-5 w-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
