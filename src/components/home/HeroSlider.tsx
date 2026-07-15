import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const tabs = [
  {
    id: "mep",
    eyebrow: "MEP Engineering",
    title: "Powering Rwanda & East Africa With Excellence in MEP",
    href: "/services",
  },
  {
    id: "elevator",
    eyebrow: "FUJIHD Elevator Partner",
    title: "Trusted Elevator Solutions, Engineered Since 2019",
    href: "/fujihd-elevator",
  },
  {
    id: "projects",
    eyebrow: "Signature Projects",
    title: "Landmark Buildings, Delivered Across the Region",
    href: "/projects",
  },
  {
    id: "team",
    eyebrow: "Our People",
    title: "The Engineers Behind Every Installation",
    href: "/team",
  },
];

const HeroSlider = () => {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <section className="relative min-h-[100vh] overflow-hidden bg-transparent">
      {/* Bain-style navy → luminous blue sweep overlay (keeps video visible underneath) */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(115deg, rgba(6,10,30,0.92) 0%, rgba(10,26,66,0.82) 38%, rgba(18,53,110,0.55) 62%, rgba(60,140,220,0.25) 88%, rgba(120,190,255,0.08) 100%)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl space-y-8 animate-fade-in">
            {/* Eyebrow */}
            <div key={`eb-${current.id}`} className="animate-fade-in">
              <span className="text-white/70 text-[11px] tracking-[0.25em] uppercase font-medium">
                {current.eyebrow}
              </span>
            </div>

            {/* Huge light-weight headline */}
            <h1
              key={`t-${current.id}`}
              className="font-display text-white font-light leading-[1.05] tracking-tight animate-slide-up text-4xl md:text-6xl lg:text-7xl xl:text-[80px]"
            >
              {current.title}
            </h1>

            {/* Read More link */}
            <div>
              <Link
                to={current.href}
                className="group inline-flex items-center gap-3 text-white text-sm tracking-[0.2em] uppercase font-medium border-b border-white/30 hover:border-mep-orange pb-2 transition-colors"
              >
                Read More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom tab strip (Bain-style) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/15 bg-gradient-to-t from-black/40 to-transparent backdrop-blur-sm">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {tabs.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className={`relative text-left py-5 md:py-6 pr-4 transition-colors ${
                    isActive ? "text-white" : "text-white/55 hover:text-white/90"
                  }`}
                >
                  <span
                    className={`absolute top-0 left-0 h-[2px] bg-mep-orange transition-all duration-500 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                  <span className="text-[11px] md:text-[13px] tracking-wide font-normal">
                    {t.eyebrow}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
