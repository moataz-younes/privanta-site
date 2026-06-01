import { motion, useReducedMotion } from "framer-motion";
import { Activity, AlertTriangle, ShieldCheck, TrendingUp, Server, Lock } from "lucide-react";
import { MOTION_DURATION, MOTION_EASE } from "@/lib/motion";

/**
 * PlatformDashboard — enterprise dashboard hero for Privanta Platform.
 * Stacked, layered panels with charts, tables, KPIs, live indicators.
 */
const PlatformDashboard = () => {
  const reduceMotion = useReducedMotion();
  const panelTransition = reduceMotion
    ? { duration: 0 }
    : { duration: MOTION_DURATION.cinematic, ease: MOTION_EASE };

  return (
    <div className="platform-dashboard-float relative mx-auto aspect-[5/4] w-full max-w-[640px]">
      {/* glow */}
      <div className="platform-dashboard-glow absolute inset-0 rounded-full bg-gradient-brand opacity-8 blur-2xl" />

      {/* Main dashboard panel */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={panelTransition}
        className="absolute inset-0 overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02]"
      >
        {/* top bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-white/20" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground ml-2">platform.privanta.com / overview</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="platform-live-indicator h-1.5 w-1.5 rounded-full bg-brand-cyan" />
            <span className="text-[10px] text-muted-foreground">Live</span>
          </div>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-4 gap-2 p-3">
          {[
            { label: "Risk score", val: "A+", sub: "98/100", color: "text-gradient", icon: ShieldCheck },
            { label: "Vendors", val: "284", sub: "+12 this wk", color: "text-foreground", icon: Server },
            { label: "Open alerts", val: "3", sub: "1 critical", color: "text-brand-cyan-glow", icon: AlertTriangle },
            { label: "Controls", val: "147", sub: "all passing", color: "text-[#10B981]", icon: Lock },
          ].map((k) => (
            <div key={k.label} className="platform-metric-shimmer rounded-lg border border-white/10 bg-white/[0.03] p-2.5">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] uppercase tracking-wider text-muted-foreground">{k.label}</span>
                <k.icon className="h-3 w-3 text-muted-foreground" />
              </div>
              <div className={`font-heading text-xl font-bold leading-none ${k.color}`}>{k.val}</div>
              <div className="text-[9px] text-muted-foreground mt-1">{k.sub}</div>
            </div>
          ))}
        </div>

        {/* Chart + table side by side */}
        <div className="grid grid-cols-5 gap-2 px-3 pb-3">
          {/* Chart */}
          <div className="col-span-3 rounded-lg bg-white/[0.02] border border-white/10 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Compliance trend · 30d</span>
              <div className="flex items-center gap-1 text-[10px] text-[#10B981]">
                <TrendingUp className="h-3 w-3" /> +14%
              </div>
            </div>
            <svg viewBox="0 0 320 90" className="w-full h-[110px]">
              <defs>
                <linearGradient id="dashSpark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(160 84% 45%)" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="hsl(160 84% 45%)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* gridlines */}
              {[0, 1, 2, 3].map((i) => (
                <line key={i} x1="0" x2="320" y1={20 + i * 18} y2={20 + i * 18} stroke="hsl(0 0% 100% / 0.04)" />
              ))}
              <motion.path
                initial={reduceMotion ? false : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, delay: 0.4, ease: MOTION_EASE }}
                d="M0 70 L30 60 L60 65 L90 50 L120 56 L150 40 L180 46 L210 30 L240 36 L270 22 L300 28 L320 18"
                fill="none" stroke="hsl(160 84% 45%)" strokeWidth="2"
              />
              <path
                d="M0 70 L30 60 L60 65 L90 50 L120 56 L150 40 L180 46 L210 30 L240 36 L270 22 L300 28 L320 18 L320 90 L0 90 Z"
                fill="url(#dashSpark)"
              />
            </svg>
          </div>
          {/* Table */}
          <div className="col-span-2 rounded-lg bg-white/[0.02] border border-white/10 p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Top risks</span>
              <Activity className="h-3 w-3 text-brand-cyan" />
            </div>
            <ul className="space-y-1.5">
              {[
                { name: "Vendor #142 DPA", v: "Critical", c: "hsl(0 75% 60%)" },
                { name: "Access review", v: "High", c: "hsl(186 100% 55%)" },
                { name: "Data retention", v: "Med", c: "hsl(262 70% 52%)" },
                { name: "Sub-processor list", v: "Low", c: "hsl(160 84% 45%)" },
              ].map((r) => (
                <li key={r.name} className="flex items-center justify-between text-[10px]">
                  <span className="text-foreground/80 truncate">{r.name}</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-medium" style={{ background: `${r.c}1f`, color: r.c }}>
                    {r.v}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Floating alert card */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.85, duration: MOTION_DURATION.slow, ease: MOTION_EASE }}
        className="platform-notification-pulse absolute -bottom-6 -left-4 w-[230px] rounded-xl border border-white/5 bg-white/[0.02] p-3 backdrop-blur-sm"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="platform-live-indicator h-2 w-2 rounded-full bg-brand-cyan-glow" />
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Live alert</span>
        </div>
        <div className="text-xs font-medium">DPA expiring in 14 days</div>
        <div className="text-[10px] text-muted-foreground">Vendor #142 · Notify owner</div>
      </motion.div>

      {/* Floating mini map */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.05, duration: MOTION_DURATION.slow, ease: MOTION_EASE }}
        className="absolute -top-5 -right-3 w-[180px] rounded-xl border border-white/5 bg-white/[0.02] p-3 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Coverage</span>
          <span className="text-[10px] text-brand-cyan">EU · US · APAC</span>
        </div>
        <div className="grid grid-cols-12 gap-0.5">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="h-1.5 rounded-sm"
              style={{
                background: `hsl(${i % 3 === 0 ? 186 : i % 3 === 1 ? 262 : 160} ${i % 3 === 0 ? 100 : i % 3 === 1 ? 70 : 84}% ${45 + (i * 5) % 25}% / ${0.3 + ((i * 11) % 50) / 100})`,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PlatformDashboard;
