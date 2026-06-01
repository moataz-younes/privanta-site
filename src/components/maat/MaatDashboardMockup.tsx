import { useCallback, useRef, useState } from "react";
import { MAAT_DASHBOARD_MOCKUP_SRC } from "@/views/maat/maatCopy";

type MaatDashboardMockupProps = {
  title: string;
};

export function MaatDashboardMockup({ title }: MaatDashboardMockupProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(500);

  const syncHeight = useCallback(() => {
    const iframe = iframeRef.current;
    const doc = iframe?.contentDocument;
    if (!doc) return;

    const next = Math.ceil(doc.documentElement.scrollHeight);
    if (next > 0) setHeight(next);
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={MAAT_DASHBOARD_MOCKUP_SRC}
      title={title}
      className="maat-product-screen__frame"
      style={{ height: `${height}px` }}
      onLoad={syncHeight}
      scrolling="no"
      loading="eager"
    />
  );
}
