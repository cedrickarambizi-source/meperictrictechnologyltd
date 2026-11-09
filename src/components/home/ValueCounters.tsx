import { useEffect, useRef, useState } from "react";

const items = [
  { value: 150, prefix: "RWF ", suffix: " BILLION", label: "Value of Projects" },
  { value: 500, prefix: "", suffix: " +", label: "Skilled Workers" },
  { value: 11, prefix: "", suffix: " +", label: "Years in Business" },
];

const Counter = ({ to, start }: { to: number; start: boolean }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / 1800, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to]);
  return <>{n.toLocaleString()}</>;
};

const ValueCounters = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="bg-background border-y border-border">
      <div ref={ref} className="container mx-auto px-6 lg:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {items.map((it) => (
            <div key={it.label} className="text-center py-6 md:py-4">
              <div className="font-display text-foreground text-2xl md:text-3xl font-semibold tracking-tight">
                {it.prefix}
                <Counter to={it.value} start={seen} />
                {it.suffix}
              </div>
              <div className="mt-3 text-sm uppercase text-muted-foreground tracking-wide">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueCounters;
