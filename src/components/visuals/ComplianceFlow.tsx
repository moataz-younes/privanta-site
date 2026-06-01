import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/**
 * Compliance & Governance — framework mapping flow
 * Controls (left, evidence stream) → Mapping engine (center) → Frameworks (right, scored)
 */
const ComplianceFlow = () => {
  const controls = [
    "Access reviews · 2m ago",
    "Encryption · in transit",
    "Backups · 24h",
    "Vendor DPAs · 284",
    "Incident response · drilled",
    "Logging · 90d retention",
  ];
  const frameworks = [
    { name: "ISO 27001", pct: 98, color: "hsl(173 84% 67%)" },
    { name: "SOC 2 Type II", pct: 96, color: "hsl(173 84% 67%)" },
    { name: "GDPR", pct: 100, color: "hsl(150 70% 60%)" },
    { name: "HIPAA", pct: 92, color: "hsl(173 84% 67%)" },
    { name: "NIS2", pct: 88, color: "hsl(35 90% 65%)" },
    { name: "DORA", pct: 84, color: "hsl(35 90% 65%)" },
  ];

  return (
    <div className="relative w-full rounded-2xl border border-white/5 bg-white/[0.02] p-5 md:p-6 overflow-hidden">

      <div className="relative grid grid-cols-12 gap-3 md:gap-5 min-h-[360px]">
        {/* Controls stream */}
        <div className="col-span-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Controls · live</span>
            <span className="inline-flex items-center gap-1 text-[10px] text-brand-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" /> stream
            </span>
          </div>
          <div className="space-y-1.5">
            {controls.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-center gap-2 rounded-md bg-white/[0.03] border border-white/10 px-2.5 py-1.5"
              >
                <CheckCircle2 className="h-3 w-3 text-[hsl(150_70%_60%)] shrink-0" />
                <span className="text-[11px] truncate">{c}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mapping engine */}
        <div className="col-span-4 relative">
          <svg viewBox="0 0 240 360" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="cgLineL" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(150 70% 60%)" stopOpacity="0.0" />
                <stop offset="100%" stopColor="hsl(173 84% 67%)" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="cgLineR" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(173 84% 67%)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="hsl(173 84% 67%)" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* incoming control lines */}
            {[40, 90, 140, 195, 245, 300].map((y, i) => (
              <g key={`l-${i}`}>
                <path d={`M 0 ${y} C 60 ${y}, 80 180, 120 180`} stroke="url(#cgLineL)" strokeWidth="0.8" fill="none" />
              </g>
            ))}

            {/* outgoing framework lines */}
            {[40, 90, 140, 195, 245, 300].map((y, i) => (
              <g key={`r-${i}`}>
                <path d={`M 120 180 C 160 180, 180 ${y}, 240 ${y}`} stroke="url(#cgLineR)" strokeWidth="0.8" fill="none" />
              </g>
            ))}

            {/* engine */}
            <circle cx="120" cy="180" r="55" fill="hsl(222 39% 9%)" stroke="hsl(173 84% 67% / 0.3)" strokeWidth="1" />
            <circle cx="120" cy="180" r="40" fill="none" stroke="hsl(173 84% 67% / 0.2)" strokeDasharray="2 4" />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <div className="h-10 w-10 rounded-lg bg-gradient-brand grid place-items-center mb-2">
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h12" strokeLinecap="round" />
              </svg>
            </div>
            <div className="text-[10px] uppercase tracking-[0.12em] text-brand-cyan font-semibold">Mapping engine</div>
            <div className="text-[9px] text-muted-foreground mt-0.5">147 controls · 8 frameworks</div>
          </div>
        </div>

        {/* Frameworks scored */}
        <div className="col-span-4">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 text-right">Frameworks</div>
          <div className="space-y-2">
            {frameworks.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-md bg-white/[0.03] border border-white/10 px-2.5 py-1.5"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-medium">{f.name}</span>
                  <span className="text-[10px] font-mono" style={{ color: f.color }}>{f.pct}%</span>
                </div>
                <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${f.pct}%`, background: f.color }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceFlow;
