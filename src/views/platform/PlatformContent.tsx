import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  HomeImpactMetricCard,
  HomeImpactMetricsGrid,
} from "@/components/home/HomeImpactMetrics";
import type { LucideIcon } from "lucide-react";
import {
  PlatformFadeItem,
  PlatformHeroMotion,
  PlatformSection,
  PlatformStagger,
  PlatformStaggerItem,
} from "@/components/platform/PlatformMotion";
import PlatformDashboard from "@/components/visuals/PlatformDashboard";
import { useI18n } from "@/i18n/useI18n";
import { platformStaggerContainer, platformStaggerItem } from "@/lib/platformMotion";
import { ComplianceFrameworkLogos } from "@/components/ComplianceFrameworkLogos";
import { getPlatformCopy } from "@/views/platform/platformCopy";

export type PlatformContentProps = {
  isSubdomain?: boolean;
};

function HomeIndustryTile({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="home-industry-tile">
      <div className="home-strip-icon">
        <Icon className="h-5 w-5 text-[var(--teal)]" strokeWidth={1.75} aria-hidden />
      </div>
      <span className="home-industry-label">{label}</span>
    </div>
  );
}

function SectionIntro({
  label,
  title,
  subtitle,
}: {
  label?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="home-section-head mx-auto max-w-3xl text-center">
      {label ? (
        <p className="section-label section-label-teal justify-center">{label}</p>
      ) : null}
      <h2 className="heading mb-3 text-[var(--text-primary)]">{title}</h2>
      {subtitle ? (
        <p className="home-copy-muted home-section-lead mx-auto mt-0 mb-7 max-w-[58ch]">{subtitle}</p>
      ) : (
        <div className="mb-7" />
      )}
    </header>
  );
}

function HomeSolutionCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc?: string;
}) {
  return (
    <div className="home-solution-card">
      <div className="home-strip-icon">
        <Icon className="h-5 w-5 text-[var(--teal)]" strokeWidth={1.75} aria-hidden />
      </div>
      <h3 className="home-card-heading text-[var(--text-primary)]">{title}</h3>
      {desc ? <p className="home-copy min-h-0 flex-1">{desc}</p> : null}
    </div>
  );
}

const PlatformContent = ({ isSubdomain: _isSubdomain = false }: PlatformContentProps) => {
  const { locale } = useI18n();
  const en = locale === "en";
  const copy = getPlatformCopy(en);
  const reduceMotion = useReducedMotion();

  return (
    <div className="home-page platform-page">
      {/* ──────────── HERO ──────────── */}
      <section className="home-strip-standard platform-hero-strip">
        <div className="container-privanta platform-hero-layout">
          <PlatformHeroMotion className="platform-hero-copy">
            <h1 className={`display-hero text-[var(--text-primary)] ${copy.hero.titleClass}`}>
              {copy.hero.title}
            </h1>
            <p className="mt-3 text-lg font-medium text-[var(--teal)]">{copy.hero.tagline}</p>
            <p className="home-copy-muted mt-4 max-w-[58ch] text-base leading-relaxed">
              {copy.hero.body}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to="/contact#book-demo" className="btn-demo">
                {copy.hero.ctaPreview}
              </Link>
              <Link to="#platform-capabilities" className="btn-outline">
                {copy.hero.ctaExplore}
              </Link>
            </div>
          </PlatformHeroMotion>

          <PlatformHeroMotion className="platform-hero-dashboard min-w-0" delay={0.18}>
            <div className="relative">
              <PlatformDashboard />
              <div className="absolute end-4 top-4 rounded-full border border-[rgba(47,191,204,0.28)] bg-[rgba(11,15,26,0.85)] px-3 py-1 text-xs font-mono text-[var(--teal)]">
                {copy.hero.liveBadge}
              </div>
            </div>
          </PlatformHeroMotion>
        </div>
      </section>

      <div className="divider-gradient mx-auto max-w-[1280px] px-6 lg:px-10" />

      {/* ──────────── PLATFORM METRICS ──────────── */}
      <section className="home-strip-standard home-strip-impact" aria-label={copy.aria.highlights}>
        <div className="container-privanta">
          <HomeImpactMetricsGrid>
            {copy.stats.map((stat, index) => (
              <HomeImpactMetricCard key={stat.label} {...stat} countDelay={index * 0.1} />
            ))}
          </HomeImpactMetricsGrid>
        </div>
      </section>

      {/* ──────────── CORE CAPABILITIES ──────────── */}
      <PlatformSection
        id="platform-capabilities"
        className="home-strip-standard home-strip-solution scroll-mt-28"
      >
        <div className="container-privanta">
          <PlatformFadeItem>
            <SectionIntro
              title={copy.capabilities.title}
              subtitle={copy.capabilities.subtitle}
            />
          </PlatformFadeItem>
          <PlatformStagger className="home-intro-to-grid mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-6">
            {copy.capabilities.items.map((item) => (
              <PlatformStaggerItem key={item.title}>
                <HomeSolutionCard {...item} />
              </PlatformStaggerItem>
            ))}
          </PlatformStagger>
        </div>
      </PlatformSection>

      {/* ──────────── BUILT FOR CONTINUOUS GOVERNANCE ──────────── */}
      <PlatformSection className="section-surface home-strip-standard home-strip-how-it-works">
        <div className="container-privanta">
          <div className="home-how-it-grid">
            <PlatformFadeItem className="home-how-it-aside text-start">
              <h2 className="heading mb-3 text-[var(--text-primary)]">{copy.governance.title}</h2>
              <p className="home-copy-muted max-w-[42ch] text-base leading-relaxed">
                {copy.governance.body}
              </p>
            </PlatformFadeItem>

            <div className="home-how-stepper">
              <div className="home-how-stepper-line" aria-hidden />
              {reduceMotion ? (
                <ol className="relative z-[1] m-0 list-none space-y-6 p-0">
                  {copy.governance.steps.map((step) => (
                    <li key={step.n} className="home-how-step">
                      <span className="home-how-step-index" aria-hidden="true">
                        {step.n}
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <h3 className="home-how-step-title text-[var(--text-primary)]">
                          {step.title}
                        </h3>
                        <p className="home-copy-muted mt-1 text-sm leading-relaxed">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              ) : (
                <motion.ol
                  className="relative z-[1] m-0 list-none space-y-6 p-0"
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-64px" }}
                  variants={platformStaggerContainer}
                >
                  {copy.governance.steps.map((step) => (
                    <motion.li key={step.n} className="home-how-step" variants={platformStaggerItem}>
                      <span className="home-how-step-index" aria-hidden="true">
                        {step.n}
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <h3 className="home-how-step-title text-[var(--text-primary)]">
                          {step.title}
                        </h3>
                        <p className="home-copy-muted mt-1 text-sm leading-relaxed">{step.body}</p>
                      </div>
                    </motion.li>
                  ))}
                </motion.ol>
              )}
            </div>
          </div>
        </div>
      </PlatformSection>

      {/* ──────────── INDUSTRIES ──────────── */}
      <PlatformSection className="home-strip-industries">
        <div className="container-privanta">
          <PlatformFadeItem>
            <header className="home-section-head mx-auto mb-7 max-w-3xl text-center">
              <h2 className="heading mb-3 text-[var(--text-primary)]">{copy.industries.title}</h2>
            </header>
          </PlatformFadeItem>

          <PlatformStagger className="home-intro-to-grid mx-auto grid w-full max-w-5xl grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-4 lg:grid-cols-4 lg:gap-x-5">
            {copy.industries.items.map((item) => (
              <PlatformStaggerItem key={item.label}>
                <HomeIndustryTile {...item} />
              </PlatformStaggerItem>
            ))}
          </PlatformStagger>
        </div>
      </PlatformSection>

      {/* ──────────── FRAMEWORKS ──────────── */}
      <PlatformSection className="compliance-marquee-section home-strip-marquee">
        <div className="compliance-marquee-grid" aria-hidden />
        <div className="container-privanta relative">
          <PlatformFadeItem>
            <header className="home-section-head mx-auto max-w-3xl text-center">
              <h2 className="heading mb-3 text-[var(--text-primary)]">{copy.frameworks.title}</h2>
            </header>
          </PlatformFadeItem>
          <div className="compliance-marquee-line mx-auto mt-3 mb-7" />
          <PlatformFadeItem delay={0.12}>
            <ComplianceFrameworkLogos ariaLabel={copy.aria.frameworks} />
          </PlatformFadeItem>
        </div>
      </PlatformSection>

      {/* ──────────── FINAL CTA ──────────── */}
      <PlatformSection className="home-strip-standard relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/cta-bg.webp')" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(5,8,16,0.72) 0%, rgba(5,8,16,0.38) 45%, rgba(5,8,16,0.72) 85%, #050C12 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 50% 50%, transparent 40%, rgba(5,8,16,0.55) 100%)",
          }}
        />

        <div className="container-privanta relative z-10 text-center">
          <PlatformFadeItem>
            <div className="mx-auto mb-4 h-px w-20 bg-gradient-to-r from-transparent via-[var(--teal)] to-transparent" />
          </PlatformFadeItem>

          <PlatformFadeItem delay={0.08}>
            <h2
              className="type-h2-final-cta font-heading mx-auto mb-3 mt-4 max-w-3xl font-bold leading-tight text-white"
              style={{
                textShadow: "0 2px 24px rgba(0,0,0,0.6)",
              }}
            >
              {copy.cta.title}
            </h2>
          </PlatformFadeItem>

          <PlatformFadeItem delay={0.14}>
            <p
              className="mx-auto mb-8 max-w-[56ch] leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: "clamp(0.9rem,1.5vw,1.05rem)",
              }}
            >
              {copy.cta.body}
            </p>
          </PlatformFadeItem>

          <PlatformFadeItem delay={0.2}>
            <div className="mb-4 flex flex-wrap justify-center gap-3">
              <Link to="/contact#book-demo" className="btn-demo">
                {copy.cta.demo}
              </Link>
              <Link
                to="/contact"
                className="rounded-lg border px-6 py-2.5 text-sm font-semibold transition-[color,border-color,transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                {copy.cta.contact}
              </Link>
            </div>
          </PlatformFadeItem>

          <PlatformFadeItem delay={0.26}>
            <div className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-[var(--teal)] to-transparent" />
          </PlatformFadeItem>
        </div>
      </PlatformSection>
    </div>
  );
};

export default PlatformContent;
