import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;

    const update = () => {
      const scrollTop = window.scrollY;
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const next = Math.min(scrollTop / max, 1);
      setProgress(next);
      setVisible(scrollTop > 48);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div
      className={`privanta-scroll-progress ${visible ? "is-visible" : ""}`}
      role="presentation"
      aria-hidden
      style={{ transform: `scaleX(${progress})` }}
    />
  );
}
