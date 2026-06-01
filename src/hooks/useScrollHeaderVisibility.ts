import { useEffect, useRef, useState } from "react";

/**
 * Returns true when the fixed header should be visible (show on scroll up, hide on scroll down).
 */
export function useScrollHeaderVisibility(options?: { delta?: number; topOffset?: number }) {
  const delta = options?.delta ?? 6;
  const topOffset = options?.topOffset ?? 80;
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (y < topOffset) {
        setVisible(true);
        lastY.current = y;
        return;
      }
      if (y > lastY.current + delta) setVisible(false);
      else if (y < lastY.current - delta) setVisible(true);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [delta, topOffset]);

  return visible;
}
