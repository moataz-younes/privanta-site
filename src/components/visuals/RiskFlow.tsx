import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, Bell, Radar, TrendingDown, TrendingUp } from "lucide-react";

/**
 * Risk Management — signals → scoring engine → routed actions
 * Left: incoming risk signals (radar). Center: scoring matrix. Right: routed alerts + heatmap.
 */
const RiskFlow = () => {
  const signals = [
    { name: "Vendor #142", val: "Critical", color: "hsl(0 75% 60%)" },
    { name: "API drift · /auth", val: "High", color: "hsl(186 100% 55%)" },
    { name: "Geo anomaly · APAC", val: "Med", color: "hsl(262 70% 52%)" },
    { name: "DPA expiry · 14d", val: "High", color: "hsl(186 100% 55%)" },
    { name: "Patch lag · K8s", val: "Med", color: "hsl(262 70% 52%)" },
  ];

  // 5x5 heatmap (likelihood x impact)
  const heat = Array.from({ length: 25 }).map((_, i) => {
    const x = i % 5;
    const y = Math.floor(i / 5);
    const intensity = Math.min(1, (x + y) / 8 + (Math.sin(i * 1.3) + 1) * 0.15);
    return intensity;
  });

  return (
    <div className="relative w-full rounded-2xl border border-white/5 bg-white/[0.02] p-5 md:p-6 overflow-hidden">

      <div className="relative grid grid-cols-12 gap-3 md:gap-5 min-h-[360px]">
        {/* Radar / signals */}
        <div className="col-span-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Signals</span>
            <Radar className="h-3.5 w-3.5 text-brand-cyan" />
          </div>

          {/* radar svg */}
          <div className="relative aspect-square rounded-xl bg-white/[0.02] border border-white/10 mb-3 overflow-hidden">
            <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
              <defs>
                <radialGradient id="radarBg" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="hsl(186 100% 50%)" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="hsl(186 100% 50%)" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="sweep" x1="50%" y1="50%" x2="100%" y2="50%">
                  <stop offset="0%" stopColor="hsl(186 100% 50%)" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="hsl(186 100% 50%)" stopOpacity="0" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="90" fill="url(#radarBg)" />
              {[30, 60, 90].map((r) => (
                <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="hsl(186 100% 50% / 0.18)" />
              ))}
              <line x1="10" y1="100" x2="190" y2="100" stroke="hsl(186 100% 50% / 0.12)" />
              <line x1="100" y1="10" x2="100" y2="190" stroke="hsl(186 100% 50% / 0.12)" />

              {/* signal dots */}
              {[
                { x: 140, y: 70, c: "hsl(0 75% 60%)" },
                { x: 65, y: 130, c: "hsl(186 100% 55%)" },
                { x: 130, y: 145, c: "hsl(262 70% 52%)" },
                { x: 80, y: 60, c: "hsl(186 100% 55%)" },
                { x: 110, y: 110, c: "hsl(262 70% 52%)" },
              ].map((s, i) => (
                <g key={i}>
                  <circle cx={s.x} cy={s.y} r="5" fill={s.c} fillOpacity="0.15" />
                  <circle cx={s.x} cy={s.y} r="2.5" fill={s.c} />
                </g>
              ))}
            </svg>
          </div>

          <div className="space-y-1.5">
            {signals.slice(0, 3).map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center justify-between rounded-md bg-white/[0.03] border border-white/10 px-2.5 py-1.5"
              >
                <span className="text-[11px] truncate">{s.name}</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded font-medium"
                  style={{ background: `${s.color}1f`, color: s.color }}>
                  {s.val}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scoring engine + heatmap */}
        <div className="col-span-4 flex flex-col">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 text-center">Scoring matrix</div>
          <div className="rounded-xl bg-white/[0.02] border border-white/10 p-3 flex-1 flex flex-col">
            <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-muted-foreground mb-2">
              <span>likelihood →</span>
              <span>impact ↑</span>
            </div>
            <div className="grid grid-cols-5 gap-1 flex-1">
              {heat.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.015 }}
                  className="rounded-sm aspect-square"
                  style={{
                    background: v > 0.75
                      ? `hsl(0 75% 55% / ${0.35 + v * 0.4})`
                      : v > 0.5
                        ? `hsl(186 100% 50% / ${0.28 + v * 0.4})`
                        : v > 0.3
                          ? `hsl(262 70% 50% / ${0.22 + v * 0.4})`
                          : `hsl(160 84% 40% / ${0.12 + v * 0.28})`,
                  }}
                />
              ))}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1.5 text-[9px]">
              <div className="rounded bg-white/[0.03] border border-white/10 px-1.5 py-1 flex items-center gap-1">
                <TrendingDown className="h-2.5 w-2.5 text-[#10B981]" />
                <span>-12% wk</span>
              </div>
              <div className="rounded bg-white/[0.03] border border-white/10 px-1.5 py-1 text-center">
                <span className="text-foreground font-medium">A+</span>
              </div>
              <div className="rounded bg-white/[0.03] border border-white/10 px-1.5 py-1 flex items-center gap-1 justify-end">
                <span>3 hot</span>
                <TrendingUp className="h-2.5 w-2.5 text-brand-cyan-glow" />
              </div>
            </div>
          </div>
        </div>

        {/* Routed alerts */}
        <div className="col-span-4">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 text-right">Routed actions</div>
          <div className="space-y-2">
            {[
              { owner: "Privacy team", task: "Rotate vendor DPA #142", sla: "48h", icon: Bell, c: "hsl(0 75% 60%)" },
              { owner: "SecOps", task: "Patch K8s cluster", sla: "72h", icon: AlertTriangle, c: "hsl(186 100% 55%)" },
              { owner: "Legal", task: "Renew DPA · vendor list", sla: "14d", icon: Bell, c: "hsl(262 70% 52%)" },
            ].map((a, i) => (
              <motion.div
                key={a.task}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-lg bg-white/[0.03] border border-white/10 p-2.5 hover:border-brand-cyan/40 transition-colors"
              >
                <div className="flex items-center gap-2 mb-1">
                  <a.icon className="h-3 w-3 shrink-0" style={{ color: a.c }} />
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{a.owner}</span>
                  <span className="ml-auto text-[9px] font-mono text-muted-foreground">SLA {a.sla}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium">{a.task}</span>
                  <ArrowRight className="h-3 w-3 text-brand-cyan" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskFlow;
