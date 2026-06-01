import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { I18nProvider } from "@/i18n/I18nProvider";
import { getSiteMode } from "@/lib/siteMode";
import { MaatSubdomainApp, PlatformSubdomainApp } from "./SubdomainApp";
import { RootErrorBoundary } from "@/components/RootErrorBoundary";

const mode = getSiteMode();
const root = document.getElementById("root");
if (!root) {
  throw new Error("Missing #root element");
}

const reactRoot = createRoot(root);

if (mode === "platform") {
  reactRoot.render(
    <RootErrorBoundary>
      <PlatformSubdomainApp />
    </RootErrorBoundary>,
  );
} else if (mode === "maat") {
  reactRoot.render(
    <RootErrorBoundary>
      <MaatSubdomainApp />
    </RootErrorBoundary>,
  );
} else {
  reactRoot.render(
    <RootErrorBoundary>
      <I18nProvider>
        <App />
      </I18nProvider>
    </RootErrorBoundary>,
  );
}
