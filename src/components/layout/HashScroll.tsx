import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

/** Smooth-scroll to #hash targets after navigation (e.g. /contact#book-demo). */
export function HashScroll() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (!hash) return;
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [pathname, hash]);

  return null;
}
