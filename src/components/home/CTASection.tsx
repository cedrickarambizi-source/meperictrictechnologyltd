import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Partner with Rwanda's leading MEP and elevator solutions provider. 
            Get a free consultation and quote for your next project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-mep-orange hover:bg-mep-orange-hover text-white font-semibold px-8 py-4 rounded-md transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              Request a Quote <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+250788123456"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-md transition-all inline-flex items-center gap-2"
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
