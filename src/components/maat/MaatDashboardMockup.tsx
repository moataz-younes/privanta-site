import { useCallback, useRef, useState } from "react";
import { MAAT_DASHBOARD_MOCKUP_SRC } from "@/views/maat/maatCopy";

type MaatDashboardMockupProps = {
  title: string;
};

export function MaatDashboardMockup({ title }: MaatDashboardMockupProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(500);
  const [iframeFailed, setIframeFailed] = useState(false);

  const syncHeight = useCallback(() => {
    const iframe = iframeRef.current;
    const doc = iframe?.contentDocument;
    if (!doc) return;

    const next = Math.ceil(doc.documentElement.scrollHeight);
    if (next > 0) setHeight(next);
    setIframeFailed(false);
  }, []);

  const onIframeError = useCallback(() => {
    setIframeFailed(true);
  }, []);

  if (iframeFailed) {
    return (
      <div
        className="maat-product-screen__frame flex min-h-[280px] flex-col items-center justify-center gap-3 p-6 text-center"
        role="img"
        aria-label={title}
      >
        <p className="text-sm text-[var(--text-secondary)]">
          {title}
        </p>
        <a
          href={MAAT_DASHBOARD_MOCKUP_SRC}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-[var(--maat-accent,#c9a962)] underline-offset-2 hover:underline"
        >
          Open dashboard preview
        </a>
      </div>
    );
  }

  return (
    <iframe
      ref={iframeRef}
      src={MAAT_DASHBOARD_MOCKUP_SRC}
      title={title}
      className="maat-product-screen__frame"
      style={{ height: `${height}px` }}
      onLoad={syncHeight}
      onError={onIframeError}
      scrolling="no"
      loading="eager"
    />
  );
}
