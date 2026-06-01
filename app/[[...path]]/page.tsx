import { redirect } from "next/navigation";

const VITE_DEV_URL = process.env.VITE_DEV_SERVER_URL ?? "http://127.0.0.1:8080";

type PageProps = {
  params: Promise<{ path?: string[] }>;
};

/**
 * Fallback when middleware does not run — redirect any App Router hit to Vite in dev.
 */
export default async function DevViteRedirectPage({
  params,
}: PageProps): Promise<never> {
  if (process.env.NODE_ENV !== "development") {
    redirect("https://privanta.net");
  }

  const { path } = await params;
  const suffix = path?.length ? `/${path.join("/")}` : "";
  redirect(`${VITE_DEV_URL}${suffix}`);
}
