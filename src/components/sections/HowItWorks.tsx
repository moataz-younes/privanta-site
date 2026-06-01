import { motion } from "framer-motion";
import { Search, Lock, FileCheck, Activity } from "lucide-react";

const steps = [
  { icon: Search, title: "Assess", desc: "Map your data and risk surface" },
  { icon: Lock, title: "Secure", desc: "Apply controls and encryption" },
  { icon: FileCheck, title: "Comply", desc: "Align with global standards" },
  { icon: Activity, title: "Monitor", desc: "Continuous, real-time oversight" },
];

const HowItWorks = () => {
  return (
    <section className="container section-medium" id="solutions">
      <div className="max-w-2xl mb-10">
        <p className="text-brand-cyan text-xs font-semibold tracking-[0.12em] uppercase mb-2">How it works</p>
        <h2 className="font-heading text-2xl md:text-3xl font-bold leading-tight">
          A continuous <span className="text-gradient">trust loop</span>
        </h2>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute top-6 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative text-center"
            >
              <div className="relative mx-auto h-11 w-11 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm grid place-items-center mb-3">
                <s.icon className="h-5 w-5 text-brand-cyan" />
                <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-gradient-brand text-[10px] font-bold grid place-items-center text-primary-foreground">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-heading font-semibold text-base">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
