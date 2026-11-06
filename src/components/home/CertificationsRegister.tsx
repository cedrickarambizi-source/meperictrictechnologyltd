import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

const register = [
  { name: "Company Registration", authority: "Rwanda Development Board", year: "2016", scope: "Official domestic company registration" },
  { name: "FUJIHD Elevator", authority: "FUJIHD Elevator Co., Ltd", year: "2024", scope: "Authorized agent — elevator supply and service" },
  { name: "Daikin", authority: "Daikin Industries Ltd", year: "2024", scope: "Authorized distributor — air conditioning and refrigeration" },
  { name: "TSTY Electric", authority: "TSTY Electric Co., Ltd", year: "2024", scope: "Authorized agent — transformers and switchgear" },
  { name: "SafeEagle", authority: "Shenzhen Jinjian Era Technology Co., Ltd", year: "2023", scope: "Overseas distributor — X-ray and security equipment" },
  { name: "MEP Erictric Cables", authority: "Wuxi Jiangnan Cable Co.", year: "2025", scope: "Cable production and customization rights" },
];

const CertificationsRegister = () => (
  <section className="bg-background py-[75px]">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-12 gap-10">
        <ScrollReveal className="lg:col-span-4">
          <p className="eyebrow text-muted-foreground mb-3">04 — Certifications & authorizations</p>
          <h2 className="section-heading mb-6">Registered, authorized, accountable.</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Direct relationships with international manufacturers, documented and verifiable.
          </p>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-bold text-foreground border-b border-foreground pb-1">
            View certificates <ArrowUpRight className="h-4 w-4" />
          </Link>
        </ScrollReveal>
        <div className="lg:col-span-8">
          <div className="hidden md:grid grid-cols-12 mono text-[11px] uppercase text-muted-foreground pb-3 border-b border-foreground/80">
            <span className="col-span-1">Year</span>
            <span className="col-span-4">Authorization</span>
            <span className="col-span-7">Issuing authority / scope</span>
          </div>
          <ul>
            {register.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 0.05}>
                <li className="grid grid-cols-12 gap-y-1 py-5 border-b border-border group hover:bg-muted/60 transition-colors md:px-2">
                  <span className="col-span-12 md:col-span-1 mono text-xs text-muted-foreground pt-1">{r.year}</span>
                  <span className="col-span-12 md:col-span-4 text-lg tracking-[-0.02em] text-foreground">{r.name}</span>
                  <span className="col-span-12 md:col-span-7">
                    <span className="block text-sm text-foreground">{r.authority}</span>
                    <span className="block text-sm text-muted-foreground">{r.scope}</span>
                  </span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default CertificationsRegister;
