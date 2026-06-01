/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAIN_SITE_URL?: string;
  readonly VITE_PLATFORM_SITE_URL?: string;
  readonly VITE_MAAT_SITE_URL?: string;
  readonly VITE_SUBDOMAIN_DEBUG?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
