import { motion } from "framer-motion";
import { ShieldCheck, FileCheck2, BrainCircuit } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Data Protection",
    desc: "End-to-end encryption, access controls, and threat intelligence keep sensitive data safe at every layer.",
  },
  {
    icon: FileCheck2,
    title: "Compliance",
    desc: "Automate alignment with GDPR, ISO 27001, SOC 2, and LGPD. Audit-ready evidence in real time.",
  },
  {
    icon: BrainCircuit,
    title: "Intelligence",
    desc: "AI-driven risk scoring and document analysis turn complexity into clear, actionable insight.",
  },
];

const ValueProps = () => {
  return (
    <section className="container section-medium" id="services">
      <div className="max-w-2xl mb-8">
        <p className="text-[#63F0DD] text-xs font-semibold tracking-[0.12em] uppercase mb-2">Why Privanta</p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold leading-tight">
          Built for the <span className="text-gradient">trust economy</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-[rgba(99,240,221,0.2)] transition-all duration-300"
          >
            <div className="relative">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#63F0DD]/15 to-[#17306C]/10 grid place-items-center mb-3 ring-1 ring-[rgba(99,240,221,0.15)]">
                <item.icon className="h-5 w-5 text-[#63F0DD]" />
              </div>
              <h3 className="font-heading text-base font-semibold mb-1.5">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;
