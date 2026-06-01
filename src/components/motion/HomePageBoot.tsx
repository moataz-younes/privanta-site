import { useEffect } from "react";

/** Orchestrates home hero boot sequence via CSS class (enterprise system startup). */
export function HomePageBoot() {
  useEffect(() => {
    const root = document.querySelector(".home-page");
    if (!root) return;

    root.classList.add("privanta-home-boot");
    document.body.setAttribute("data-home-boot", "active");

    const t = window.setTimeout(() => {
      document.body.setAttribute("data-home-boot", "ready");
      root.classList.remove("privanta-home-boot");
    }, 1400);

    return () => {
      window.clearTimeout(t);
      document.body.removeAttribute("data-home-boot");
      root.classList.remove("privanta-home-boot");
    };
  }, []);

  return null;
}
