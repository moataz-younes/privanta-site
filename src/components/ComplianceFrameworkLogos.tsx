import { complianceLogos, getComplianceLogoClassName } from "@/lib/complianceLogos";

type ComplianceFrameworkLogosProps = {
  ariaLabel: string;
};

const marqueeLogos = [...complianceLogos, ...complianceLogos];

export function ComplianceFrameworkLogos({ ariaLabel }: ComplianceFrameworkLogosProps) {
  return (
    <>
      <div className="compliance-logos-mobile lg:hidden" aria-label={ariaLabel}>
        <ul className="compliance-logos-mobile__grid">
          {complianceLogos.map((logo) => (
            <li key={logo.name} className="compliance-logos-mobile__item">
              <img
                src={logo.src}
                alt={logo.name}
                className={getComplianceLogoClassName(logo.size)}
                loading="eager"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="compliance-marquee-mask mt-5 hidden lg:block" aria-label={ariaLabel}>
        <div className="compliance-marquee-track">
          {marqueeLogos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="compliance-logo-item"
              aria-hidden={idx >= complianceLogos.length}
            >
              <img
                src={logo.src}
                alt={idx < complianceLogos.length ? logo.name : ""}
                className={getComplianceLogoClassName(logo.size)}
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
