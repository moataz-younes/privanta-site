import { z } from "zod";

/** Personal email domains rejected for B2B lead capture */
const PERSONAL_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "icloud.com",
  "live.com",
  "aol.com",
  "protonmail.com",
  "me.com",
  "mac.com",
] as const;

/** Allowed "I'm interested in" values — must match form option values */
export const contactInterestValues = [
  "MAAT AI",
  "Privanta Platform",
  "Compliance Engineering",
  "Risk & Security Engineering",
  "Governance & Privacy Engineering",
  "Managed Compliance",
  "AI Governance",
  "Training",
  "Partnership",
  "Other",
] as const;

export type ContactInterest = (typeof contactInterestValues)[number];

const contactInterestEnum = z.enum(contactInterestValues);

/**
 * Returns true if the email domain is a blocked personal provider.
 */
function isPersonalEmailDomain(email: string): boolean {
  const atIndex = email.lastIndexOf("@");
  if (atIndex === -1) {
    return false;
  }
  const domain = email.slice(atIndex + 1).toLowerCase().trim();
  return (PERSONAL_EMAIL_DOMAINS as readonly string[]).includes(domain);
}

/**
 * Shared contact form schema — used by API route and client-side validation.
 */
export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name must be at most 100 characters"),
  workEmail: z
    .string()
    .email("Please enter a valid email address")
    .refine((email) => !isPersonalEmailDomain(email), {
      message: "Please use your work email address",
    }),
  company: z
    .string()
    .min(2, "Company must be at least 2 characters")
    .max(150, "Company must be at most 150 characters"),
  interest: z
    .string()
    .min(1, "Please select an interest")
    .pipe(contactInterestEnum),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be at most 2000 characters"),
  honeypot: z
    .string()
    .optional()
    .refine((value) => value === undefined || value.length === 0, {
      message: "Invalid submission",
    }),
});

export type ContactFormInput = z.infer<typeof contactSchema>;

/** Payload sent to POST /api/contact (honeypot omitted after client check) */
export type ContactApiPayload = Omit<ContactFormInput, "honeypot"> & {
  honeypot?: string;
};
