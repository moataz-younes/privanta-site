const PARTICLE_POSITIONS: Array<{ left: string; top: string; delay: string }> = [
  { left: "12%", top: "22%", delay: "0s" },
  { left: "28%", top: "68%", delay: "1.2s" },
  { left: "44%", top: "35%", delay: "0.6s" },
  { left: "58%", top: "78%", delay: "2.1s" },
  { left: "72%", top: "28%", delay: "1.8s" },
  { left: "86%", top: "55%", delay: "0.9s" },
  { left: "18%", top: "48%", delay: "2.6s" },
  { left: "64%", top: "42%", delay: "1.4s" },
];

/**
 * Home hero background: photo still + governance wave/grid + particles.
 * Light readability scrim and soft vignette — immersive, enterprise-grade.
 */
const HeroAtmosphere = () => (
  <div className="privanta-hero-atmosphere pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
    <div className="privanta-hero-photo" role="presentation" />
    <div className="privanta-hero-grid-overlay" />
    <div className="privanta-hero-wave" />
    <div className="privanta-hero-particles">
      {PARTICLE_POSITIONS.map((p, i) => (
        <span
          key={i}
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
    <div className="privanta-hero-photo-overlay" />
    <div className="privanta-hero-vignette" />
  </div>
);

export default HeroAtmosphere;
