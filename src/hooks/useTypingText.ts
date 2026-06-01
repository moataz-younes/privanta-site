import { useEffect, useState } from "react";

/**
 * Character-by-character typing effect for headlines.
 */
export function useTypingText(text: string, msPerChar = 48, delayMs = 600) {
  const [display, setDisplay] = useState("");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    setDisplay("");
    setComplete(false);
    if (!text) {
      setComplete(true);
      return;
    }

    let cancelled = false;
    let chainId: number | undefined;

    const startId = window.setTimeout(() => {
      let i = 1;
      setDisplay(text.slice(0, i));
      if (text.length <= 1) {
        setComplete(true);
        return;
      }

      const step = () => {
        if (cancelled) return;
        i += 1;
        setDisplay(text.slice(0, i));
        if (i < text.length) {
          chainId = window.setTimeout(step, msPerChar);
        } else {
          setComplete(true);
        }
      };

      chainId = window.setTimeout(step, msPerChar);
    }, delayMs);

    return () => {
      cancelled = true;
      window.clearTimeout(startId);
      if (chainId !== undefined) window.clearTimeout(chainId);
    };
  }, [text, msPerChar, delayMs]);

  return { display, complete };
}
