import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import type { NavbarVariant } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HashScroll } from "@/components/layout/HashScroll";
import PlatformContent from "@/views/platform/PlatformContent";
import { MaatContent } from "@/views/Maat";
import { I18nProvider } from "@/i18n/I18nProvider";

const queryClient = new QueryClient();

function Shell({ variant, children }: { variant: NavbarVariant; children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-transparent">
      <HashScroll />
      <Navbar variant={variant} />
      <main className="site-main relative z-0 flex-1 w-full pt-16 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export function PlatformSubdomainApp() {
  return (
    <I18nProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route
                path="*"
                element={
                  <Shell variant="platform">
                    <PlatformContent isSubdomain />
                  </Shell>
                }
              />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </I18nProvider>
  );
}

export function MaatSubdomainApp() {
  return (
    <I18nProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route
                path="*"
                element={
                  <Shell variant="maat">
                    <MaatContent isSubdomain />
                  </Shell>
                }
              />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </I18nProvider>
  );
}
