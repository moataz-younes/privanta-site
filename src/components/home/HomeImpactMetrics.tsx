import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { useCountUp } from "@/hooks/useCountUp";
import { HomeMetricsInViewContext, useHomeMetricsInView } from "@/hooks/useHomeMetricsInView";
import { platformStaggerContainer, platformStaggerItem } from "@/lib/platformMotion";

export type HomeImpactMetricItem = {
  label: string;
  fill: number;
  end?: number;
  suffix?: string;
  text?: string;
};

export function HomeImpactMetricsGrid({
  children,
  className = "home-impact-grid home-intro-to-grid mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4 lg:grid-cols-4 lg:gap-x-6",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35, margin: "-48px 0px" });

  if (reduceMotion) {
    return (
      <HomeMetricsInViewContext.Provider value>
        <div ref={ref} className={className}>
          {children}
        </div>
      </HomeMetricsInViewContext.Provider>
    );
  }

  return (
    <HomeMetricsInViewContext.Provider value={inView}>
      <motion.div
        ref={ref}
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35, margin: "-48px 0px" }}
        variants={platformStaggerContainer}
      >
        {children}
      </motion.div>
    </HomeMetricsInViewContext.Provider>
  );
}

export function HomeImpactMetricCard({
  label,
  fill,
  countDelay = 0,
  end,
  suffix = "",
  text,
}: HomeImpactMetricItem & { countDelay?: number }) {
  const reduceMotion = useReducedMotion();
  const metricsInView = useHomeMetricsInView();
  const count = useCountUp(end ?? 0, {
    delay: countDelay,
    duration: end === 100 ? 1600 : 1200,
    start: metricsInView && end !== undefined,
  });
  const ready = reduceMotion || metricsInView;
  const metric = text ? (ready ? text : "\u00a0") : `${count}${suffix}`;

  const barFill = reduceMotion ? (
    <div className="home-impact-card-fill" style={{ width: `${fill}%` }} />
  ) : (
    <motion.div
      className="home-impact-card-fill"
      initial={{ width: 0 }}
      animate={metricsInView ? { width: `${fill}%` } : { width: 0 }}
      transition={{ duration: 0.85, delay: countDelay + 0.45, ease: [0.22, 1, 0.36, 1] }}
    />
  );

  const card = (
    <article className="home-impact-card">
      <p className="home-impact-card-metric">
        <span aria-live={reduceMotion ? "off" : "polite"}>{metric}</span>
      </p>
      <p className="home-impact-card-label">{label}</p>
      <div className="home-impact-card-bar">
        <div className="home-impact-card-track">{barFill}</div>
      </div>
    </article>
  );

  if (reduceMotion) {
    return card;
  }

  return (
    <motion.div variants={platformStaggerItem} className="h-full">
      {card}
    </motion.div>
  );
}
