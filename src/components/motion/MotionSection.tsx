import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type MotionSectionProps = {
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  separator?: boolean;
};

/** Adds ambient in-view glow via CSS — no layout change. */
export function MotionSection({
  children,
  className,
  as: Tag = "section",
  separator = false,
}: MotionSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle("is-inview", entry.isIntersecting);
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn(
        "motion-section",
        separator && "motion-section-separator",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
