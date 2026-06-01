import { motion } from "framer-motion";

/**
 * KeyholeHero — minimal static keyhole illustration.
 * Clean, professional, no decorative noise.
 */
const KeyholeHero = () => {
  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-[#63F0DD]/8 via-transparent to-[#17306C]/5 blur-2xl rounded-full" />

      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="khStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(173 84% 67%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(222 65% 25%)" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Subtle outer ring */}
        <circle cx="200" cy="200" r="170" fill="none" stroke="hsl(173 84% 67% / 0.08)" strokeWidth="1" />
        <circle cx="200" cy="200" r="130" fill="none" stroke="hsl(173 84% 67% / 0.06)" strokeWidth="1" />

        {/* Keyhole shape */}
        <g>
          <path
            d="M 200 120 a 50 50 0 1 1 -0.01 0 M 175 190 L 168 260 L 232 260 L 225 190 Z"
            fill="hsl(222 44% 5% / 0.8)"
            stroke="url(#khStroke)"
            strokeWidth="1.5"
          />
          <circle cx="200" cy="170" r="36" fill="none" stroke="hsl(173 84% 67% / 0.25)" strokeWidth="1" />
          <circle cx="200" cy="170" r="6" fill="hsl(173 84% 67% / 0.6)" />
        </g>
      </svg>

      {/* Single static accent card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute top-[10%] right-[-5%] rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-3 w-[140px]"
      >
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Risk Score</div>
        <div className="font-heading text-lg font-semibold text-gradient">A+</div>
        <div className="mt-1.5 h-1 rounded-full bg-white/5 overflow-hidden">
          <div className="h-full w-[92%] bg-gradient-brand rounded-full" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-[12%] left-[-5%] rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-sm p-3 w-[130px]"
      >
        <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Compliance</div>
        <div className="flex gap-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-1 flex-1 rounded-sm bg-brand-cyan/50" />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default KeyholeHero;
