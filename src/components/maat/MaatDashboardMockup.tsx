import { useCallback, useRef, useState } from "react";
import maatDashboardHtml from "@/assets/maat-dashboard-mockup.html?raw";

type MaatDashboardMockupProps = {
  title: string;
};

export function MaatDashboardMockup({ title }: MaatDashboardMockupProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(520);

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
      srcDoc={maatDashboardHtml}
      title={title}
      className="maat-product-screen__frame"
      style={{ height: `${height}px` }}
      onLoad={syncHeight}
      scrolling="no"
      loading="eager"
    />
  );
}
