import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import {
  PLATFORM_EASE,
  platformHeroMotion,
  platformSectionMotion,
  platformStaggerContainer,
  platformStaggerItem,
} from "@/lib/platformMotion";

type PlatformSectionProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  id?: string;
  "aria-label"?: string;
} & Pick<HTMLMotionProps<"section">, "id">;

export function PlatformSection({
  children,
  className,
  as = "section",
  id,
  "aria-label": ariaLabel,
}: PlatformSectionProps) {
  const reduceMotion = useReducedMotion();
  const Tag = as === "div" ? motion.div : motion.section;

  if (reduceMotion) {
    const Plain = as === "div" ? "div" : "section";
    return (
      <Plain id={id} className={className} aria-label={ariaLabel}>
        {children}
      </Plain>
    );
  }

  return (
    <Tag
      id={id}
      aria-label={ariaLabel}
      className={className}
      initial={platformSectionMotion.initial}
      whileInView={platformSectionMotion.whileInView}
      viewport={platformSectionMotion.viewport}
      transition={platformSectionMotion.transition}
    >
      {children}
    </Tag>
  );
}

export function PlatformHeroMotion({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} {...platformHeroMotion(delay)}>
      {children}
    </motion.div>
  );
}

export { HomeImpactMetricsGrid as PlatformMetricsMotion } from "@/components/home/HomeImpactMetrics";

export function PlatformStagger({
  children,
  className,
  inView = true,
}: {
  children: ReactNode;
  className?: string;
  inView?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  if (inView) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-64px" }}
        variants={platformStaggerContainer}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div className={className} initial="hidden" animate="show" variants={platformStaggerContainer}>
      {children}
    </motion.div>
  );
}

export function PlatformStaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={platformStaggerItem}>
      {children}
    </motion.div>
  );
}

export function PlatformFadeItem({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.55, delay, ease: PLATFORM_EASE }}
    >
      {children}
    </motion.div>
  );
}
