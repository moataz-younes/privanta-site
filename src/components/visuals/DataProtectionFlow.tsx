import { motion } from "framer-motion";
import { Database, Fingerprint, KeySquare, Lock, ServerCog, Eye } from "lucide-react";

/**
 * Data Protection — process flow
 * Inputs (data sources) → Analysis (classify / encrypt / tokenize) → Output (protected vault + access logs)
 */
const DataProtectionFlow = () => {
  const sources = [
    { label: "Databases", icon: Database },
    { label: "Files", icon: ServerCog },
    { label: "Identities", icon: Fingerprint },
  ];

  return (
    <div className="relative w-full rounded-2xl border border-white/5 bg-white/[0.02] p-5 md:p-6 overflow-hidden">

      <div className="relative grid grid-cols-12 gap-3 md:gap-5 items-stretch min-h-[320px]">
        {/* Inputs column */}
        <div className="col-span-3 flex flex-col justify-between">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3">Inputs</div>
          <div className="space-y-2 flex-1">
            {sources.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/10 px-2.5 py-2"
              >
                <s.icon className="h-3.5 w-3.5 text-brand-cyan shrink-0" />
                <span className="text-[11px] font-medium truncate">{s.label}</span>
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-cyan/60" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pipeline / SVG */}
        <div className="col-span-6 relative">
          <svg viewBox="0 0 360 320" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="dpLine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(173 84% 67%)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="hsl(173 84% 67%)" stopOpacity="0.7" />
              </linearGradient>
              <radialGradient id="dpNode" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(173 100% 75%)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="hsl(173 84% 67%)" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Input → stage 1 lines (3 sources to first node) */}
            {[40, 160, 280].map((y, i) => (
              <g key={`in-${i}`}>
                <path d={`M 0 ${y} C 60 ${y}, 80 160, 130 160`} stroke="url(#dpLine)" strokeWidth="1" fill="none" />
              </g>
            ))}

            {/* stage nodes */}
            <circle cx="130" cy="160" r="40" fill="url(#dpNode)" />
            <circle cx="130" cy="160" r="22" fill="hsl(222 39% 9%)" stroke="hsl(173 84% 67% / 0.5)" />
            <circle cx="230" cy="160" r="40" fill="url(#dpNode)" />
            <circle cx="230" cy="160" r="22" fill="hsl(222 39% 9%)" stroke="hsl(173 84% 67% / 0.5)" />

            {/* between stages */}
            <path d="M 152 160 L 208 160" stroke="url(#dpLine)" strokeWidth="1" fill="none" />

            {/* stage → output lines (one node to 3 outputs) */}
            {[60, 160, 260].map((y, i) => (
              <g key={`out-${i}`}>
                <path d={`M 252 160 C 290 160, 300 ${y}, 360 ${y}`} stroke="url(#dpLine)" strokeWidth="1" fill="none" />
              </g>
            ))}
          </svg>

          {/* stage badges absolutely positioned over nodes */}
          <div className="absolute inset-0 grid grid-cols-2 pointer-events-none">
            <div className="flex flex-col items-center justify-center">
              <div className="h-9 w-9 rounded-lg bg-gradient-brand grid place-items-center">
                <KeySquare className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-wider text-brand-cyan font-semibold">Classify</div>
              <div className="text-[9px] text-muted-foreground">PII · PHI · IP</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="h-9 w-9 rounded-lg bg-gradient-brand grid place-items-center">
                <Lock className="h-4 w-4 text-primary-foreground" />
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-wider text-brand-cyan font-semibold">Encrypt</div>
              <div className="text-[9px] text-muted-foreground">AES-256 · KMS</div>
            </div>
          </div>

          <div className="absolute top-2 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-muted-foreground">
            Analysis pipeline
          </div>
        </div>

        {/* Output column */}
        <div className="col-span-3 flex flex-col">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 text-right">Outputs</div>
          <div className="space-y-2 flex-1">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-lg bg-white/[0.03] border border-brand-cyan/30 px-2.5 py-2"
            >
              <div className="flex items-center gap-2">
                <Lock className="h-3.5 w-3.5 text-brand-cyan" />
                <span className="text-[11px] font-medium">Encrypted vault</span>
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5">2.4k assets</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-lg bg-white/[0.03] border border-white/10 px-2.5 py-2"
            >
              <div className="flex items-center gap-2">
                <Fingerprint className="h-3.5 w-3.5 text-brand-cyan" />
                <span className="text-[11px] font-medium">Tokenized IDs</span>
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Reversible</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-lg bg-white/[0.03] border border-white/10 px-2.5 py-2"
            >
              <div className="flex items-center gap-2">
                <Eye className="h-3.5 w-3.5 text-brand-cyan" />
                <span className="text-[11px] font-medium">Access logs</span>
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Immutable</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProtectionFlow;
