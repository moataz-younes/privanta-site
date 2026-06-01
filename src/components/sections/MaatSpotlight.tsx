import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/useI18n";

const MaatSpotlight = () => {
  const { t } = useI18n();

  return (
    <section className="section-medium relative overflow-hidden border-t border-[rgba(124,92,255,0.08)]">
      <div className="container relative grid gap-6 md:grid-cols-[auto_1fr] md:items-center md:gap-8">
        <div
          className="flex select-none items-center justify-center text-[4rem] leading-none md:text-[5rem] text-[#7C5CFF]/20"
          aria-hidden
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#7C5CFF]/30">
            <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-4a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#7C5CFF]">{t("maatSpotlight.kicker")}</p>
          <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            {t("maatSpotlight.title")}
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">{t("maatSpotlight.body")}</p>
          <div className="mt-8">
            <Button variant="ai" size="default" className="group" asChild>
              <Link to="/maat">
                {t("maatSpotlight.cta")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaatSpotlight;
