import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { serviceLandings } from "@/data/serviceLandings";
import ScrollReveal from "@/components/motion/ScrollReveal";

const DivisionsNavigator = () => {
  const [active, setActive] = useState(0);
  const d = serviceLandings[active];

  return (
    <section className="bg-background py-[75px]">
      <div className="container mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <p className="eyebrow text-muted-foreground mb-3">02 — Engineering divisions</p>
          <h2 className="section-heading max-w-2xl mb-12">Five disciplines. One accountable contractor.</h2>
        </ScrollReveal>
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <ul className="lg:col-span-6 border-t border-border" role="tablist" aria-label="Engineering divisions">
            {serviceLandings.map((s, i) => (
              <li key={s.slug} className="border-b border-border">
                <button
                  role="tab"
                  aria-selected={i === active}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="w-full flex items-baseline gap-6 py-6 text-left group"
                >
                  <span className="mono text-xs text-muted-foreground w-6">0{i + 1}</span>
                  <span
                    className={`text-2xl md:text-4xl tracking-[-0.025em] transition-colors duration-300 ${
                      i === active ? "text-foreground" : "text-muted-foreground/50 group-hover:text-muted-foreground"
                    }`}
                  >
                    {s.hero}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <div className="lg:col-span-6 lg:sticky lg:top-28 self-start" role="tabpanel">
            <AnimatePresence mode="wait">
              <motion.div
                key={d.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[15px] bg-muted p-8 md:p-10"
              >
                <p className="eyebrow text-muted-foreground mb-4">{d.navLabel}</p>
                <p className="text-foreground text-lg leading-relaxed mb-8">{d.intro}</p>
                <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                  {d.offerings.map((o) => (
                    <div key={o.title} className="border-t border-border pt-4">
                      <dt className="text-sm font-bold text-foreground">{o.title}</dt>
                      <dd className="text-sm text-muted-foreground mt-1 leading-relaxed">{o.description}</dd>
                    </div>
                  ))}
                </dl>
                <Link
                  to={`/services/${d.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-foreground border-b border-foreground pb-1 hover:gap-3 transition-all"
                >
                  Explore {d.navLabel} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DivisionsNavigator;
