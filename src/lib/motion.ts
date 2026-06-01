/** Privanta enterprise motion tokens — Palantir / Vanta-grade, minimal & intentional */

export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;
export const MOTION_EASE_CINEMATIC = [0.16, 1, 0.3, 1] as const;

export const MOTION_DURATION = {
  fast: 0.4,
  base: 0.55,
  slow: 0.75,
  cinematic: 1.05,
  boot: 1.2,
} as const;

export const MOTION_DISTANCE = {
  sm: 12,
  md: 20,
  lg: 28,
} as const;

export const motionFadeUp = (delay = 0, distance = MOTION_DISTANCE.md) => ({
  initial: { opacity: 0, y: distance, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: MOTION_DURATION.slow, delay, ease: MOTION_EASE },
});

export const motionFadeUpInView = (delay = 0, distance = MOTION_DISTANCE.md) => ({
  initial: { opacity: 0, y: distance, filter: "blur(4px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-72px" },
  transition: { duration: MOTION_DURATION.slow, delay, ease: MOTION_EASE },
});

export const staggerContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
} as const;

export const staggerItem = {
  hidden: { opacity: 0, y: MOTION_DISTANCE.sm, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: MOTION_DURATION.base, ease: MOTION_EASE },
  },
} as const;

export const sectionReveal = {
  initial: { opacity: 0, y: MOTION_DISTANCE.lg },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: MOTION_DURATION.cinematic, ease: MOTION_EASE },
} as const;

export const heroLineReveal = (delay: number) => ({
  initial: { opacity: 0, y: 14, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: MOTION_DURATION.slow, delay, ease: MOTION_EASE_CINEMATIC },
});

/* Legacy aliases — platform pages */
export const PLATFORM_EASE = MOTION_EASE;
export const platformStaggerContainer = staggerContainer;
export const platformStaggerItem = staggerItem;
export const platformSectionMotion = sectionReveal;
export const platformHeroMotion = (delay = 0) => motionFadeUp(delay, MOTION_DISTANCE.lg);
