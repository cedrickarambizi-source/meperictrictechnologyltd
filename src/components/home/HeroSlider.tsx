import { Calculator, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  return (
    <section className="relative h-[100vh] min-h-[700px] overflow-hidden bg-transparent">

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex items-start justify-center pt-24 md:pt-32">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6 md:space-y-8">
            {/* Orange pill badge */}
            <div className="inline-flex items-center gap-2 bg-mep-orange/15 border border-mep-orange/30 rounded-full px-5 py-2 animate-fade-in">
              <span className="w-2 h-2 bg-mep-orange rounded-full animate-pulse" />
              <span className="text-mep-orange font-semibold uppercase tracking-widest text-xs">
                &nbsp;TRUSTED ENGINEERING PARTNER SINCE 2016
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-white leading-[0.95] tracking-tight animate-slide-up xl:text-xl font-extrabold text-center md:text-2xl text-2xl lg:text-3xl">
              Powering Rwanda &East Africa With
              <br className="hidden md:block" />
              Excellence in MEP
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed animate-slide-up mx-auto">
              World-class Mechanical, Electrical & Plumbing solutions
              engineered for modern structures across East Africa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2 animate-slide-up justify-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-semibold px-7 py-4 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-300 text-sm"
              >
                View Our Projects
              </Link>
              <a
                href="https://mepestimatecalculator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white font-semibold px-5 py-4 rounded-xl transition-all duration-300 text-sm bg-[#ed6307]"
              >
                <Calculator className="h-4 w-4" /> MEP Calculator
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="h-5 w-5 text-white/30 animate-scroll-bounce" />
      </div>
    </section>
  );
};

export default HeroSlider;
