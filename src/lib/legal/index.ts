import { privacyPolicyDocument } from "./privacyPolicy";
import { termsOfUseDocument } from "./termsOfUse";
import { cookiePolicyDocument } from "./cookiePolicy";

import type { LegalDocSlug } from "./types";

export type { LegalDocSlug, LegalDocument } from "./types";

export const legalDocuments = [
  privacyPolicyDocument,
  termsOfUseDocument,
  cookiePolicyDocument,
];

export function getLegalDocument(slug: LegalDocSlug) {
  return legalDocuments.find((d) => d.slug === slug);
}
