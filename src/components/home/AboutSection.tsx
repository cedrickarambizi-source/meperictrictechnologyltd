import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  "Founded in 2016 in Kigali, Rwanda",
  "Leading MEP & Elevator Solutions Provider",
  "Partnership with International Manufacturers",
  "Safety-driven & Innovation-focused",
];

const AboutSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-mep-orange font-semibold uppercase tracking-wider text-sm">
                About Us
              </span>
              <h2 className="section-heading">
                Rwanda's Leading MEP & Elevator Engineering Company
              </h2>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2016, MEP Erictric Technology Ltd is a Rwandan-based engineering 
              company located in Remera – Gisimenti, Kigali. The company specializes in 
              the supply, installation, and maintenance of elevators and vertical 
              transportation systems, alongside comprehensive Mechanical, Electrical, 
              and Plumbing (MEP) solutions.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              With a strong focus on safety, reliability, and innovation, the company 
              has grown into one of the leading elevator and MEP solution providers in 
              Rwanda and the East African region.
            </p>

            <ul className="space-y-3 pt-2">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-mep-orange flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline mt-4"
            >
              Learn More About Us →
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "10+", label: "Years of Excellence" },
              { number: "60+", label: "Projects Completed" },
              { number: "20+", label: "Expert Engineers" },
              { number: "15+", label: "Professional Certificates" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-primary text-primary-foreground p-8 rounded-lg text-center card-hover"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
