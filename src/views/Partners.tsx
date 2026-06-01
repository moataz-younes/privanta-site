import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Handshake,
  Plug,
  Shield,
  Zap,
  BookOpen,
  Users,
  Globe2,
  Check,
  Building2,
  Network,
  GraduationCap,
  Target,
  Layers,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

/* ---------- Static Ecosystem Diagram ---------- */
const EcosystemDiagram = () => {
  const cx = 300;
  const cy = 280;
  const r = 210;
  const nodes = [
    { label: "SIEM" },
    { label: "IAM" },
    { label: "Cloud" },
    { label: "GRC" },
    { label: "Ticketing" },
    { label: "DLP" },
    { label: "MDM" },
    { label: "SaaS" },
  ];
  const points = nodes.map((n, i) => {
    const a = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
    return { ...n, x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r };
  });

  return (
    <svg viewBox="0 0 600 560" className="w-full h-auto">
      {[r + 50, r, r - 70, r - 140].map((rad, i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={rad}
          fill="none"
          stroke="hsl(var(--brand-cyan))"
          strokeOpacity={0.04 + i * 0.02}
          strokeDasharray="2 6"
        />
      ))}

      {points.map((p, i) => (
        <line
          key={`line-${i}`}
          x1={cx}
          y1={cy}
          x2={p.x}
          y2={p.y}
          stroke="hsl(var(--brand-cyan))"
          strokeOpacity={0.1}
          strokeWidth={0.8}
        />
      ))}

      {points.map((p, i) => (
        <g key={`node-${i}`}>
          <circle cx={p.x} cy={p.y} r={30} fill="hsl(var(--card))" stroke="hsl(var(--brand-cyan))" strokeOpacity={0.15} />
          <text
            x={p.x}
            y={p.y + 48}
            textAnchor="middle"
            fontSize="11"
            fontFamily="system-ui, sans-serif"
            fill="hsl(var(--muted-foreground))"
            letterSpacing="1"
          >
            {p.label.toUpperCase()}
          </text>
        </g>
      ))}

      <g>
        <circle cx={cx} cy={cy} r={56} fill="hsl(var(--background))" stroke="hsl(var(--brand-cyan))" strokeOpacity={0.3} />
        <circle cx={cx} cy={cy - 6} r={8} fill="hsl(var(--brand-cyan))" opacity={0.5} />
        <rect x={cx - 3} y={cy} width={6} height={14} fill="hsl(var(--brand-cyan))" opacity={0.5} />
        <text x={cx} y={cy + 32} textAnchor="middle" fontSize="9" fill="hsl(var(--brand-cyan))" letterSpacing="2" opacity={0.7}>
          PRIVANTA CORE
        </text>
      </g>
    </svg>
  );
};

/* ---------- Data ---------- */
const ecosystemPoints = [
  "Embedded integrations, not surface-level connections",
  "Built for regulated industries",
  "Designed for measurable, audit-ready outcomes",
];

const partnerTypes = [
  {
    icon: Cpu,
    tag: "Technology",
    title: "Technology Partners",
    desc: "Build integrations and extend Privanta capabilities.",
    points: [
      "Bi-directional APIs",
      "Real-time telemetry sharing",
      "Co-engineered integrations",
      "Marketplace distribution",
    ],
    useCase: "Power detection, automation, and intelligence across connected systems.",
  },
  {
    icon: Handshake,
    tag: "Consulting",
    title: "Consulting Partners",
    desc: "Deliver Privanta to enterprise clients.",
    points: [
      "Implementation & deployment",
      "Compliance program delivery",
      "AI governance integration",
      "Revenue-sharing opportunities",
    ],
    useCase: "Operationalize cybersecurity and compliance at scale.",
  },
];

const integrationPoints = [
  "Connects SIEM, IAM, Cloud, GRC, and Ticketing systems",
  "Webhook-first event architecture",
  "REST & GraphQL APIs",
  "SSO / SCIM ready",
];

const benefits = [
  {
    icon: Zap,
    title: "Faster Deployment",
    points: ["Pre-built connectors", "Reference architectures"],
  },
  {
    icon: Shield,
    title: "Trusted by Design",
    points: ["ISO 27001-aligned controls", "Secure data flows"],
  },
  {
    icon: GraduationCap,
    title: "Enablement & Training",
    points: ["Certifications across Cybersecurity, Privacy & AI"],
  },
  {
    icon: Users,
    title: "Co-Sell & Revenue",
    points: ["Joint pipeline", "Dedicated partner manager"],
  },
  {
    icon: Plug,
    title: "Open Platform",
    points: ["API-first architecture", "Webhook integrations"],
  },
  {
    icon: Globe2,
    title: "Global Reach",
    points: ["Serve regulated markets across EMEA, UK & LATAM"],
  },
];

const audience = [
  { icon: Shield, label: "Cybersecurity companies" },
  { icon: Network, label: "MSSPs" },
  { icon: BookOpen, label: "Compliance consultancies" },
  { icon: Cpu, label: "AI solution providers" },
  { icon: Building2, label: "Enterprise system integrators" },
];

const steps = [
  { n: "01", title: "Apply", desc: "Submit your profile and tell us how you serve regulated customers." },
  { n: "02", title: "Get matched", desc: "We align you to the right partner tier and motion." },
  { n: "03", title: "Enablement & onboarding", desc: "Hands-on training, certifications and reference architectures." },
  { n: "04", title: "Go-to-market launch", desc: "Joint pipeline, co-marketing, and active deal support." },
];

/* ---------- Reusable bits ---------- */
const SectionHeader = ({ kicker, title, accent }: { kicker: string; title: string; accent?: string }) => (
  <motion.div {...fade} className="max-w-2xl">
    <p className="text-brand-cyan text-xs font-semibold tracking-[0.12em] uppercase">{kicker}</p>
    <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold leading-tight">
      {title} {accent && <span className="text-gradient">{accent}</span>}
    </h2>
  </motion.div>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="mt-5 space-y-2.5">
    {items.map((t) => (
      <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
        <span className="mt-1 h-4 w-4 rounded-full bg-brand-cyan/15 ring-1 ring-brand-cyan/40 grid place-items-center shrink-0">
          <Check className="h-2.5 w-2.5 text-brand-cyan" />
        </span>
        <span className="leading-relaxed">{t}</span>
      </li>
    ))}
  </ul>
);

/* ---------- Page ---------- */
const Partners = () => {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-6 pb-10 md:pt-10 md:pb-14 overflow-hidden">
        <div className="container-privanta relative">
          <motion.div {...fade} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs tracking-[0.12em] uppercase text-brand-cyan/80">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan" />
              Partner Ecosystem
            </div>
            <h1 className="mt-4 font-display max-w-[20ch] font-bold leading-[1.1]">
              Build on Privanta. <br />
              <span className="text-gradient">Deliver trust at scale.</span>
            </h1>
            <p className="mt-5 text-base text-muted-foreground max-w-xl leading-relaxed">
              Join a partner ecosystem designed to help you deploy, scale, and prove cybersecurity and compliance outcomes.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button variant="hero" size="default">
                Become a Partner <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="default">Talk to Us</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT IS THE ECOSYSTEM */}
      <section className="container section-medium">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <SectionHeader kicker="What it is" title="An execution layer for" accent="cybersecurity, compliance & AI." />
          </div>
          <motion.div {...fade} className="lg:col-span-7 glass-strong rounded-3xl p-6">
            <p className="text-muted-foreground leading-relaxed">
              Privanta is not just a partner program. It's an execution platform that connects cybersecurity, privacy, and
              AI into one orchestrated layer, so partners can ship outcomes their customers can prove.
            </p>
            <BulletList items={ecosystemPoints} />
          </motion.div>
        </div>
      </section>

      {/* PARTNER TYPES */}
      <section className="container section-medium">
        <SectionHeader kicker="Partner types" title="Two paths." accent="One ecosystem." />

        <div className="mt-8 grid lg:grid-cols-2 gap-5">
          {partnerTypes.map((p, i) => (
            <motion.article
              key={p.tag}
              {...fade}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const }}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 overflow-hidden hover:border-white/10 transition-all"
            >
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-lg bg-gradient-brand/15 ring-1 ring-brand-cyan/20 grid place-items-center">
                    <p.icon className="h-4 w-4 text-brand-cyan" />
                  </div>
                  <span className="text-[10px] tracking-[0.12em] uppercase text-brand-cyan/70">{p.tag}</span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed text-sm">{p.desc}</p>

                <BulletList items={p.points} />

                <div className="mt-5 rounded-lg border border-brand-cyan/15 bg-brand-cyan/5 px-3 py-2 text-sm text-foreground/80 italic">
                  "{p.useCase}"
                </div>

                <div className="mt-5">
                  <Button variant="outline" size="sm">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* INTEGRATION ECOSYSTEM */}
      <section className="container section-medium">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div {...fade} className="lg:col-span-5">
            <p className="text-brand-cyan text-xs font-semibold tracking-[0.12em] uppercase">Integration ecosystem</p>
            <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold leading-tight">
              Privanta at the center. <span className="text-gradient">Everything connected.</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              One orchestration layer for the tools your customers already run, telemetry in, decisions out, no silos.
            </p>
            <BulletList items={integrationPoints} />
          </motion.div>

          <motion.div
            {...fade}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-7"
          >
            <motion.div {...fade} className="lg:col-span-7 rounded-2xl border border-white/5 bg-white/[0.02] p-6 overflow-hidden">
              <div className="relative">
                <EcosystemDiagram />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PARTNER BENEFITS */}
      <section className="container section-medium">
        <SectionHeader kicker="Benefits" title="Built for partners" accent="who execute." />

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              {...fade}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as const }}
              className="group relative rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-white/10 transition-all"
            >
              <div className="h-9 w-9 rounded-lg bg-gradient-brand/15 ring-1 ring-brand-cyan/20 grid place-items-center">
                <b.icon className="h-4 w-4 text-brand-cyan" />
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold">{b.title}</h3>
              <ul className="mt-2 space-y-1.5">
                {b.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-brand-cyan shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHO SHOULD PARTNER */}
      <section className="container section-medium">
        <SectionHeader kicker="Who should partner with us" title="Designed for those who" accent="ship trust." />

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {audience.map((a, i) => (
            <motion.div
              key={a.label}
              {...fade}
              transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as const }}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 text-center hover:border-white/10 transition-all"
            >
              <div className="mx-auto h-9 w-9 rounded-lg bg-gradient-brand/15 ring-1 ring-brand-cyan/20 grid place-items-center">
                <a.icon className="h-4 w-4 text-brand-cyan" />
              </div>
              <p className="mt-3 text-sm font-medium text-foreground/90">{a.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container section-medium">
        <SectionHeader kicker="How it works" title="Four steps from" accent="apply to launch." />

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              {...fade}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative rounded-xl border border-white/5 bg-white/[0.02] p-5 hover:border-white/10 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-2xl font-bold text-gradient">{s.n}</span>
                {i < steps.length - 1 && <ArrowRight className="h-4 w-4 text-brand-cyan/40" />}
              </div>
              <h3 className="mt-4 font-heading text-base font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container section-medium">
        <motion.div {...fade} className="relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-heading text-2xl md:text-3xl font-bold leading-tight">
                Join the <span className="text-gradient">Privanta Partner Network.</span>
              </h2>
              <p className="mt-3 text-muted-foreground max-w-lg text-sm">
                Start building, integrating, and delivering measurable outcomes in weeks, not months.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <Button variant="hero" size="default">
                Apply to Partner <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="default">Schedule a Call</Button>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Partners;
