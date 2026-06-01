import { useEffect, useRef, useState } from "react";

type ScrollDirection = "up" | "down";

/** Tracks vertical scroll direction with a small threshold to avoid jitter. */
export function useScrollDirection(threshold = 12) {
  const [direction, setDirection] = useState<ScrollDirection>("up");
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (Math.abs(delta) < threshold) return;

      setDirection(delta > 0 ? "down" : "up");
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return direction;
}
