import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type UseCountUpOptions = {
  duration?: number;
  delay?: number;
  /** When false, numeric metrics stay at min until the section enters the viewport */
  start?: boolean;
  /** Minimum value while counting (e.g. 1) */
  min?: number;
  /** Decimal places for fractional metrics such as 1.9M */
  decimals?: number;
};

export function useCountUp(end: number, options: UseCountUpOptions = {}) {
  const { duration = 1400, delay = 0, start = false, min = 0, decimals = 0 } = options;
  const reduceMotion = useReducedMotion();
  const factor = 10 ** decimals;
  const idleValue = min > 0 && end >= min ? min : 0;
  const [value, setValue] = useState(reduceMotion ? end : idleValue);

  useEffect(() => {
    if (reduceMotion) {
      setValue(end);
      return;
    }

    if (!start) {
      setValue(idleValue);
      return;
    }

    setValue(idleValue);
    let raf = 0;
    let startTime: number | null = null;

    const timeout = window.setTimeout(() => {
      const tick = (now: number) => {
        if (startTime === null) {
          startTime = now;
        }
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        let next = Math.round(end * eased * factor) / factor;
        if (min > 0 && end >= min) {
          next = Math.max(min, next);
        }
        setValue(next);
        if (progress < 1) {
          raf = window.requestAnimationFrame(tick);
        }
      };
      raf = window.requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      window.cancelAnimationFrame(raf);
    };
  }, [delay, duration, end, factor, idleValue, min, reduceMotion, start]);

  return value;
}
