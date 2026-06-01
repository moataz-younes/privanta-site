import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/useI18n";
import { BRAND_LOGO_SRC } from "@/lib/brand";
import { getMainSiteUrl, getMaatSiteUrl, getPlatformSiteUrl } from "@/lib/siteUrls";
import { applyLocale } from "@/lib/language";
import { useScrollDirection } from "@/hooks/useScrollDirection";

export type NavbarVariant = "main" | "platform" | "maat";

type NavbarProps = {
  variant?: NavbarVariant;
};

const Navbar = ({ variant = "main" }: NavbarProps) => {
  const { locale } = useI18n();
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const scrollDirection = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [homeBooting, setHomeBooting] = useState(location.pathname === "/");

  const homeItem = locale === "ar" ? (["الرئيسية", "/"] as const) : (["Home", "/"] as const);
  const solutionsItem = locale === "ar" ? (["الحلول", "/solutions"] as const) : (["Solutions", "/solutions"] as const);

  const secondaryNavItems =
    locale === "ar"
      ? [
          ["الموارد", "/resources"],
          ["التدريب", "/training"],
          ["الشركة", "/company"],
          ["تواصل", "/contact"],
        ] as const
      : [
          ["Resources", "/resources"],
          ["Training", "/training"],
          ["Company", "/company"],
          ["Contact", "/contact"],
        ] as const;

  const productItems = [
    { title: "Privanta Platform", subtitle: "GRC Command Center", to: "/products/platform" },
    { title: "MAAT AI", subtitle: "Arab Legal AI Platform", to: "/products/maat" },
  ];

  const navLinkPrimary = ({ isActive }: { isActive: boolean }) =>
    cn(
      "nav-link-primary nav-link-motion rounded-md px-3.5 py-2 text-[13px] font-semibold tracking-[-0.01em] transition-all duration-300 lg:text-[13px]",
      isActive
        ? "nav-active"
        : "text-[rgba(229,231,235,0.88)] hover:bg-[rgba(99,240,221,0.07)] hover:text-[var(--text-primary)]",
    );

  const navLinkSecondary = ({ isActive }: { isActive: boolean }) =>
    cn(
      "nav-link-secondary nav-link-motion rounded-md px-3.5 py-2 text-[13px] font-medium tracking-[-0.01em] transition-all duration-300 lg:text-[13px]",
      isActive
        ? "nav-active"
        : "hover:bg-[rgba(99,240,221,0.05)] hover:text-[var(--text-primary)]",
    );

  const mainUrl = getMainSiteUrl();
  const platformUrl = getPlatformSiteUrl();
  const maatUrl = getMaatSiteUrl();

  const bookDemoHref = variant === "main" ? "/contact#book-demo" : `${mainUrl}/contact#book-demo`;

  const nextLocale = locale === "en" ? "ar" : "en";
  const localeLabel = locale === "en" ? "AR" : "EN";

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setHomeBooting(false);
      return;
    }
    setHomeBooting(true);
    const t = window.setTimeout(() => setHomeBooting(false), 1200);
    return () => window.clearTimeout(t);
  }, [location.pathname]);

  const hideOnScroll =
    !reduceMotion && !mobileOpen && scrolled && scrollDirection === "down" && scrollY > 120;

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);

  const drawerDirectionClass = useMemo(() => (locale === "ar" ? "rtl" : "ltr"), [locale]);
  useEffect(() => {
    if (!mobileOpen) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const brandSubtitle =
    variant === "platform"
      ? locale === "ar"
        ? "المنصّة"
        : "Platform"
      : variant === "maat"
        ? locale === "ar"
          ? "Maat AI"
          : "Maat AI"
        : null;

  return (
    <header
      className={cn(
        "privanta-navbar-shell fixed inset-x-0 top-0 z-[9999] border-b border-white/[0.04] bg-[#0B0F1A]/55 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0B0F1A]/45",
        scrolled && "is-scrolled",
        hideOnScroll && "is-hidden",
        homeBooting && location.pathname === "/" && "is-booting",
      )}
    >
      <div className="container-privanta py-3">
        <div className="flex w-full items-center justify-between gap-3 lg:gap-5">
          <Link to="/" className="flex shrink-0 items-center gap-2.5 outline-none ring-[var(--cyan-accent)]/40 focus-visible:ring-2">
            <img src={BRAND_LOGO_SRC} alt="Privanta" className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
            <span className="flex flex-col leading-tight">
              <span className="font-wordmark text-[1.05rem] tracking-[0.1em] text-[var(--text-primary)] sm:text-[1.2rem]">
                Privanta
              </span>
              {brandSubtitle ? (
                <span className="text-[11px] font-semibold tracking-[0.16em] text-[var(--text-muted)] sm:text-xs font-heading">
                  {brandSubtitle}
                </span>
              ) : null}
            </span>
          </Link>

          <div className="flex min-w-0 flex-1 items-center justify-center px-1 sm:px-2">
        <nav
          className={cn(
            "flex items-center gap-2 rounded-2xl px-3 transition-all duration-300 sm:px-4",
            "justify-end lg:justify-between",
            "w-full lg:w-[min(900px,100%)]",
            scrolled
              ? "h-14 border border-white/[0.07] bg-[#0B0F1A]/55 backdrop-blur-xl"
              : "h-[3.45rem] border border-white/[0.06] bg-[#0B0F1A]/40 backdrop-blur-lg",
          )}
        >
          <div className="hidden min-w-0 shrink-0 lg:block lg:w-0" aria-hidden />

          {variant === "main" ? (
            <ul className="nav-shell-primary hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex lg:gap-1">
              <li>
                <NavLink to={homeItem[1]} end className={navLinkSecondary}>
                  {homeItem[0]}
                </NavLink>
              </li>
              <li
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    "nav-link-primary inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-[13px] font-semibold tracking-[-0.01em] text-[rgba(229,231,235,0.9)] transition-all duration-300 lg:text-[13px]",
                    "hover:bg-[rgba(99,240,221,0.07)] hover:text-[var(--text-primary)]",
                    productsOpen && "text-[var(--text-primary)]",
                  )}
                  aria-expanded={productsOpen}
                >
                  {locale === "ar" ? "المنتجات" : "Products"}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 transition-transform duration-300",
                      productsOpen ? "rotate-180" : "",
                    )}
                  />
                </button>
                <AnimatePresence>
                {productsOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute start-0 top-full z-50 mt-2 w-60 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0D1120] p-2 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                  >
                    {productItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-[rgba(47,191,204,0.06)]"
                      >
                        <p className="text-sm font-medium text-[var(--text-primary)]">{item.title}</p>
                        <p className="text-xs text-[#5A7080]">{item.subtitle}</p>
                      </Link>
                    ))}
                  </motion.div>
                ) : null}
                </AnimatePresence>
              </li>
              <li>
                <NavLink to={solutionsItem[1]} className={navLinkPrimary}>
                  {solutionsItem[0]}
                </NavLink>
              </li>
              {secondaryNavItems.map(([label, to]) => (
                <li key={to}>
                  <NavLink to={to} className={navLinkSecondary}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <div className="hidden min-w-0 flex-1 items-center justify-center gap-4 text-[15px] lg:flex">
              <a
                href={mainUrl}
                className="rounded-md px-2 py-1.5 text-[var(--text-secondary)] transition-colors hover:bg-[rgba(99,240,221,0.06)] hover:text-[var(--text-primary)]"
              >
                {locale === "ar" ? "الموقع الرئيسي" : "privanta.net"}
              </a>
              {variant === "platform" && (
                <a
                  href={maatUrl}
                  className="rounded-md px-2 py-1.5 text-[var(--text-secondary)] transition-colors hover:bg-[rgba(99,240,221,0.06)] hover:text-[var(--text-primary)]"
                >
                  Maat AI
                </a>
              )}
              {variant === "maat" && (
                <a
                  href={platformUrl}
                  className="rounded-md px-2 py-1.5 text-[var(--text-secondary)] transition-colors hover:bg-[rgba(99,240,221,0.06)] hover:text-[var(--text-primary)]"
                >
                  {locale === "ar" ? "المنصّة" : "Platform"}
                </a>
              )}
            </div>
          )}

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              className="locale-switch-motion rounded-full border border-[rgba(47,191,204,0.14)] px-2.5 py-1 text-[13px] font-mono text-[#A8B8C4] hover:bg-[rgba(47,191,204,0.05)]"
              onClick={() => applyLocale(nextLocale)}
            >
              {localeLabel}
            </button>
            <button
              type="button"
              className="rounded-lg p-2 text-[var(--text-primary)] lg:hidden"
              aria-expanded={mobileOpen}
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
          </div>

          <div className="hidden shrink-0 md:block">
            {variant === "main" ? (
              <Link to={bookDemoHref} className="btn-demo btn-demo-motion !py-2.5 !px-4 text-[15px] md:inline-flex">
                {locale === "ar" ? "احجز عرضًا" : "Book a Demo"}
              </Link>
            ) : (
                <a href={bookDemoHref} className="btn-demo btn-demo-motion !py-2.5 !px-4 text-[15px] md:inline-flex">
                  {locale === "ar" ? "احجز عرضًا" : "Book a Demo"}
                </a>
            )}
          </div>
        </div>
      </div>

        <AnimatePresence>
        {mobileOpen && (
          <>
          <motion.button
            type="button"
            className="fixed inset-0 z-[10000] bg-black/60 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
          <motion.div
            initial={{ x: drawerDirectionClass === "rtl" ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: drawerDirectionClass === "rtl" ? "-100%" : "100%" }}
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-y-0 end-0 z-[10001] flex w-72 flex-col border-s border-[rgba(47,191,204,0.08)] bg-[#0D1A26] shadow-2xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-[var(--border-sub)] px-4 py-3">
              <span className="text-sm font-semibold tracking-wide text-[var(--text-primary)]">Menu</span>
              <button
                type="button"
                className="rounded-lg p-2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
              {variant === "main" ? (
                <>
                  <NavLink
                    to={homeItem[1]}
                    end
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "rounded-lg px-3 py-3 text-sm font-semibold transition-all duration-300",
                        isActive
                          ? "bg-[rgba(99,240,221,0.08)] text-[var(--text-primary)] shadow-[inset_3px_0_0_0_var(--cyan-accent)]"
                          : "text-[rgba(248,250,252,0.92)] hover:bg-[rgba(99,240,221,0.06)] hover:text-[var(--text-primary)]",
                      )
                    }
                  >
                    {homeItem[0]}
                  </NavLink>
                  <div className="mt-1 rounded-lg border border-[var(--border-mid)] p-2">
                    <button
                      type="button"
                      onClick={() => setMobileProductsOpen((v) => !v)}
                      className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-primary)]"
                    >
                      <span>{locale === "ar" ? "المنتجات" : "Products"}</span>
                      <ChevronDown className={cn("h-4 w-4 transition-transform", mobileProductsOpen && "rotate-180")} />
                    </button>
                    <AnimatePresence initial={false}>
                      {mobileProductsOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          {productItems.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-[rgba(47,191,204,0.08)]"
                            >
                              <p className="text-sm font-medium text-[var(--text-primary)]">{item.title}</p>
                              <p className="text-xs text-[var(--text-muted)]">{item.subtitle}</p>
                            </Link>
                          ))}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                  <NavLink
                    to={solutionsItem[1]}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "rounded-lg px-3 py-3 text-sm font-semibold transition-all duration-300",
                        isActive
                          ? "bg-[rgba(99,240,221,0.08)] text-[var(--text-primary)] shadow-[inset_3px_0_0_0_var(--cyan-accent)]"
                          : "text-[rgba(248,250,252,0.92)] hover:bg-[rgba(99,240,221,0.06)] hover:text-[var(--text-primary)]",
                      )
                    }
                  >
                    {solutionsItem[0]}
                  </NavLink>
                  <p className="mt-3 px-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                    {locale === "ar" ? "مزيد" : "More"}
                  </p>
                  {secondaryNavItems.map(([label, to]) => (
                    <NavLink
                      key={to}
                      to={to}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "rounded-lg px-3 py-2.5 text-[13px] font-medium transition-all duration-300",
                          isActive
                            ? "bg-[rgba(99,240,221,0.06)] text-[var(--text-primary)] shadow-[inset_3px_0_0_0_var(--cyan-accent)]"
                            : "text-[var(--text-secondary)] hover:bg-[rgba(99,240,221,0.05)] hover:text-[var(--text-primary)]",
                        )
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </>
              ) : (
                <>
                  <a
                    href={mainUrl}
                    className="rounded-lg px-3 py-3 text-sm font-medium text-[var(--text-secondary)] hover:bg-[rgba(99,240,221,0.06)] hover:text-[var(--text-primary)]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {locale === "ar" ? "الموقع الرئيسي" : "privanta.net"}
                  </a>
                  {variant === "platform" && (
                    <a
                      href={maatUrl}
                      className="rounded-lg px-3 py-3 text-sm font-medium text-[var(--text-secondary)] hover:bg-[rgba(99,240,221,0.06)] hover:text-[var(--text-primary)]"
                      onClick={() => setMobileOpen(false)}
                    >
                      Maat AI
                    </a>
                  )}
                  {variant === "maat" && (
                    <a
                      href={platformUrl}
                      className="rounded-lg px-3 py-3 text-sm font-medium text-[var(--text-secondary)] hover:bg-[rgba(99,240,221,0.06)] hover:text-[var(--text-primary)]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {locale === "ar" ? "المنصّة" : "Platform"}
                    </a>
                  )}
                </>
              )}
              {variant === "main" ? (
                <Link
                  to="/contact#book-demo"
                  className="btn-demo mt-4 w-full justify-center !py-3 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {locale === "ar" ? "احجز عرضًا" : "Book a Demo"}
                </Link>
              ) : (
                <a
                  href={bookDemoHref}
                  className="btn-demo mt-4 w-full justify-center !py-3 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {locale === "ar" ? "احجز عرضًا" : "Book a Demo"}
                </a>
              )}
            </nav>
          </motion.div>
          </>
        )}
        </AnimatePresence>
    </header>
  );
};

export default Navbar;
