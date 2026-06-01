export type ComplianceLogo = {
  name: string;
  src: string;
  size?: "default" | "large" | "xlarge" | "xxlarge";
};

export function getComplianceLogoClassName(size?: ComplianceLogo["size"]) {
  if (size === "xxlarge") return "compliance-logo-uniform compliance-logo-xxlarge";
  if (size === "xlarge") return "compliance-logo-uniform compliance-logo-xlarge";
  if (size === "large") return "compliance-logo-uniform compliance-logo-large";
  return "compliance-logo-uniform";
}

export const complianceLogos: ComplianceLogo[] = [
  { name: "ISO 27001", src: "/logos/iso27001.png", size: "large" },
  { name: "ISO 42001", src: "/logos/iso42001.png", size: "large" },
  { name: "SOC 2", src: "/logos/soc2.png", size: "large" },
  { name: "PCI DSS", src: "/logos/pci-dss.png", size: "xlarge" },
  { name: "HIPAA", src: "/logos/hipaa.png", size: "xlarge" },
  { name: "GDPR and PDPLs", src: "/logos/gdpr-pdpls.png", size: "xxlarge" },
  { name: "CIS Controls", src: "/logos/cis-controls.png" },
  { name: "NIST", src: "/logos/nist.png" },
  { name: "COBIT 5", src: "/logos/cobit-5.png" },
  { name: "UAE PDPL", src: "/logos/uae-pdpl.png" },
  { name: "Egypt PDPL", src: "/logos/egypt-pdpl.png" },
  { name: "Saudi Arabia PDPL", src: "/logos/saudi-pdpl.png" },
  { name: "Qatar PDPL", src: "/logos/qatar-pdpl.png" },
];
