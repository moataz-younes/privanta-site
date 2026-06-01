import { useEffect } from "react";

const SCROLL_SELECTOR =
  ".company-page .will-animate, .company-page .will-animate-scale, .company-page .slide-left, .company-page .slide-right, .company-page .company-cta-btn";

export function useCompanyScrollAnimations() {
  useEffect(() => {
    const root = document.querySelector(".company-page");
    if (!root) return;

    const hero = root.querySelector(".hero");
    const showHero = () => hero?.classList.add("hero--loaded");
    const heroTimer = window.setTimeout(showHero, 50);

    const elements = root.querySelectorAll(SCROLL_SELECTOR);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 },
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      window.clearTimeout(heroTimer);
      observer.disconnect();
    };
  }, []);
}
