import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Clock,
  Search,
  Shield,
  Fingerprint,
  Scale,
  BrainCircuit,
  Eye,
  Target,
  CheckCircle2,
  Sparkles,
  Mail,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

/* ---------------- DATA ---------------- */

type Category = "Cybersecurity" | "Cybercrime" | "Compliance" | "AI" | "OSINT";

const categories: { key: "all" | Category; label: string }[] = [
  { key: "all", label: "All" },
  { key: "Cybersecurity", label: "Cybersecurity" },
  { key: "Cybercrime", label: "Cybercrime" },
  { key: "Compliance", label: "Compliance" },
  { key: "AI", label: "AI" },
  { key: "OSINT", label: "OSINT" },
];

const catTint: Record<Category, string> = {
  Cybersecurity: "text-brand-cyan ring-brand-cyan/30",
  Cybercrime: "text-red-300 ring-red-400/30",
  Compliance: "text-emerald-300 ring-emerald-400/30",
  AI: "text-brand-purple-glow ring-brand-purple/30",
  OSINT: "text-brand-cyan-glow ring-brand-cyan/35",
};

const featured = {
  category: "AI" as Category,
  title: "Inside MAAT AI: how legal teams operationalize specialized models",
  excerpt:
    "General LLMs are confidently wrong. We break down how narrow, retrieval-grounded models become production-grade legal infrastructure.",
  author: "S. Rinaldi",
  role: "Head of AI Research",
  date: "Apr 24, 2026",
  read: "9 min",
  learn: [
    "How specialized legal models outperform general LLMs",
    "Retrieval architectures used inside MAAT AI",
    "Evaluation methods that survive adversarial probing",
  ],
  matters: [
    "Reduces hallucinations in regulated workflows",
    "Cuts review time by 60 to 80% in real deployments",
    "Creates defensible audit trails for legal evidence",
  ],
  applies: ["SOC teams", "Investigators", "Legal teams", "Enterprise compliance"],
};

type Article = {
  category: Category;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  read: string;
  learn: string[];
  matters: string[];
  applies: string[];
};

const articles: Article[] = [
  {
    category: "Cybersecurity",
    title: "Detection engineering for high-signal SOCs",
    excerpt: "From raw telemetry to alerts your analysts will actually action, without burning them out.",
    author: "L. Okafor",
    date: "Apr 22, 2026",
    read: "7 min",
    learn: ["Building a detection backlog", "Tuning rules with attacker context", "Measuring true alert quality"],
    matters: ["Reduces alert fatigue", "Shortens MTTD", "Improves analyst retention"],
    applies: ["SOC analysts", "Detection engineers", "MSSPs"],
  },
  {
    category: "Cybercrime",
    title: "Tracing financial fraud across mixers and bridges",
    excerpt: "A working playbook for investigators chasing laundered flows through modern crypto infrastructure.",
    author: "A. Moreau",
    date: "Apr 21, 2026",
    read: "11 min",
    learn: ["Cluster heuristics that still hold", "Bridging signals across chains", "Linking on-chain to off-chain identity"],
    matters: ["Improves attribution quality", "Strengthens evidentiary chains", "Accelerates asset recovery"],
    applies: ["Financial investigators", "Law enforcement", "AML teams"],
  },
  {
    category: "Compliance",
    title: "DPIAs that don't slow product teams down",
    excerpt: "Turn data protection impact assessments into a lightweight design conversation, not a checkbox.",
    author: "M. Haddad",
    date: "Apr 19, 2026",
    read: "6 min",
    learn: ["A 4-question DPIA framework", "Embedding privacy in sprint rituals", "Evidence patterns auditors trust"],
    matters: ["Cuts review cycles in half", "Reduces regulatory exposure", "Aligns product and legal"],
    applies: ["DPOs", "Product managers", "Privacy engineers"],
  },
  {
    category: "OSINT",
    title: "Source verification in the age of generative content",
    excerpt: "Generative media broke the easy heuristics. Here's the tradecraft that still works in 2026.",
    author: "A. Moreau",
    date: "Apr 17, 2026",
    read: "8 min",
    learn: ["Provenance signals worth trusting", "Cross-source corroboration patterns", "When to escalate to forensics"],
    matters: ["Prevents disinformation pivots", "Protects investigation integrity", "Supports legal admissibility"],
    applies: ["OSINT analysts", "Journalists", "Trust & safety teams"],
  },
  {
    category: "AI",
    title: "Evaluating legal LLMs without lying to yourself",
    excerpt: "Benchmarks lie. Golden sets and adversarial probing tell you what 'good' actually means.",
    author: "S. Rinaldi",
    date: "Apr 14, 2026",
    read: "10 min",
    learn: ["Designing legal golden sets", "Adversarial probing techniques", "Production evaluation loops"],
    matters: ["Catches silent regressions", "Quantifies real-world risk", "Builds executive trust in AI"],
    applies: ["AI engineers", "Legal ops", "Risk officers"],
  },
  {
    category: "Cybersecurity",
    title: "Zero-trust beyond the slide deck",
    excerpt: "What a real zero-trust rollout looks like inside a 2,000-person regulated business.",
    author: "L. Okafor",
    date: "Apr 11, 2026",
    read: "9 min",
    learn: ["Phasing identity-first migrations", "Segmenting legacy systems safely", "Measuring trust posture over time"],
    matters: ["Limits lateral movement", "Reduces breach blast radius", "Aligns with NIS2 expectations"],
    applies: ["CISOs", "Security architects", "Platform teams"],
  },
];

const pillars = [
  {
    icon: Shield,
    title: "Cybersecurity",
    items: ["Detection engineering", "Threat analysis", "Incident response", "Zero trust"],
  },
  {
    icon: Fingerprint,
    title: "Cybercrime & Investigations",
    items: ["Digital investigations", "OSINT workflows", "Fraud tracking", "Attribution techniques"],
  },
  {
    icon: Scale,
    title: "Legal & Compliance",
    items: ["Digital evidence handling", "Data protection laws", "ISO 27001 & governance", "Audit readiness"],
  },
  {
    icon: BrainCircuit,
    title: "AI & Intelligence",
    items: ["Legal AI systems (MAAT AI)", "Model evaluation", "AI risk detection", "Automation in compliance"],
  },
];

/* ---------------- VISUALS ---------------- */

const Cover = ({ category, large = false }: { category: Category; large?: boolean }) => {
  const seed =
    category === "Cybersecurity" ? 1 : category === "Compliance" ? 2 : category === "AI" ? 3 : category === "Cybercrime" ? 4 : 5;
  const grad =
    category === "AI"
      ? "from-brand-purple/40 via-brand-blue/30 to-brand-cyan/40"
      : category === "Compliance"
        ? "from-emerald-700/30 via-brand-deep/40 to-brand-cyan/30"
        : category === "OSINT"
          ? "from-brand-deep/45 via-background to-brand-cyan/30"
          : category === "Cybercrime"
            ? "from-red-900/40 via-brand-deep/50 to-brand-cyan/20"
            : "from-brand-cyan/40 via-brand-blue/30 to-brand-deep/50";
  return (
    <div className={`relative overflow-hidden ${large ? "h-72 md:h-96" : "h-44"} rounded-2xl ring-1 ring-brand-cyan/15`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${grad}`} />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 400 240" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`l${seed}`} x1="0" x2="1">
            <stop offset="0" stopColor="hsl(var(--brand-cyan))" stopOpacity="0" />
            <stop offset="0.5" stopColor="hsl(var(--brand-cyan))" stopOpacity="0.7" />
            <stop offset="1" stopColor="hsl(var(--brand-cyan))" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 6 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${60 + i * 25 + seed * 4} Q 100 ${30 + i * 28} 200 ${70 + i * 22} T 400 ${60 + i * 26}`}
            fill="none"
            stroke={`url(#l${seed})`}
            strokeWidth={i === 2 ? 1.4 : 0.6}
            strokeOpacity={0.4 + i * 0.08}
          />
        ))}
        {/* keyhole motif */}
        <g transform={`translate(${large ? 320 : 330}, ${large ? 60 : 40})`} opacity="0.5">
          <circle r="10" fill="none" stroke="hsl(var(--brand-cyan))" strokeWidth="1" />
          <path d="M -2 4 L -3 14 L 3 14 L 2 4 Z" fill="hsl(var(--brand-cyan))" opacity="0.6" />
        </g>
        <circle cx="80" cy="180" r="2" fill="hsl(var(--brand-cyan))">
          <animate attributeName="opacity" values="1;0.2;1" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
      <div className="absolute -bottom-px inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/60 to-transparent" />
      <div className="absolute top-3 left-3">
        <span
          className={`text-[10px] tracking-[0.25em] uppercase glass px-2.5 py-1 rounded-full ring-1 ${catTint[category]}`}
        >
          {category}
        </span>
      </div>
    </div>
  );
};

const Avatar = ({ name }: { name: string }) => (
  <div className="h-7 w-7 rounded-full bg-gradient-brand/20 ring-1 ring-brand-cyan/30 grid place-items-center text-[10px] font-mono font-semibold">
    {name.split(" ").map((p) => p[0]).join("")}
  </div>
);

const MicroList = ({
  icon: Icon,
  label,
  items,
  tint = "text-brand-cyan",
}: {
  icon: React.ElementType;
  label: string;
  items: string[];
  tint?: string;
}) => (
  <div>
    <div className={`flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase ${tint}`}>
      <Icon className="h-3 w-3" />
      {label}
    </div>
    <ul className="mt-2 space-y-1.5">
      {items.map((it) => (
        <li key={it} className="flex gap-2 text-xs text-muted-foreground leading-relaxed">
          <span className="mt-1 h-1 w-1 rounded-full bg-brand-cyan/70 shrink-0" />
          {it}
        </li>
      ))}
    </ul>
  </div>
);

/* ---------------- PAGE ---------------- */

const Blog = () => {
  const [active, setActive] = useState<"all" | Category>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const okCat = active === "all" || a.category === active;
      const okQ =
        !query.trim() ||
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase());
      return okCat && okQ;
    });
  }, [active, query]);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pb-8 pt-2 md:pt-6">
        <div className="absolute inset-0 bg-grid opacity-[0.08] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />

        <div className="container relative">
          <motion.div {...fade} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs tracking-widest uppercase text-brand-cyan/90">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-glow-pulse" />
              Privanta Field Intelligence
            </div>
            <h1 className="display-hero mt-6 max-w-[15ch] text-[var(--text-primary)]">
              Field Intelligence from the <span className="text-gradient">Trust Frontier.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-[var(--text-secondary)]">
              Operational insights on cybersecurity, cybercrime, compliance, and AI, written by practitioners working on
              real systems and real investigations.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#latest">
                  Explore Articles <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="#newsletter">
                  Subscribe <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="container pb-10 md:pb-14">
        <motion.article
          {...fade}
          className="group relative grid lg:grid-cols-12 gap-8 items-stretch glass-strong rounded-3xl p-6 overflow-hidden hover:border-brand-cyan/40 transition-all duration-500"
        >
          <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-brand-cyan/10 blur-3xl" />
          <div className="lg:col-span-7 relative">
            <Cover category={featured.category} large />
          </div>
          <div className="lg:col-span-5 relative flex flex-col">
            <div className="flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase">
              <span className="text-brand-cyan">Featured</span>
              <span className="h-px w-10 bg-brand-cyan/40" />
              <span className="text-muted-foreground">{featured.category}</span>
            </div>
            <h2 className="mt-5 font-heading text-3xl md:text-4xl font-bold leading-tight group-hover:text-gradient transition-all">
              {featured.title}
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{featured.excerpt}</p>

            <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2.5">
                <Avatar name={featured.author} />
                <div>
                  <div className="text-foreground text-sm leading-tight">{featured.author}</div>
                  <div className="text-xs text-muted-foreground">{featured.role}</div>
                </div>
              </div>
              <span className="h-4 w-px bg-border" />
              <span className="inline-flex items-center gap-1.5 text-xs">
                <Calendar className="h-3.5 w-3.5" />
                {featured.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs">
                <Clock className="h-3.5 w-3.5" />
                {featured.read}
              </span>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-5 p-5 rounded-2xl bg-background/40 ring-1 ring-border">
              <MicroList icon={Sparkles} label="What you'll learn" items={featured.learn} />
              <MicroList icon={Target} label="Why it matters" items={featured.matters} tint="text-brand-purple-glow" />
              <div className="sm:col-span-2">
                <MicroList icon={Eye} label="Where it applies" items={featured.applies} tint="text-emerald-300" />
              </div>
            </div>

            <div className="mt-6">
              <Button variant="hero" size="sm">
                Read article <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.article>
      </section>

      {/* FILTER + SEARCH */}
      <section id="latest" className="container pb-8">
        <motion.div {...fade} className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => {
              const isActive = active === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => setActive(c.key)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs tracking-wide transition-all ${
                    isActive
                      ? "bg-gradient-brand text-primary-foreground shadow-glow"
                      : "glass text-muted-foreground hover:text-foreground hover:border-brand-cyan/40"
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search intelligence…"
              className="w-full rounded-full glass-strong pl-10 pr-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-cyan/40 transition-all"
            />
          </div>
        </motion.div>
      </section>

      {/* LATEST INTELLIGENCE */}
      <section className="container pb-14">
        <div className="mb-8 flex items-end justify-between flex-wrap gap-4">
          <motion.div {...fade}>
            <p className="text-brand-cyan text-xs font-semibold tracking-[0.2em] uppercase">Latest Intelligence</p>
            <h2 className="heading mt-3 text-[var(--text-primary)]">
              Fresh from the <span className="text-gradient">field.</span>
            </h2>
          </motion.div>
          <span className="text-xs text-muted-foreground">{filtered.length} reports</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((a, i) => (
              <motion.article
                layout
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] as const }}
                className="group flex flex-col rounded-2xl p-2 hover:-translate-y-1 hover:shadow-elevated transition-all duration-500 cursor-pointer"
              >
                <Cover category={a.category} />
                <div className="mt-5 flex-1 flex flex-col px-1">
                  <h3 className="font-heading text-xl font-semibold leading-snug group-hover:text-gradient transition-all">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{a.excerpt}</p>

                  <div className="mt-4 space-y-3.5 p-4 rounded-xl bg-background/40 ring-1 ring-border/70">
                    <MicroList icon={Sparkles} label="What you'll learn" items={a.learn.slice(0, 3)} />
                    <MicroList icon={Target} label="Why it matters" items={a.matters.slice(0, 2)} tint="text-brand-purple-glow" />
                    <MicroList icon={Eye} label="Where it applies" items={a.applies.slice(0, 3)} tint="text-emerald-300" />
                  </div>

                  <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-2.5">
                      <Avatar name={a.author} />
                      <span className="text-foreground/90">{a.author}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>{a.date}</span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {a.read}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* CONTENT PILLARS */}
      <section className="container pb-14">
        <motion.div {...fade} className="max-w-2xl">
          <p className="text-brand-cyan text-xs font-semibold tracking-[0.2em] uppercase">Content Pillars</p>
          <h2 className="heading mt-3 text-[var(--text-primary)]">
            What we <span className="text-gradient">investigate.</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              {...fade}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as const }}
              className="glass-strong rounded-2xl p-6 hover:border-brand-cyan/40 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-brand-cyan/10 ring-1 ring-brand-cyan/30 grid place-items-center text-brand-cyan">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-xl font-semibold">{p.title}</h3>
              </div>
              <ul className="mt-5 grid sm:grid-cols-2 gap-2.5">
                {p.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-brand-cyan mt-0.5 shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUCT CONNECTION */}
      <section className="container pb-14">
        <motion.div {...fade} className="relative overflow-hidden rounded-3xl glass-strong p-6">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-purple/15 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-brand-cyan/15 blur-3xl" />
          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-brand-cyan text-xs font-semibold tracking-[0.2em] uppercase">Built with Privanta</p>
              <h2 className="heading mt-3 text-[var(--text-primary)]">
                Insights derived from <span className="text-gradient">real deployments.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Every report is grounded in operational use of our products inside enterprises, SOCs, and investigation teams.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "MAAT AI powers legal intelligence and document analysis",
                  "Privanta Platform enables monitoring, detection, and compliance automation",
                  "Content reflects real-world enterprise use cases",
                ].map((it) => (
                  <li key={it} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-brand-cyan mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{it}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button variant="hero" asChild>
                  <Link to="/maat">
                    Explore MAAT AI <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="glass" asChild>
                  <Link to="/platform">
                    View Platform <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: BrainCircuit, label: "MAAT AI", sub: "Legal intelligence" },
                  { icon: Shield, label: "Platform", sub: "Detection & compliance" },
                  { icon: Fingerprint, label: "Investigations", sub: "Case-grade evidence" },
                  { icon: Scale, label: "Governance", sub: "Audit-ready controls" },
                ].map((c) => (
                  <div
                    key={c.label}
                    className="rounded-2xl glass p-4 ring-1 ring-brand-cyan/15 hover:ring-brand-cyan/40 transition-all"
                  >
                    <c.icon className="h-5 w-5 text-brand-cyan" />
                    <div className="mt-3 font-heading font-semibold">{c.label}</div>
                    <div className="text-xs text-muted-foreground">{c.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* AUTHOR CREDIBILITY */}
      <section className="container pb-14">
        <motion.div {...fade} className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <p className="text-brand-cyan text-xs font-semibold tracking-[0.2em] uppercase">Author Credibility</p>
            <h2 className="heading mt-3 text-[var(--text-primary)]">
              Written by <span className="text-gradient">practitioners.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              No ghostwriters. No content mills. Every piece is signed by the people doing the work.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3">
            {[
              { icon: Shield, label: "Security engineers" },
              { icon: Fingerprint, label: "Digital investigators" },
              { icon: BrainCircuit, label: "AI researchers" },
              { icon: Scale, label: "Compliance specialists" },
            ].map((p) => (
              <div key={p.label} className="glass rounded-xl p-4 flex items-center gap-3 hover:border-brand-cyan/40 transition-all">
                <div className="h-10 w-10 rounded-lg bg-brand-cyan/10 ring-1 ring-brand-cyan/30 grid place-items-center text-brand-cyan">
                  <p.icon className="h-5 w-5" />
                </div>
                <div className="font-medium">{p.label}</div>
                <Users className="h-4 w-4 text-muted-foreground ml-auto" />
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* NEWSLETTER */}
      <section id="newsletter" className="container pb-14">
        <motion.div {...fade} className="relative overflow-hidden rounded-3xl p-6 glass-strong">
          <div className="absolute inset-0 bg-gradient-brand opacity-[0.07]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-brand-cyan to-transparent" />
          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-brand-cyan text-xs font-semibold tracking-[0.2em] uppercase">Newsletter</p>
              <h2 className="heading mt-3 text-[var(--text-primary)]">
                Get <span className="text-gradient">Field Intelligence.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                One high-signal insight every two weeks. No noise. No fluff.
              </p>
              <ul className="mt-5 grid sm:grid-cols-3 gap-2 text-sm">
                {["No spam", "No tracking", "Only practitioner insights"].map((it) => (
                  <li key={it} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-brand-cyan" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <form className="lg:col-span-5 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-xl bg-background/40 ring-1 ring-border focus:ring-brand-cyan/50 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none transition-all"
              />
              <Button variant="hero" type="submit">
                Subscribe <ArrowUpRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="container pb-14 md:pb-16">
        <motion.div {...fade} className="text-center max-w-2xl mx-auto">
          <h2 className="heading text-[var(--text-primary)]">
            Turn insight into <span className="text-gradient">execution.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Move from reading the field to operating in it, with products built for security, compliance, and AI at scale.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button variant="hero" size="lg" asChild>
              <Link to="/products">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <Link to="/contact">
                Request Demo <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Blog;
