import { lazy, Suspense } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HashScroll } from "@/components/layout/HashScroll";
import { PageHead } from "@/components/seo/PageHead";
import { ScrollProgress } from "@/components/motion";
import { MOTION_DURATION, MOTION_EASE } from "@/lib/motion";

const NeuralGlow = lazy(() => import("@/components/visuals/NeuralGlow"));

export default function SiteLayout() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  return (
    <div className="flex min-h-dvh flex-col" style={{ background: "#070e1c" }}>
      <PageHead />
      <ScrollProgress />
      <Suspense fallback={null}>
        <NeuralGlow />
      </Suspense>

      <HashScroll />
      <Navbar variant="main" />
      <main className="site-main enterprise-page relative z-10 flex-1 w-full pt-16 md:pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={reduceMotion ? false : { opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8, filter: "blur(3px)" }}
            transition={{
              duration: reduceMotion ? 0 : MOTION_DURATION.fast,
              ease: MOTION_EASE,
            }}
            className="route-shell"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
