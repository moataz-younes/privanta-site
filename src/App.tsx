import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteLayout from "@/components/layout/SiteLayout.tsx";

const Index = lazy(() => import("./views/Index.tsx"));
const SolutionsPage = lazy(() => import("./views/SolutionsPage.tsx"));
const Products = lazy(() => import("./views/Products.tsx"));
const Platform = lazy(() => import("./views/Platform.tsx"));
const Maat = lazy(() => import("./views/Maat.tsx"));
const Company = lazy(() => import("./views/Company.tsx"));
const Partners = lazy(() => import("./views/Partners.tsx"));
const Academy = lazy(() => import("./views/Academy.tsx"));
const ResourcesPage = lazy(() => import("./views/ResourcesPage.tsx"));
const ResourceArticlePage = lazy(() => import("./views/ResourceArticlePage.tsx"));
const ContactPage = lazy(() => import("./views/ContactPage.tsx"));
const Blog = lazy(() => import("./views/Blog.tsx"));
const LegalPage = lazy(() => import("./views/LegalPage.tsx"));
const NotFound = lazy(() => import("./views/NotFound.tsx"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function RouteFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center" role="status" aria-live="polite">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--teal)] border-t-transparent" />
    </div>
  );
}

function BlogArticleRedirect() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={slug ? `/resources/${slug}` : "/resources"} replace />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route element={<SiteLayout />}>
              <Route path="/" element={<Index />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/services" element={<Navigate to="/solutions" replace />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/platform" element={<Platform />} />
              <Route path="/products/maat" element={<Maat />} />
              <Route path="/maat" element={<Navigate to="/products/maat" replace />} />
              <Route path="/platform" element={<Navigate to="/products/platform" replace />} />
              <Route path="/company" element={<Company />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/training" element={<Academy />} />
              <Route path="/academy" element={<Navigate to="/training" replace />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/resources/:slug" element={<ResourceArticlePage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogArticleRedirect />} />
              <Route path="/legal/:slug" element={<LegalPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
