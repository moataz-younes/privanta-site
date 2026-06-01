import { useEffect, useRef } from "react";

const SecurityVisual = () => {
  const radarRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    let frame = 0;
    let raf: number;
    const spin = () => {
      frame = (frame + 0.4) % 360;
      if (radarRef.current) {
        const rad = (frame * Math.PI) / 180;
        const x2 = 250 + 108 * Math.cos(rad);
        const y2 = 250 + 108 * Math.sin(rad);
        radarRef.current.setAttribute("x2", String(x2));
        radarRef.current.setAttribute("y2", String(y2));
      }
      raf = requestAnimationFrame(spin);
    };
    raf = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative select-none" style={{ width: "100%", maxWidth: 500, aspectRatio: "1" }}>
      <style>{`
        @keyframes rot-cw   { to { transform: rotate(360deg);  transform-origin: 250px 250px; } }
        @keyframes rot-ccw  { to { transform: rotate(-360deg); transform-origin: 250px 250px; } }
        @keyframes rot-cw-s { to { transform: rotate(360deg);  transform-origin: 250px 250px; } }
        @keyframes dash-flow {
          0%   { stroke-dashoffset: 400; }
          100% { stroke-dashoffset: 0;   }
        }
        @keyframes dash-flow-r {
          0%   { stroke-dashoffset: 0;   }
          100% { stroke-dashoffset: 400; }
        }
        @keyframes blink-node {
          0%,100% { opacity: 0.25; r: 3; }
          50%     { opacity: 1;    r: 5; }
        }
        @keyframes blink-node2 {
          0%,100% { opacity: 1;    r: 4; }
          50%     { opacity: 0.3;  r: 2.5; }
        }
        @keyframes float-up {
          0%,100% { transform: translateY(0px);   }
          50%     { transform: translateY(-6px);   }
        }
        @keyframes shield-pulse {
          0%,100% { opacity: 0.18; }
          50%     { opacity: 0.45; }
        }
        @keyframes scan-fade {
          0%   { opacity: 0.55; }
          80%  { opacity: 0.1;  }
          100% { opacity: 0;    }
        }
        .rot-cw-fast { animation: rot-cw  8s linear infinite; transform-box: fill-box; transform-origin: center; }
        .rot-cw-med  { animation: rot-cw 18s linear infinite; transform-box: fill-box; transform-origin: center; }
        .rot-cw-slow { animation: rot-cw-s 32s linear infinite; transform-box: fill-box; transform-origin: center; }
        .rot-ccw-med { animation: rot-ccw 14s linear infinite; transform-box: fill-box; transform-origin: center; }
        .rot-ccw-slow{ animation: rot-ccw 40s linear infinite; transform-box: fill-box; transform-origin: center; }
        .float-vis   { animation: float-up 5s ease-in-out infinite; }
      `}</style>

      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="float-vis w-full h-auto"
        aria-hidden="true"
      >
        <defs>
          {/* Gradients */}
          <radialGradient id="glow-center" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#2FBFCC" stopOpacity="0.25" />
            <stop offset="60%"  stopColor="#7C5CFF" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#000"    stopOpacity="0" />
          </radialGradient>
          <radialGradient id="shield-grad" cx="50%" cy="40%" r="60%">
            <stop offset="0%"  stopColor="#2FBFCC" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#17306C" stopOpacity="1" />
          </radialGradient>
          <radialGradient id="gold-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#D4AF37" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="node-teal" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#2FBFCC" stopOpacity="1" />
            <stop offset="100%" stopColor="#2FBFCC" stopOpacity="0.2" />
          </radialGradient>
          <radialGradient id="node-purple" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="#8B7CFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#8B7CFF" stopOpacity="0.1" />
          </radialGradient>
          <linearGradient id="ring-teal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#2FBFCC" stopOpacity="0.7" />
            <stop offset="50%"  stopColor="#2FBFCC" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#2FBFCC" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="ring-purple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#8B7CFF" stopOpacity="0.7" />
            <stop offset="50%"  stopColor="#8B7CFF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#8B7CFF" stopOpacity="0.6" />
          </linearGradient>
          <filter id="blur-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="blur-soft" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <clipPath id="radar-clip">
            <circle cx="250" cy="250" r="110" />
          </clipPath>
        </defs>

        {/* ── Background ambient glow ── */}
        <circle cx="250" cy="250" r="200" fill="url(#glow-center)" />

        {/* ── Outermost dashed ring (slow CW) ── */}
        <circle
          className="rot-ccw-slow"
          cx="250" cy="250" r="218"
          stroke="#2FBFCC" strokeOpacity="0.12" strokeWidth="1"
          strokeDasharray="4 10"
        />

        {/* ── Outer solid ring with tick marks ── */}
        <circle
          cx="250" cy="250" r="200"
          stroke="#2FBFCC" strokeOpacity="0.18" strokeWidth="0.8"
        />
        {/* 24 tick marks around outer ring */}
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * 360) / 24;
          const rad = (a * Math.PI) / 180;
          const inner = i % 6 === 0 ? 186 : i % 3 === 0 ? 190 : 193;
          const outer = 200;
          return (
            <line
              key={i}
              x1={250 + inner * Math.cos(rad)} y1={250 + inner * Math.sin(rad)}
              x2={250 + outer * Math.cos(rad)} y2={250 + outer * Math.sin(rad)}
              stroke="#2FBFCC"
              strokeOpacity={i % 6 === 0 ? 0.6 : i % 3 === 0 ? 0.4 : 0.2}
              strokeWidth={i % 6 === 0 ? 1.5 : 0.8}
            />
          );
        })}

        {/* ── Mid ring (gradient, CCW) ── */}
        <circle
          className="rot-ccw-med"
          cx="250" cy="250" r="165"
          stroke="url(#ring-purple)" strokeWidth="1.2"
          strokeDasharray="120 20 40 20"
        />

        {/* ── Inner orbit ring (CW fast) ── */}
        <circle
          className="rot-cw-fast"
          cx="250" cy="250" r="130"
          stroke="url(#ring-teal)" strokeWidth="1"
          strokeDasharray="60 15 30 15"
        />

        {/* ── Circuit paths (background level) ── */}
        {/* horizontal data line left */}
        <path
          d="M 50 250 H 120 V 200 H 142"
          stroke="#2FBFCC" strokeOpacity="0.25" strokeWidth="1"
          strokeDasharray="8 6"
          style={{ animation: "dash-flow 3s linear infinite" }}
        />
        {/* horizontal data line right */}
        <path
          d="M 450 250 H 380 V 300 H 358"
          stroke="#2FBFCC" strokeOpacity="0.25" strokeWidth="1"
          strokeDasharray="8 6"
          style={{ animation: "dash-flow-r 3.5s linear infinite" }}
        />
        {/* vertical data line top */}
        <path
          d="M 250 50 V 120 H 300 V 142"
          stroke="#8B7CFF" strokeOpacity="0.22" strokeWidth="1"
          strokeDasharray="8 6"
          style={{ animation: "dash-flow 4s linear infinite 0.5s" }}
        />
        {/* vertical data line bottom */}
        <path
          d="M 250 450 V 380 H 200 V 358"
          stroke="#8B7CFF" strokeOpacity="0.22" strokeWidth="1"
          strokeDasharray="8 6"
          style={{ animation: "dash-flow-r 4.5s linear infinite 1s" }}
        />
        {/* diagonal circuit top-right */}
        <path
          d="M 400 100 L 340 160 H 310 V 178"
          stroke="#D4AF37" strokeOpacity="0.18" strokeWidth="0.8"
          strokeDasharray="6 8"
          style={{ animation: "dash-flow 5s linear infinite 0.8s" }}
        />
        {/* diagonal circuit bottom-left */}
        <path
          d="M 100 400 L 160 340 H 190 V 322"
          stroke="#D4AF37" strokeOpacity="0.18" strokeWidth="0.8"
          strokeDasharray="6 8"
          style={{ animation: "dash-flow-r 5.5s linear infinite 1.2s" }}
        />

        {/* ── Orbital connector lines (node → center) ── */}
        {[0, 60, 120, 180, 240, 300].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const nx = 250 + 130 * Math.cos(rad);
          const ny = 250 + 130 * Math.sin(rad);
          return (
            <line
              key={i}
              x1="250" y1="250" x2={nx} y2={ny}
              stroke={i % 2 === 0 ? "#2FBFCC" : "#8B7CFF"}
              strokeOpacity="0.15" strokeWidth="0.7"
            />
          );
        })}

        {/* ── 6 orbital nodes (fixed positions, each with its own blink) ── */}
        {[
          { deg: 0,   delay: "0s",    color: "url(#node-teal)",   label: "PDPL" },
          { deg: 60,  delay: "0.5s",  color: "url(#node-purple)", label: "ISO" },
          { deg: 120, delay: "1s",    color: "url(#node-teal)",   label: "NCA" },
          { deg: 180, delay: "1.5s",  color: "url(#node-purple)", label: "GDPR" },
          { deg: 240, delay: "2s",    color: "url(#node-teal)",   label: "SAMA" },
          { deg: 300, delay: "2.5s",  color: "url(#node-purple)", label: "SOC2" },
        ].map(({ deg, delay, color, label }, i) => {
          const rad = (deg * Math.PI) / 180;
          const nx = 250 + 130 * Math.cos(rad);
          const ny = 250 + 130 * Math.sin(rad);
          return (
            <g key={i}>
              {/* outer halo */}
              <circle
                cx={nx} cy={ny} r="10"
                fill={i % 2 === 0 ? "#2FBFCC" : "#8B7CFF"} fillOpacity="0.08"
                style={{ animation: `blink-node 2.5s ease-in-out infinite ${delay}` }}
              />
              {/* inner dot */}
              <circle
                cx={nx} cy={ny} r="4"
                fill={color}
                style={{ animation: `blink-node2 2.5s ease-in-out infinite ${delay}` }}
              />
              {/* label */}
              <text
                x={nx + (nx > 250 ? 12 : nx < 250 ? -12 : 0)}
                y={ny + (ny > 250 ? 12 : ny < 250 ? -8 : 4)}
                textAnchor={nx > 260 ? "start" : nx < 240 ? "end" : "middle"}
                fontSize="7.5"
                fontFamily="'Fira Code', monospace"
                fontWeight="500"
                fill={i % 2 === 0 ? "#2FBFCC" : "#8B7CFF"}
                fillOpacity="0.75"
              >{label}</text>
            </g>
          );
        })}

        {/* ── Radar sweep (JS-driven rotation) ── */}
        <g clipPath="url(#radar-clip)">
          {/* sweep gradient wedge — simulated with a conic-ish radial */}
          <circle
            cx="250" cy="250" r="110"
            fill="none"
            stroke="#2FBFCC"
            strokeOpacity="0"
          />
          <line
            ref={radarRef}
            x1="250" y1="250"
            x2="358" y2="250"
            stroke="#2FBFCC"
            strokeOpacity="0.7"
            strokeWidth="1.5"
          />
          {/* trailing fade arc (4 segments at decreasing opacity) */}
          {[0.45, 0.28, 0.15, 0.06].map((op, i) => (
            <circle
              key={i}
              cx="250" cy="250" r={110 - i * 2}
              stroke="#2FBFCC"
              strokeOpacity={op * 0.3}
              strokeWidth="110"
              fill="none"
              strokeDasharray={`${(15 + i * 10)} ${700}`}
            />
          ))}
        </g>
        {/* radar rings */}
        {[35, 70, 110].map((r) => (
          <circle key={r} cx="250" cy="250" r={r}
            stroke="#2FBFCC" strokeOpacity="0.1" strokeWidth="0.6" />
        ))}

        {/* ── Shield glow (behind shield) ── */}
        <ellipse
          cx="250" cy="255" rx="48" ry="54"
          fill="#2FBFCC" fillOpacity="0.1"
          filter="url(#blur-soft)"
          style={{ animation: "shield-pulse 3s ease-in-out infinite" }}
        />

        {/* ── Central shield shape ── */}
        {/* Shield outline */}
        <path
          d="M250 202 L284 215 L284 244 Q284 272 250 288 Q216 272 216 244 L216 215 Z"
          fill="url(#shield-grad)"
          fillOpacity="0.92"
          stroke="#2FBFCC"
          strokeOpacity="0.7"
          strokeWidth="1.5"
          filter="url(#blur-glow)"
        />
        {/* Shield inner border */}
        <path
          d="M250 210 L278 221 L278 244 Q278 267 250 281 Q222 267 222 244 L222 221 Z"
          fill="none"
          stroke="#2FBFCC"
          strokeOpacity="0.3"
          strokeWidth="0.8"
        />
        {/* Lock body */}
        <rect
          x="240" y="250" width="20" height="16" rx="2"
          fill="#0B0F1A" fillOpacity="0.85"
          stroke="#2FBFCC" strokeOpacity="0.8" strokeWidth="1.2"
        />
        {/* Lock shackle */}
        <path
          d="M243 250 V244 Q243 238 250 238 Q257 238 257 244 V250"
          fill="none"
          stroke="#2FBFCC" strokeOpacity="0.9" strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Lock keyhole */}
        <circle cx="250" cy="257" r="2.5" fill="#2FBFCC" fillOpacity="0.9" />
        <rect x="249" y="257" width="2" height="4" rx="1" fill="#2FBFCC" fillOpacity="0.9" />

        {/* ── Corner decorations ── */}
        {/* top-left bracket */}
        <path d="M 55 80 H 80 V 55" stroke="#2FBFCC" strokeOpacity="0.3" strokeWidth="1.2" fill="none" />
        {/* top-right bracket */}
        <path d="M 445 80 H 420 V 55" stroke="#2FBFCC" strokeOpacity="0.3" strokeWidth="1.2" fill="none" />
        {/* bottom-left bracket */}
        <path d="M 55 420 H 80 V 445" stroke="#8B7CFF" strokeOpacity="0.3" strokeWidth="1.2" fill="none" />
        {/* bottom-right bracket */}
        <path d="M 445 420 H 420 V 445" stroke="#8B7CFF" strokeOpacity="0.3" strokeWidth="1.2" fill="none" />

        {/* ── Corner data nodes ── */}
        <circle cx="72" cy="68" r="3.5" fill="#2FBFCC" fillOpacity="0.5"
          style={{ animation: "blink-node 3s ease-in-out infinite" }} />
        <circle cx="428" cy="68" r="3.5" fill="#2FBFCC" fillOpacity="0.5"
          style={{ animation: "blink-node 3s ease-in-out infinite 0.7s" }} />
        <circle cx="72" cy="432" r="3.5" fill="#8B7CFF" fillOpacity="0.5"
          style={{ animation: "blink-node 3s ease-in-out infinite 1.4s" }} />
        <circle cx="428" cy="432" r="3.5" fill="#8B7CFF" fillOpacity="0.5"
          style={{ animation: "blink-node 3s ease-in-out infinite 2.1s" }} />

        {/* ── Status labels ── */}
        <text x="72" y="84" fontSize="6" fontFamily="'Fira Code', monospace"
          fill="#2FBFCC" fillOpacity="0.5">SYS</text>
        <text x="408" y="84" fontSize="6" fontFamily="'Fira Code', monospace"
          fill="#2FBFCC" fillOpacity="0.5">SEC</text>
        <text x="58" y="448" fontSize="6" fontFamily="'Fira Code', monospace"
          fill="#8B7CFF" fillOpacity="0.5">GRC</text>
        <text x="408" y="448" fontSize="6" fontFamily="'Fira Code', monospace"
          fill="#8B7CFF" fillOpacity="0.5">AI</text>

        {/* ── Gold accent: small compass rose at top center ── */}
        <g transform="translate(250, 52)">
          {[0, 90, 180, 270].map((a) => (
            <line
              key={a}
              x1="0" y1="0"
              x2={8 * Math.cos(((a - 90) * Math.PI) / 180)}
              y2={8 * Math.sin(((a - 90) * Math.PI) / 180)}
              stroke="#D4AF37" strokeOpacity="0.5" strokeWidth="1"
            />
          ))}
          <circle cx="0" cy="0" r="2.5" fill="#D4AF37" fillOpacity="0.6" />
        </g>

        {/* ── Floating particles (sparse — supports hierarchy, not clutter) ── */}
        {[
          { x: 110, y: 140, d: "0s" },
          { x: 390, y: 160, d: "1s" },
          { x: 130, y: 360, d: "2s" },
          { x: 370, y: 380, d: "1.5s" },
        ].map(({ x, y, d }, i) => (
          <circle
            key={i} cx={x} cy={y} r="1.8"
            fill={i % 3 === 0 ? "#D4AF37" : i % 3 === 1 ? "#2FBFCC" : "#8B7CFF"}
            fillOpacity="0.55"
            style={{ animation: `blink-node ${2.5 + (i % 3) * 0.5}s ease-in-out infinite ${d}` }}
          />
        ))}
      </svg>
    </div>
  );
};

export default SecurityVisual;
