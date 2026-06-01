import { Link } from "react-router-dom";
import { Linkedin, Facebook, Twitter } from "lucide-react";
import { BRAND_LOGO_SRC } from "@/lib/brand";
import { useI18n } from "@/i18n/useI18n";

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/company/privanta", label: "Privanta on LinkedIn", Icon: Linkedin },
  { href: "https://web.facebook.com/people/Privanta/61583090024046/", label: "Privanta on Facebook", Icon: Facebook },
  { href: "https://x.com/privanta83063", label: "Privanta on X", Icon: Twitter },
] as const;

const Footer = () => {
  const { locale } = useI18n();
  const en = locale === "en";

  return (
    <footer className="privanta-footer-ambient relative z-10 border-t border-[rgba(47,191,204,0.08)] bg-[#050C12]">
      <div className="container-privanta py-6 md:py-8">
        <div className="grid gap-5 md:grid-cols-[1.2fr_2fr] md:gap-6">
          <div>
            <Link to="/" className="inline-flex items-center gap-2">
              <img src={BRAND_LOGO_SRC} alt="Privanta" className="h-8 w-auto object-contain" />
              <span className="font-wordmark text-lg tracking-tight text-[#EDF2F4]">Privanta</span>
            </Link>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#9CA3AF]">Continuous Compliance & Governance Intelligence</p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            <div>
              <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-[#A8B8C4]">Solutions</h4>
              <ul className="space-y-1.5 text-sm text-[#5A7080]">
                <li><Link to="/solutions" className="footer-link-motion transition-colors hover:text-[#2FBFCC]">Compliance Engineering</Link></li>
                <li><Link to="/solutions" className="footer-link-motion transition-colors hover:text-[#2FBFCC]">Risk & Security</Link></li>
                <li><Link to="/solutions" className="footer-link-motion transition-colors hover:text-[#2FBFCC]">Governance & Privacy</Link></li>
                <li><Link to="/solutions" className="footer-link-motion transition-colors hover:text-[#2FBFCC]">Managed Compliance</Link></li>
                <li><Link to="/solutions" className="footer-link-motion transition-colors hover:text-[#2FBFCC]">AI Governance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-[#A8B8C4]">Products</h4>
              <ul className="space-y-1.5 text-sm text-[#5A7080]">
                <li><Link to="/products/platform" className="footer-link-motion transition-colors hover:text-[#2FBFCC]">Privanta Platform</Link></li>
                <li><Link to="/products/maat" className="footer-link-motion transition-colors hover:text-[#2FBFCC]">Maat AI</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-[#A8B8C4]">Company</h4>
              <ul className="space-y-1.5 text-sm text-[#5A7080]">
                <li><Link to="/company" className="footer-link-motion transition-colors hover:text-[#2FBFCC]">About Us</Link></li>
                <li><Link to="/training" className="footer-link-motion transition-colors hover:text-[#2FBFCC]">Training</Link></li>
                <li><Link to="/resources" className="footer-link-motion transition-colors hover:text-[#2FBFCC]">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.1em] text-[#A8B8C4]">Contact</h4>
              <ul className="space-y-2 text-sm text-[#5A7080]">
                <li>
                  <a href="mailto:info@privanta.net" className="footer-link-motion transition-colors hover:text-[#2FBFCC]">
                    info@privanta.net
                  </a>
                </li>
                <li>
                  <a href="https://privanta.net" className="footer-link-motion transition-colors hover:text-[#2FBFCC]" target="_blank" rel="noreferrer">
                    privanta.net
                  </a>
                </li>
              </ul>
              <div className="mt-3 flex items-center gap-3">
                {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="footer-social-motion flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(47,191,204,0.12)] text-[#7A94A8] hover:border-[rgba(47,191,204,0.35)] hover:bg-[rgba(47,191,204,0.06)] hover:text-[#2FBFCC]"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3 mt-5 h-px bg-[linear-gradient(90deg,transparent,rgba(47,191,204,0.15),transparent)]" />
        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-xs text-[#5A7080]">© 2026 Privanta. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-[#5A7080]">
            <Link to="/legal/privacy" className="footer-link-motion transition-colors hover:text-[#A8B8C4]">
              {en ? "Privacy Policy" : "سياسة الخصوصية"}
            </Link>
            <Link to="/legal/terms" className="footer-link-motion transition-colors hover:text-[#A8B8C4]">
              {en ? "Terms of Use" : "شروط الاستخدام"}
            </Link>
            <Link to="/legal/cookies" className="footer-link-motion transition-colors hover:text-[#A8B8C4]">
              {en ? "Cookie Policy" : "سياسة ملفات تعريف الارتباط"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
