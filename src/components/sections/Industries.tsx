import { motion } from "framer-motion";
import { Landmark, HeartPulse, Building2, Briefcase, Cpu, GraduationCap } from "lucide-react";

const industries = [
  { icon: Landmark, name: "Banking & Finance" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Building2, name: "Government" },
  { icon: Briefcase, name: "Legal" },
  { icon: Cpu, name: "Technology" },
  { icon: GraduationCap, name: "Education" },
];

const Industries = () => {
  return (
    <section className="container section-medium">
      <div className="max-w-2xl mb-10">
        <p className="text-brand-cyan text-xs font-semibold tracking-[0.12em] uppercase mb-2">Industries</p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold leading-tight">
          Trusted across <span className="text-gradient">regulated sectors</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {industries.map((it, i) => (
          <motion.div
            key={it.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-xl border border-white/5 bg-white/[0.02] p-4 flex flex-col items-center text-center gap-2.5 hover:border-white/10 transition-all"
          >
            <it.icon className="h-6 w-6 text-brand-cyan" />
            <span className="text-sm font-medium">{it.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
