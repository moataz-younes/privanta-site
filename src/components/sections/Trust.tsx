import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Scale } from "lucide-react";

const points = [
  { icon: ShieldCheck, title: "ISO 27001 alignment", desc: "Security controls aligned with the gold standard for information security." },
  { icon: CheckCircle2, title: "Security-first approach", desc: "Zero-trust architecture, encryption at rest and in transit, continuous audits." },
  { icon: Scale, title: "Legal + Cyber expertise", desc: "Built by a team uniting deep cybersecurity and legal compliance know-how." },
];

const Trust = () => {
  return (
    <section className="container section-medium" id="company">
      <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 overflow-hidden">
        <div className="relative grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-[var(--purple-primary)] text-xs font-semibold tracking-[0.12em] uppercase mb-2">Trust by design</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold leading-tight">
              Built on <span className="text-gradient">unbreakable foundations</span>
            </h2>
            <p className="mt-3 text-muted-foreground max-w-md leading-relaxed text-sm">
              Every layer of Privanta is engineered with security, transparency, and accountability at its core.
            </p>
          </div>

          <ul className="space-y-3">
            {points.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-3 p-4 rounded-xl hover:bg-white/[0.03] transition-colors"
              >
                <div className="shrink-0 h-9 w-9 rounded-lg bg-gradient-to-r from-[#17306C]/20 to-[rgba(139,124,255,0.22)] ring-1 ring-[rgba(139,124,255,0.26)] grid place-items-center">
                  <p.icon className="h-4 w-4 text-[var(--purple-primary)]" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-base">{p.title}</h4>
                  <p className="text-sm text-muted-foreground mt-0.5">{p.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Trust;
