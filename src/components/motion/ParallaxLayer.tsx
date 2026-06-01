import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

/** Subtle background-only parallax tied to scroll. Disabled on mobile & reduced motion. */
export function ParallaxLayer({ children, className, intensity = 0.04 }: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const el = ref.current;
    if (!el) return;

    const prefersCoarse = window.matchMedia("(max-width: 768px)").matches;
    if (prefersCoarse) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const offset = (center - viewportCenter) * intensity;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [intensity, reduceMotion]);

  return (
    <div ref={ref} className={className} style={reduceMotion ? undefined : { willChange: "transform" }}>
      {children}
    </div>
  );
}
