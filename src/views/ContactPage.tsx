import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Linkedin, Loader2, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/i18n/useI18n";
import {
  contactInterestValues,
  contactSchema,
  type ContactFormInput,
} from "@lib/validations/contact";

type ContactApiSuccess = {
  success: true;
  message: string;
};

type ContactApiFailure = {
  error: string;
  details?: unknown;
  code?: string;
};

const INTEREST_LABELS: Record<(typeof contactInterestValues)[number], { en: string; ar: string }> = {
  "MAAT AI": { en: "Maat AI Demo", ar: "عرض Maat AI" },
  "Privanta Platform": { en: "Privanta Platform Demo", ar: "عرض منصة Privanta" },
  "Compliance Engineering": { en: "Compliance & Control Engineering", ar: "هندسة الامتثال والرقابة" },
  "Risk & Security Engineering": { en: "Risk & Security", ar: "المخاطر والأمن" },
  "Governance & Privacy Engineering": { en: "Governance & Privacy", ar: "الحوكمة والخصوصية" },
  "Managed Compliance": { en: "Managed Compliance", ar: "الامتثال المُدار" },
  "AI Governance": { en: "AI Governance", ar: "حوكمة الذكاء الاصطناعي" },
  Training: { en: "Training", ar: "التدريب" },
  Partnership: { en: "Partnership", ar: "شراكة" },
  Other: { en: "Other", ar: "أخرى" },
};

const defaultValues = {
  fullName: "",
  workEmail: "",
  company: "",
  interest: "",
  message: "",
  honeypot: "",
} satisfies ContactFormInput;

export default function ContactPage() {
  const { locale } = useI18n();
  const en = locale === "en";
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const onSubmit = handleSubmit(async (data) => {
    setSuccessMessage(null);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = (await response.json()) as ContactApiSuccess | ContactApiFailure;

      if (!response.ok) {
        const apiError = json as ContactApiFailure;
        setSubmitError(
          apiError.error ??
            (en ? "Something went wrong. Please try again." : "حدث خطأ. يرجى المحاولة مرة أخرى."),
        );
        return;
      }

      const apiSuccess = json as ContactApiSuccess;
      setSuccessMessage(
        apiSuccess.message ??
          (en
            ? "Your message has been received. We'll be in touch within 1 business day."
            : "تم استلام رسالتك. سنتواصل معك خلال يوم عمل واحد."),
      );
      reset(defaultValues);
    } catch {
      setSubmitError(
        en ? "Network error. Please check your connection and try again." : "خطأ في الشبكة. يرجى المحاولة مرة أخرى.",
      );
    }
  });

  const fieldError = (name: keyof ContactFormInput) => {
    const message = errors[name]?.message;
    if (!message) return null;
    return (
      <p className="text-xs text-red-300" role="alert">
        {message}
      </p>
    );
  };

  return (
    <div className="contact-page">
      <section className="contact-cover contact-hero" aria-labelledby="contact-hero-title">
        <div className="contact-hero__bg" aria-hidden />
        <div className="contact-hero__overlay" aria-hidden />
        <div className="contact-cover-content">
          <div className="contact-cover-copy">
            <h1 id="contact-hero-title" className="contact-cover-title">
              {en ? "Let's Build Your Compliance Infrastructure" : "لنبنِ بنية الامتثال الخاصة بك"}
            </h1>
            <p className="contact-cover-subtitle">
              <span className="contact-cover-subtitle-line">
                {en ? "Talk to Our Team" : "تحدث مع فريقنا"}
              </span>
              <span className="contact-cover-subtitle-line contact-cover-subtitle-line--single">
                {en
                  ? "Discuss compliance, governance, and operational risk challenges"
                  : "ناقش تحديات الامتثال والحوكمة والمخاطر التشغيلية"}
              </span>
            </p>
          </div>
        </div>
      </section>

      <div className="divider-gradient mx-auto max-w-[1280px] px-6" />

      <section id="book-demo" className="section-medium scroll-mt-24">
        <div className="container-privanta grid gap-6 md:grid-cols-5 md:gap-10">
          <div
            className="enterprise-card md:col-span-2"
            style={{
              background: "rgba(8,14,24,0.72)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <h2 className="text-[1.35rem] font-semibold tracking-[-0.01em] text-[var(--text-primary)]">
              {en ? "Reach Us" : "طرق التواصل"}
            </h2>
            <ul className="mt-6 space-y-3.5 text-sm text-[var(--text-secondary)]">
              <li className="flex items-center gap-3 rounded-md border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                <Mail className="h-4 w-4 text-[var(--teal)]" aria-hidden />
                <a href="mailto:info@privanta.net" className="transition-colors hover:text-[#CFF5F8]">
                  info@privanta.net
                </a>
              </li>
              <li className="flex items-center gap-3 rounded-md border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                <Linkedin className="h-4 w-4 text-[var(--teal)]" aria-hidden />
                <a
                  href="https://linkedin.com/company/privanta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#CFF5F8]"
                >
                  /privanta
                </a>
              </li>
              <li className="flex items-center gap-3 rounded-md border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                <Calendar className="h-4 w-4 text-[var(--teal)]" aria-hidden />
                {en ? "Book a Demo, 30 min product walkthrough" : "احجز عرضًا، 30 دقيقة"}
              </li>
              <li className="flex items-center gap-3 rounded-md border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                <Phone className="h-4 w-4 text-[var(--teal)]" aria-hidden />
                {en ? "Schedule a Call, strategy conversation" : "حدد مكالمة، نقاش استراتيجي"}
              </li>
            </ul>
          </div>
          <form
            onSubmit={onSubmit}
            noValidate
            className="enterprise-card grid gap-4 md:col-span-3"
            style={{
              background: "rgba(8,14,24,0.72)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
              {...register("honeypot")}
            />
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-[11px] uppercase tracking-[0.14em] text-[#7F96AA]">
                {en ? "Full Name" : "الاسم الكامل"}
              </Label>
              <Input
                id="name"
                disabled={isSubmitting}
                className="enterprise-field h-10 text-[#EDF2F4] focus-visible:border-[rgba(47,191,204,0.5)] focus-visible:ring-[rgba(47,191,204,0.08)]"
                aria-invalid={Boolean(errors.fullName)}
                {...register("fullName")}
              />
              {fieldError("fullName")}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-[11px] uppercase tracking-[0.14em] text-[#7F96AA]">
                {en ? "Work Email" : "البريد الوظيفي"}
              </Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                disabled={isSubmitting}
                className="enterprise-field h-10 text-[#EDF2F4] focus-visible:border-[rgba(47,191,204,0.5)] focus-visible:ring-[rgba(47,191,204,0.08)]"
                aria-invalid={Boolean(errors.workEmail)}
                {...register("workEmail")}
              />
              {fieldError("workEmail")}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="company" className="text-[11px] uppercase tracking-[0.14em] text-[#7F96AA]">
                {en ? "Company" : "الشركة"}
              </Label>
              <Input
                id="company"
                disabled={isSubmitting}
                className="enterprise-field h-10 text-[#EDF2F4] focus-visible:border-[rgba(47,191,204,0.5)] focus-visible:ring-[rgba(47,191,204,0.08)]"
                aria-invalid={Boolean(errors.company)}
                {...register("company")}
              />
              {fieldError("company")}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="interest" className="text-[11px] uppercase tracking-[0.14em] text-[#7F96AA]">
                {en ? "I'm interested in" : "أنا مهتم بـ"}
              </Label>
              <select
                id="interest"
                disabled={isSubmitting}
                className="enterprise-field h-10 rounded-md px-3 text-sm text-[#EDF2F4] outline-none focus:border-[rgba(47,191,204,0.5)]"
                aria-invalid={Boolean(errors.interest)}
                defaultValue=""
                {...register("interest")}
              >
                <option value="" disabled>
                  {en ? "Select..." : "اختر..."}
                </option>
                {contactInterestValues.map((value) => (
                  <option key={value} value={value}>
                    {en ? INTEREST_LABELS[value].en : INTEREST_LABELS[value].ar}
                  </option>
                ))}
              </select>
              {fieldError("interest")}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message" className="text-[11px] uppercase tracking-[0.14em] text-[#7F96AA]">
                {en ? "What are you trying to solve?" : "ما الذي تحاول حله؟"}
              </Label>
              <Textarea
                id="message"
                rows={4}
                disabled={isSubmitting}
                className="enterprise-field resize-y text-[#EDF2F4] focus-visible:border-[rgba(47,191,204,0.5)] focus-visible:ring-[rgba(47,191,204,0.08)]"
                aria-invalid={Boolean(errors.message)}
                {...register("message")}
              />
              {fieldError("message")}
            </div>
            {successMessage ? (
              <p
                className="rounded-md border border-[rgba(47,191,204,0.35)] bg-[rgba(47,191,204,0.08)] px-3 py-2 text-sm text-[#CFF5F8]"
                role="status"
              >
                {successMessage}
              </p>
            ) : null}
            {submitError ? (
              <p
                className="rounded-md border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200"
                role="alert"
              >
                {submitError}
              </p>
            ) : null}
            <button
              type="submit"
              className="btn-teal w-full transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              <span className="inline-flex items-center gap-2">
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                ) : (
                  <Send className="h-4 w-4" aria-hidden />
                )}
                {isSubmitting
                  ? en
                    ? "Sending..."
                    : "جاري الإرسال..."
                  : en
                    ? "Send Message"
                    : "إرسال الرسالة"}
              </span>
            </button>
            <p className="text-xs text-[var(--text-muted)]">
              {en ? "No commitment · We respond within 1 business day" : "بدون التزام · نرد خلال يوم عمل واحد"}
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
