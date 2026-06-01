/// <reference types="vite/client" />

declare module "*.html?raw" {
  const content: string;
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_MAIN_SITE_URL?: string;
  readonly VITE_PLATFORM_SITE_URL?: string;
  readonly VITE_MAAT_SITE_URL?: string;
  readonly VITE_SUBDOMAIN_DEBUG?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
