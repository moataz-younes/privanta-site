import { motion } from "framer-motion";
import { ArrowUpRight, Bot, ShieldHalf, Sparkles, FileText, Activity, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ---------- Mini UI: MAAT AI ---------- */
const MaatPreview = () => (
  <div className="relative rounded-2xl overflow-hidden border border-[rgba(124,92,255,0.2)] bg-[linear-gradient(160deg,rgba(15,23,42,0.95),rgba(12,18,33,0.9))] p-4 shadow-[0_0_20px_rgba(124,92,255,0.1)]">
    {/* window chrome */}
    <div className="flex items-center gap-1.5 mb-3">
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="ml-2 text-[10px] font-mono text-muted-foreground">maat.privanta.com</span>
    </div>

    {/* prompt */}
    <div className="rounded-lg bg-white/[0.03] border border-white/10 p-2.5 mb-3">
      <div className="flex items-center gap-2">
        <Sparkles className="h-3 w-3 text-[#7C5CFF]" />
        <span className="text-[11px] text-muted-foreground">Review NDA, Acme Corp</span>
      </div>
    </div>

    {/* AI streaming response */}
    <div className="space-y-2">
      <div className="flex items-start gap-2">
        <div className="h-5 w-5 mt-0.5 rounded-md bg-[rgba(124,92,255,0.2)] ring-1 ring-[rgba(124,92,255,0.3)] grid place-items-center shrink-0">
          <Bot className="h-2.5 w-2.5 text-[#7C5CFF]" />
        </div>
        <div className="flex-1 space-y-1.5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "92%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-2 rounded bg-white/10"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "78%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="h-2 rounded bg-white/10"
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "64%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="h-2 rounded bg-white/10"
          />
        </div>
      </div>

      {/* clauses */}
      <div className="grid grid-cols-2 gap-1.5 pt-2">
        <div className="rounded-md border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.1)] px-2 py-1.5 flex items-center gap-1.5">
          <CheckCircle2 className="h-3 w-3 text-[#10B981]" />
          <span className="text-[10px]">Confidentiality</span>
        </div>
        <div className="rounded-md border border-brand-cyan/25 bg-brand-cyan/10 px-2 py-1.5 flex items-center gap-1.5">
          <AlertTriangle className="h-3 w-3 text-brand-cyan-glow" />
          <span className="text-[10px]">Liability cap</span>
        </div>
        <div className="rounded-md border border-[rgba(16,185,129,0.3)] bg-[rgba(16,185,129,0.1)] px-2 py-1.5 flex items-center gap-1.5">
          <CheckCircle2 className="h-3 w-3 text-[#10B981]" />
          <span className="text-[10px]">Term & duration</span>
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1.5 flex items-center gap-1.5">
          <FileText className="h-3 w-3 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground">+ 8 clauses</span>
        </div>
      </div>
    </div>
  </div>
);

/* ---------- Mini UI: Privanta Platform ---------- */
const PlatformPreview = () => (
  <div className="relative rounded-2xl overflow-hidden border border-[rgba(99,240,221,0.2)] bg-[linear-gradient(160deg,rgba(15,23,42,0.95),rgba(12,18,33,0.9))] p-4 shadow-[0_0_20px_rgba(99,240,221,0.1)]">
    <div className="flex items-center gap-1.5 mb-3">
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="h-2 w-2 rounded-full bg-white/15" />
      <span className="ml-2 text-[10px] font-mono text-muted-foreground">platform.privanta.com</span>
    </div>

    <div className="grid grid-cols-3 gap-2 mb-3">
      <div className="rounded-lg bg-white/[0.03] border border-white/10 p-2">
        <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Risk</div>
        <div className="font-heading text-lg font-bold text-gradient leading-none mt-1">A+</div>
      </div>
      <div className="rounded-lg bg-white/[0.03] border border-white/10 p-2">
        <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Assets</div>
        <div className="font-heading text-lg font-bold leading-none mt-1">2.4k</div>
      </div>
      <div className="rounded-lg bg-white/[0.03] border border-white/10 p-2">
        <div className="text-[9px] uppercase tracking-wider text-muted-foreground">Alerts</div>
        <div className="font-heading text-lg font-bold text-[#63F0DD] leading-none mt-1">3</div>
      </div>
    </div>

    {/* sparkline */}
    <div className="rounded-lg bg-white/[0.02] border border-white/10 p-2.5 mb-2">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[10px] text-muted-foreground">Compliance trend · 30d</span>
        <Activity className="h-3 w-3 text-[#63F0DD]" />
      </div>
      <svg viewBox="0 0 200 40" className="w-full h-10">
        <defs>
          <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#63F0DD" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#63F0DD" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          d="M0 30 L20 25 L40 28 L60 18 L80 22 L100 12 L120 16 L140 8 L160 14 L180 6 L200 10"
          fill="none"
          stroke="#63F0DD"
          strokeWidth="1.5"
        />
        <path
          d="M0 30 L20 25 L40 28 L60 18 L80 22 L100 12 L120 16 L140 8 L160 14 L180 6 L200 10 L200 40 L0 40 Z"
          fill="url(#spark)"
        />
      </svg>
    </div>

    {/* alert row */}
    <div className="rounded-lg border border-[#63F0DD]/20 bg-gradient-to-r from-[#63F0DD]/10 to-[#17306C]/12 px-2.5 py-2 flex items-center gap-2">
      <AlertTriangle className="h-3 w-3 text-[#63F0DD]" />
      <span className="text-[10px] flex-1">DPA expires in 14 days · Vendor #142</span>
      <span className="text-[9px] text-muted-foreground">2m ago</span>
    </div>
  </div>
);

const products = [
  {
    icon: Bot,
    name: "MAAT AI",
    tagline: "Legal Intelligence Engine",
    desc: "Interprets legal text, detects exposure patterns, and proposes aligned clauses with traceable reasoning.",
    accent: "from-[#7C5CFF] to-[#9B7CFF]",
    href: "/maat",
    Preview: MaatPreview,
  },
  {
    icon: ShieldHalf,
    name: "Privanta Platform",
    tagline: "Cyber Trust Control Layer",
    desc: "Unifies risk scoring, vendor posture, and compliance evidence into one operational intelligence surface.",
    accent: "from-[#17306C] to-[#63F0DD]",
    href: "/platform",
    Preview: PlatformPreview,
  },
];

const ProductsPreview = () => {
  return (
    <section className="container section-medium" id="products">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div className="max-w-2xl">
          <p className="text-[#63F0DD] text-xs font-semibold tracking-[0.12em] uppercase mb-2">Products / Solutions</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold leading-tight">
            Two systems. <span className="text-gradient">One intelligence layer.</span>
          </h2>
        </div>
        <Button variant="ghost" className="text-[#63F0DD] self-start md:self-end text-sm h-8 px-3">
          View architecture <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {products.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-5 md:p-6 hover:border-white/10 transition-all duration-300"
          >
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`h-9 w-9 rounded-lg bg-gradient-to-br ${p.accent} grid place-items-center`}>
                    <p.icon className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold leading-none">{p.name}</h3>
                    <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mt-1">{p.tagline}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-[#63F0DD] transition-colors" />
              </div>

              <p.Preview />

              <p className="text-muted-foreground leading-relaxed mt-4 text-sm">{p.desc}</p>

              <div className="flex gap-2 mt-4">
                <Button variant="hero" size="sm" asChild>
                  <a href={p.href}>Explore {p.name}</a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={p.href}>Technical brief</a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPreview;
