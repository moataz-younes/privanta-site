import { motion } from "framer-motion";
import { Bot, Sparkles, FileText, AlertTriangle, CheckCircle2, Send } from "lucide-react";

/**
 * NeuralAI, clean static AI hero visual for MAAT AI.
 */
const NeuralAI = () => {
  const nodes = [
    { x: 90, y: 90 },
    { x: 220, y: 60 },
    { x: 360, y: 110 },
    { x: 470, y: 200 },
    { x: 110, y: 230 },
    { x: 280, y: 280 },
    { x: 460, y: 360 },
    { x: 90, y: 410 },
    { x: 230, y: 470 },
    { x: 380, y: 470 },
  ];
  const edges: Array<[number, number]> = [
    [0, 1], [0, 4], [1, 2], [1, 5], [2, 3], [2, 5],
    [3, 6], [4, 5], [4, 7], [5, 6], [5, 8], [6, 9],
    [7, 8], [8, 9], [5, 9], [3, 5],
  ];

  return (
    <div className="relative w-full aspect-square max-w-[480px] mx-auto">
      <div className="absolute inset-0 bg-gradient-ai opacity-10 blur-2xl rounded-full" />

      <svg viewBox="0 0 560 560" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="aiEdge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(262 83% 58%)" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(160 84% 45%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Subtle outer ring */}
        <circle cx="280" cy="280" r="240" fill="none" stroke="hsl(262 83% 58% / 0.06)" strokeWidth="1" strokeDasharray="2 8" />

        {/* Static edges */}
        {edges.map(([a, b], i) => {
          const na = nodes[a], nb = nodes[b];
          return (
            <line key={i} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} stroke="url(#aiEdge)" strokeWidth="0.6" />
          );
        })}

        {/* Static nodes */}
        {nodes.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="3" fill="hsl(186 100% 55% / 0.5)" />
            <circle cx={n.x} cy={n.y} r="8" fill="none" stroke="hsl(186 100% 55% / 0.15)" strokeWidth="0.5" />
          </g>
        ))}
      </svg>

      {/* Static chat panel */}
      <div className="absolute top-[6%] left-[-2%] w-[220px] rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-6 w-6 rounded-md bg-gradient-ai grid place-items-center">
            <Bot className="h-3 w-3 text-white" />
          </div>
          <div className="leading-tight">
            <div className="text-[11px] font-semibold">MAAT AI</div>
            <div className="text-[10px] text-muted-foreground">Legal copilot</div>
          </div>
          <Sparkles className="ml-auto h-3 w-3 text-[#00E5FF]/60" />
        </div>
        <div className="space-y-1.5 text-[11px]">
          <div className="rounded-md bg-white/[0.03] border border-white/10 px-2 py-1.5">
            Review NDA, Acme Corp, flag liability risk.
          </div>
          <div className="rounded-md bg-[hsl(262_83%_30%/0.12)] border border-[hsl(262_83%_58%/0.15)] px-2 py-1.5 space-y-1">
            <div className="h-1 rounded bg-white/10" />
            <div className="h-1 rounded bg-white/10 w-3/4" />
            <div className="h-1 rounded bg-white/10 w-1/2" />
          </div>
        </div>
      </div>

      {/* Static clauses card */}
      <div className="absolute bottom-[8%] right-[-2%] w-[200px] rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Clause analysis</span>
          <span className="text-[10px] text-[#00E5FF]/70">12 found</span>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 rounded-md border border-[#10B981]/20 bg-[#10B981]/8 px-2 py-1">
            <CheckCircle2 className="h-3 w-3 text-[#10B981]" />
            <span className="text-[11px] flex-1">Confidentiality</span>
            <span className="text-[10px] text-muted-foreground">OK</span>
          </div>
          <div className="flex items-center gap-2 rounded-md border border-brand-cyan/20 bg-brand-cyan/8 px-2 py-1">
            <AlertTriangle className="h-3 w-3 text-brand-cyan/70" />
            <span className="text-[11px] flex-1">Liability cap</span>
            <span className="text-[10px] text-brand-cyan/70">High</span>
          </div>
          <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-2 py-1">
            <FileText className="h-3 w-3 text-muted-foreground" />
            <span className="text-[11px] flex-1 text-muted-foreground">Term & duration</span>
            <span className="text-[10px] text-muted-foreground">Review</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeuralAI;
