import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** CSS scroll-reveal variant */
  variant?: "up" | "left" | "right" | "scale";
  /** Keep observing for re-entry (default: reveal once) */
  once?: boolean;
};

const variantClass: Record<NonNullable<ScrollRevealProps["variant"]>, string> = {
  up: "motion-safe:scroll-reveal",
  left: "motion-safe:scroll-reveal-left",
  right: "motion-safe:scroll-reveal-right",
  scale: "motion-safe:scale-in",
};

export function ScrollReveal({
  children,
  className,
  variant = "up",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.setAttribute("data-visible", "true");
          if (once) io.disconnect();
        } else if (!once) {
          el.removeAttribute("data-visible");
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div ref={ref} className={cn(variantClass[variant], className)}>
      {children}
    </div>
  );
}
