import { Globe2, Mail, Plug } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import {
  PlatformFadeItem,
  PlatformHeroMotion,
  PlatformSection,
  PlatformStagger,
  PlatformStaggerItem,
} from "@/components/platform/PlatformMotion";
import { useI18n } from "@/i18n/useI18n";
import { useCountUp } from "@/hooks/useCountUp";
import { getMainSiteUrl } from "@/lib/siteUrls";
import type { HomeImpactMetricItem } from "@/components/home/HomeImpactMetrics";
import {
  formatMaatMetric,
  maatMetricMin,
  parseMaatMetric,
} from "@/views/maat/maatMetrics";
import { MaatDashboardMockup } from "@/components/maat/MaatDashboardMockup";
import {
  getMaatCopy,
  MAAT_HERO_COVER_SRC,
  MAAT_LOGO_SRC,
  type MaatMetricItem,
  type MaatRegionCountry,
} from "@/views/maat/maatCopy";

export type MaatContentProps = {
  isSubdomain?: boolean;
};

function MaatSectionRule() {
  return (
    <PlatformFadeItem>
      <div className="maat-section-rule container-privanta" aria-hidden />
    </PlatformFadeItem>
  );
}

function MaatCountryFlag({ code, title }: { code: string; title: string }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      alt=""
      title={title}
      className="maat-country-flag"
      width={28}
      height={20}
      loading="lazy"
      decoding="async"
      aria-hidden
    />
  );
}

function MaatAnimatedMetric({
  value,
  className,
  en,
}: {
  value: string;
  className?: string;
  en: boolean;
}) {
  const parsed = parseMaatMetric(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const reduceMotion = useReducedMotion();
  const end = parsed?.end ?? 0;
  const min = parsed ? maatMetricMin(parsed.end) : 0;
  const decimals = parsed?.decimals ?? 0;
  const count = useCountUp(end, {
    start: Boolean(parsed) && inView,
    duration: 1800,
    min,
    decimals,
  });

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  const displayValue = reduceMotion ? parsed.end : inView ? count : min;

  return (
    <span ref={ref} className={className} aria-live={reduceMotion ? "off" : "polite"}>
      {formatMaatMetric(displayValue, parsed.suffix, parsed.decimals, !en)}
    </span>
  );
}

function MaatPrimaryMetric({ text, label, desc, en }: MaatMetricItem & { en: boolean }) {
  return (
    <article className="maat-metric-card">
      <p className="maat-metric-card__value">
        <MaatAnimatedMetric value={text} en={en} />
      </p>
      <p className="maat-metric-card__label">{label}</p>
      <p className="maat-metric-card__desc">{desc}</p>
    </article>
  );
}

function MaatCompactStat({ label, end, suffix = "", text, en }: HomeImpactMetricItem & { en: boolean }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const parsed = text ? parseMaatMetric(text) : null;
  const target = parsed?.end ?? end ?? 0;
  const min = maatMetricMin(target);
  const count = useCountUp(target, {
    start: inView && target > 0,
    duration: 1200,
    min,
    decimals: parsed?.decimals ?? 0,
  });

  let value = "\u00a0";
  if (parsed) {
    value = formatMaatMetric(
      reduceMotion || inView ? (reduceMotion ? parsed.end : count) : min,
      parsed.suffix,
      parsed.decimals,
      !en,
    );
  } else if (end !== undefined) {
    value = reduceMotion || inView ? `${reduceMotion ? end : count}${suffix}` : String(min);
  }

  return (
    <div ref={ref} className="maat-hero-stat">
      <p className="maat-hero-stat__value" aria-live={reduceMotion ? "off" : "polite"}>
        {value}
      </p>
      <p className="maat-hero-stat__label">{label}</p>
    </div>
  );
}

function MaatStatsBlock({
  title,
  primary,
  compact,
  en,
}: {
  title: string;
  primary: MaatMetricItem[];
  compact: HomeImpactMetricItem[];
  en: boolean;
}) {
  return (
    <div className="maat-stats-block" aria-label={title}>
      <p className="maat-hero-stats__title">{title}</p>
      <PlatformStagger className="maat-stats-primary">
        {primary.map((item) => (
          <PlatformStaggerItem key={item.label}>
            <MaatPrimaryMetric {...item} en={en} />
          </PlatformStaggerItem>
        ))}
      </PlatformStagger>
      <PlatformStagger className="maat-hero-stats__row maat-stats-compact">
        {compact.map((item) => (
          <PlatformStaggerItem key={item.label}>
            <MaatCompactStat {...item} en={en} />
          </PlatformStaggerItem>
        ))}
      </PlatformStagger>
    </div>
  );
}

function SectionIntro({ label, title, subtitle }: { label?: string; title: string; subtitle?: string }) {
  return (
    <header className="home-section-head mx-auto max-w-3xl text-center">
      {label ? <p className="section-label section-label-maat justify-center">{label}</p> : null}
      <h2 className="heading maat-section-title mb-3">{title}</h2>
      {subtitle ? (
        <p className="home-copy-muted mx-auto max-w-[58ch] text-base leading-relaxed">{subtitle}</p>
      ) : null}
      <div className="mb-5" />
    </header>
  );
}

function MaatServiceCard({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
}) {
  return (
    <article className="home-solution-card home-solution-card--gold maat-service-card motion-card-hover h-full">
      <div className="home-strip-icon maat-strip-icon--gold">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
      </div>
      <h3 className="home-card-heading text-[var(--text-primary)]">{title}</h3>
      <p className="home-copy min-h-0 flex-1">{desc}</p>
    </article>
  );
}

function MaatIdentityCard({
  icon: Icon,
  role,
  tagline,
}: {
  icon: LucideIcon;
  role: string;
  tagline: string;
}) {
  return (
    <article className="home-solution-card maat-identity-card motion-card-hover h-full text-center">
      <div className="home-strip-icon maat-strip-icon--gold mx-auto">
        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
      </div>
      <h3 className="home-card-heading text-[var(--text-primary)]">{role}</h3>
      <p className="home-copy mt-2 text-sm">{tagline}</p>
    </article>
  );
}

function MaatCoverArt() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return (
      <img
        src={MAAT_HERO_COVER_SRC}
        alt=""
        className="maat-cover-art"
        aria-hidden
        decoding="async"
      />
    );
  }

  return (
    <motion.img
      src={MAAT_HERO_COVER_SRC}
      alt=""
      className="maat-cover-art"
      aria-hidden
      decoding="async"
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}

const MAAT_CHALLENGE_INDICES = {
  en: ["1", "2", "3"],
  ar: ["١", "٢", "٣"],
} as const;

function MaatCompactSectionTitle({ title }: { title: string }) {
  return (
    <h2 className="heading maat-compact-title text-center">{title}</h2>
  );
}

function MaatChallengesPanel({
  title,
  highlight,
  highlightLabel,
  items,
  en,
}: {
  title: string;
  highlight: string;
  highlightLabel: string;
  items: { title: string; desc: string }[];
  en: boolean;
}) {
  const indices = en ? MAAT_CHALLENGE_INDICES.en : MAAT_CHALLENGE_INDICES.ar;

  return (
    <div className="maat-challenges-panel">
      <h2 className="maat-challenges-panel__title">{title}</h2>
      <div className="maat-challenges-panel__stat">
        <p className="maat-challenges-panel__value">
          <MaatAnimatedMetric value={highlight} en={en} />
        </p>
        <p className="maat-challenges-panel__stat-text">{highlightLabel}</p>
      </div>
      <PlatformStagger className="maat-challenges-panel__grid">
        {items.map((item, i) => (
          <PlatformStaggerItem key={item.title}>
            <article className="maat-challenges-panel__item">
              <span className="maat-challenges-panel__index" aria-hidden>
                {indices[i]}
              </span>
              <h3 className="maat-challenges-panel__item-title">{item.title}</h3>
              <p className="maat-challenges-panel__item-desc">{item.desc}</p>
            </article>
          </PlatformStaggerItem>
        ))}
      </PlatformStagger>
    </div>
  );
}

function MaatWhyRow({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <PlatformStagger className="maat-why-row">
      {items.map((item) => (
        <PlatformStaggerItem key={item.title}>
          <article className="maat-why-row__item">
            <p className="maat-why-row__title">{item.title}</p>
            <p className="maat-why-row__desc">{item.desc}</p>
          </article>
        </PlatformStaggerItem>
      ))}
    </PlatformStagger>
  );
}

function MaatReachMarket({
  country,
  live = false,
}: {
  country: MaatRegionCountry;
  live?: boolean;
}) {
  return (
    <div
      className={`maat-reach-panel__market${live ? " maat-reach-panel__market--live" : " maat-reach-panel__market--soon"}`}
    >
      <MaatCountryFlag code={country.flagCode} title={country.name} />
      <p className="maat-reach-panel__market-name">{country.name}</p>
    </div>
  );
}

function MaatReachPanel({
  regions,
  integrations,
}: {
  regions: {
    title: string;
    currentLabel: string;
    current: MaatRegionCountry;
    comingLabel: string;
    comingSoon: MaatRegionCountry[];
  };
  integrations: {
    title: string;
    comingSoon: string;
    body: string;
    tools: string[];
  };
}) {
  return (
    <div className="maat-reach-panel">
      <section className="maat-reach-panel__regions" aria-label={regions.title}>
        <div className="maat-reach-panel__head">
          <Globe2 className="maat-reach-panel__icon" strokeWidth={1.75} aria-hidden />
          <h2 className="maat-reach-panel__title">{regions.title}</h2>
        </div>
        <p className="maat-reach-panel__market-label">{regions.currentLabel}</p>
        <PlatformStagger className="maat-reach-panel__markets">
          <PlatformStaggerItem>
            <MaatReachMarket country={regions.current} live />
          </PlatformStaggerItem>
        </PlatformStagger>
        <p className="maat-reach-panel__soon-heading">{regions.comingLabel}</p>
        <PlatformStagger className="maat-reach-panel__markets maat-reach-panel__markets--soon">
          {regions.comingSoon.map((country) => (
            <PlatformStaggerItem key={country.flagCode}>
              <MaatReachMarket country={country} />
            </PlatformStaggerItem>
          ))}
        </PlatformStagger>
      </section>

      <section className="maat-reach-panel__integrations" aria-label={integrations.title}>
        <div className="maat-reach-panel__head">
          <Plug className="maat-reach-panel__icon" strokeWidth={1.75} aria-hidden />
          <div>
            <span className="maat-reach-panel__soon-badge maat-reach-panel__soon-badge--inline">
              {integrations.comingSoon}
            </span>
            <h2 className="maat-reach-panel__title">{integrations.title}</h2>
          </div>
        </div>
        <p className="maat-reach-panel__body">{integrations.body}</p>
        <div className="maat-reach-panel__tools">
          {integrations.tools.map((tool) => (
            <span key={tool} className="maat-reach-panel__tool">
              <Mail className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
              {tool}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

function MaatFaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="maat-faq">
      {items.map((item) => (
        <details key={item.q} className="maat-faq__details">
          <summary className="maat-faq__summary">{item.q}</summary>
          <div className="maat-faq__answer">
            <p className="maat-faq__a">{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function MaatContent({ isSubdomain = false }: MaatContentProps) {
  const { locale } = useI18n();
  const en = locale === "en";
  const copy = getMaatCopy(en);
  const mainUrl = getMainSiteUrl();
  const demoHref = isSubdomain ? `${mainUrl}/contact#book-demo` : "/contact#book-demo";

  return (
    <motion.div
      className="maat-page home-page platform-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="maat-cover-band maat-cover-band--two-slides">
        <MaatCoverArt />
        <div className="maat-hero-cover__shade" aria-hidden />
        <div className="maat-hero-cover__glow" aria-hidden />

        <section className="maat-hero-cover" aria-label="MAAT AI">
          <div className="container-privanta relative z-10">
            <div className="maat-hero-top">
              <PlatformHeroMotion className="maat-hero-intro">
                <div className="maat-hero-brand">
                  <img src={MAAT_LOGO_SRC} alt="" className="maat-hero-logo" width={72} height={72} />
                  <h1 className="display-hero text-[var(--text-primary)]">
                    <span className="maat-title-mark">MAAT</span> AI
                  </h1>
                </div>
                <p className="maat-hero-lead mt-4">{copy.hero.body}</p>
                <PlatformStagger className="maat-hero-story">
                  {copy.story.paragraphs.map((p) => (
                    <PlatformStaggerItem key={p}>
                      <p className="maat-hero-story__p">{p}</p>
                    </PlatformStaggerItem>
                  ))}
                </PlatformStagger>
              </PlatformHeroMotion>

              <PlatformHeroMotion className="maat-hero-stats-wrap" delay={0.14}>
                <MaatStatsBlock
                  title={copy.stats.title}
                  primary={copy.stats.primary}
                  compact={copy.stats.compact}
                  en={en}
                />
              </PlatformHeroMotion>
            </div>
          </div>
        </section>

        <PlatformSection
          id="product-showcase"
          className="maat-story-on-cover home-strip-standard scroll-mt-28 max-md:hidden"
          aria-label={copy.hero.dashboardAlt}
        >
          <div className="container-privanta relative z-10 maat-story-inner">
            <PlatformFadeItem>
              <figure className="maat-product-screen">
                <MaatDashboardMockup title={copy.hero.dashboardAlt} />
                <figcaption className="maat-product-screen__caption">{copy.hero.dashboardCaption}</figcaption>
              </figure>
            </PlatformFadeItem>
          </div>
        </PlatformSection>

        <div className="maat-cover-band__fade" aria-hidden />
      </div>

      <MaatSectionRule />

      <PlatformSection
        className="home-strip-standard maat-strip-compact"
        aria-label={copy.aria.challenges}
      >
        <div className="container-privanta">
          <PlatformFadeItem>
            <MaatChallengesPanel
              title={copy.challenges.title}
              highlight={copy.challenges.highlight}
              highlightLabel={copy.challenges.highlightLabel}
              items={copy.challenges.items}
              en={en}
            />
          </PlatformFadeItem>
        </div>
      </PlatformSection>

      <PlatformSection
        id="platform"
        className="home-strip-standard home-strip-solution scroll-mt-28"
        aria-label={copy.aria.services}
      >
        <div className="container-privanta">
          <PlatformFadeItem>
            <SectionIntro title={copy.services.title} />
          </PlatformFadeItem>
          <PlatformStagger className="home-intro-to-grid maat-services-grid grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-4">
            {copy.services.items.map((item) => (
              <PlatformStaggerItem key={item.title}>
                <MaatServiceCard icon={item.icon} title={item.title} desc={item.desc} />
              </PlatformStaggerItem>
            ))}
          </PlatformStagger>
        </div>
      </PlatformSection>

      <MaatSectionRule />

      <PlatformSection className="section-surface home-strip-standard" aria-label={copy.aria.identities}>
        <div className="container-privanta">
          <PlatformFadeItem>
            <SectionIntro title={copy.identities.title} />
          </PlatformFadeItem>
          <PlatformStagger className="home-intro-to-grid maat-identities-grid grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
            {copy.identities.items.map((item) => (
              <PlatformStaggerItem key={item.role}>
                <MaatIdentityCard icon={item.icon} role={item.role} tagline={item.tagline} />
              </PlatformStaggerItem>
            ))}
          </PlatformStagger>
        </div>
      </PlatformSection>

      <MaatSectionRule />

      <PlatformSection className="home-strip-standard" aria-label={copy.aria.sectors}>
        <div className="container-privanta">
          <PlatformFadeItem>
            <SectionIntro title={copy.sectors.title} />
          </PlatformFadeItem>
          <PlatformStagger className="home-intro-to-grid maat-sectors-grid grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {copy.sectors.items.map((item) => (
              <PlatformStaggerItem key={item.title}>
                <article className="home-solution-card maat-sector-card motion-card-hover h-full">
                  <div className="home-strip-icon maat-strip-icon--gold">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="home-card-heading text-[var(--text-primary)]">{item.title}</h3>
                  <p className="home-copy min-h-0 flex-1">{item.desc}</p>
                </article>
              </PlatformStaggerItem>
            ))}
          </PlatformStagger>
        </div>
      </PlatformSection>

      <PlatformSection
        className="section-surface home-strip-standard maat-strip-compact"
        aria-label={`${copy.aria.regions} · ${copy.aria.integrations}`}
      >
        <div className="container-privanta">
          <PlatformFadeItem>
            <MaatReachPanel regions={copy.regions} integrations={copy.integrations} />
          </PlatformFadeItem>
        </div>
      </PlatformSection>

      <MaatSectionRule />

      <PlatformSection
        className="section-surface home-strip-standard maat-strip-compact"
        aria-label={copy.aria.why}
      >
        <div className="container-privanta">
          <PlatformFadeItem>
            <MaatCompactSectionTitle title={copy.why.title} />
          </PlatformFadeItem>
          <PlatformFadeItem delay={0.06}>
            <MaatWhyRow items={copy.why.items} />
          </PlatformFadeItem>
        </div>
      </PlatformSection>

      <MaatSectionRule />

      <PlatformSection className="home-strip-standard" aria-label={copy.aria.faq}>
        <div className="container-privanta">
          <PlatformFadeItem>
            <SectionIntro title={copy.faq.title} />
          </PlatformFadeItem>
          <PlatformFadeItem delay={0.08}>
            <MaatFaqAccordion items={copy.faq.items} />
          </PlatformFadeItem>
        </div>
      </PlatformSection>

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
            <div className="maat-cta-divider mx-auto mb-4" />
            <h2
              className="type-h2-final-cta font-heading mx-auto mb-3 mt-4 max-w-3xl font-bold leading-tight text-white"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}
            >
              {copy.cta.title}
            </h2>
            <p
              className="mx-auto mb-8 max-w-[56ch] leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: "clamp(0.9rem,1.5vw,1.05rem)",
              }}
            >
              {copy.cta.body}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={demoHref} className="btn-demo">
                {copy.cta.ctaStart}
              </a>
              <a href={demoHref} className="btn-outline">
                {copy.cta.ctaDemo}
              </a>
            </div>
          </PlatformFadeItem>
        </div>
      </PlatformSection>
    </motion.div>
  );
}

const Maat = () => <MaatContent />;

export default Maat;
