from pathlib import Path

jsx_return = r'''
const PlatformContent = ({ isSubdomain: _isSubdomain = false }: PlatformContentProps) => {
  return (
    <motionIconWrap>
      <section className="relative overflow-hidden pb-10 pt-4 md:pb-14 md:pt-7">
        <motionIconWrap>
          <motionIconWrap>
            <motionIconWrap>
              <Monitor className="h-3.5 w-3.5" aria-hidden />
              PRIVANTA PLATFORM
            </motionIconWrap>
            <h1 className="display-hero max-w-[14ch] text-[var(--text-primary)]">
              Your Compliance Command Center
            </h1>
            <p className="mt-3 text-lg font-medium text-[var(--teal)]">
              Data Governance with Full Legal Precision
            </p>
            <p className="mt-4 max-w-[58ch] text-[var(--text-secondary)]">
              An integrated GRC platform purpose-built for enterprises across the Gulf and Middle East.
              Manage legal frameworks, risks, audits, and policies from a single intelligent workspace.
            </p>
            <motionIconWrap>
              <Link to="/contact#book-demo" className="btn-demo">
                Book a Demo
              </Link>
              <Link to="#platform-capabilities" className="btn-outline">
                Explore Features
              </Link>
            </motionIconWrap>
            <p className="mt-5 text-xs font-mono tracking-[0.1em] text-[var(--text-muted)]">
              Coverage: Gulf · Egypt · UAE · Europe · United States
            </p>
          </motionIconWrap>

          <motionIconWrap>
            <motionIconWrap>
              <PlatformDashboard />
              <motionIconWrap>
                ● LIVE COMPLIANCE MONITORING
              </motionIconWrap>
            </motionIconWrap>
          </motionIconWrap>
        </motionIconWrap>
      </section>

      <section className="platform-stats-bar section-compact" aria-label="Platform highlights">
        <motionIconWrap>
          <motionIconWrap>
            {stats.map((stat) => (
              <motionIconWrap>
                <p className="platform-stat-value">{stat.value}</p>
                <p className="platform-stat-label">{stat.label}</p>
              </motionIconWrap>
            ))}
          </motionIconWrap>
        </motionIconWrap>
      </section>

      <section id="platform-capabilities" className="container-privanta section-medium scroll-mt-28">
        <SectionIntro
          label="CORE CAPABILITIES"
          title="Everything You Need to Stay Compliant"
          subtitle="Built for compliance teams who demand clarity, speed, and confidence in every decision."
        />
        <motionIconWrap>
          {capabilities.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </motionIconWrap>
      </section>

      <motionIconWrap />

      <section className="container-privanta section-medium section-surface">
        <SectionIntro
          label="WHY PRIVANTA PLATFORM"
          title="What Makes Enterprises Choose Us"
          subtitle="Not just a compliance tool — a strategic partner that turns legal obligation into competitive advantage."
        />
        <motionIconWrap>
          {whyChoose.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </motionIconWrap>
      </section>

      <section className="container-privanta section-medium">
        <SectionIntro
          label="WHO BENEFITS FROM PRIVANTA PLATFORM"
          title="Built for the Most Regulated Industries"
          subtitle="Every sector has its own legal complexity — Privanta Platform adapts to your industry's requirements automatically."
        />
        <motionIconWrap>
          {industries.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </motionIconWrap>
      </section>

      <section className="container-privanta section-medium pb-4">
        <SectionIntro
          label="ACCESS MANAGEMENT"
          title="Roles Designed for Every Team"
          subtitle="Precise permissions that ensure every person sees exactly what they need — nothing more, nothing less."
        />
        <motionIconWrap>
          {roles.map((item) => (
            <article key={item.title} className="platform-card platform-role-card">
              <motionIconWrap>
                <item.icon className="h-4 w-4 text-[var(--teal)]" strokeWidth={2} aria-hidden />
              </motionIconWrap>
              <h3 className="text-base font-semibold text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.desc}</p>
            </article>
          ))}
        </motionIconWrap>
      </section>

      <section className="compliance-marquee-section section-compact">
        <motionIconWrap />
        <motionIconWrap>
          <p className="section-label section-label-teal justify-center">FRAMEWORKS SUPPORTED</p>
          <h2 className="text-[clamp(1.1rem,2.2vw,1.6rem)] font-semibold tracking-tight text-center text-[var(--text-primary)] mt-2">
            Built-in Regulatory Coverage
          </h2>
          <motionIconWrap />
          <motionIconWrap>
            <motionIconWrap>
              {marqueeLogos.map((logo, idx) => (
                <motionIconWrap>
                  <img
                    src={logo.src}
                    alt={idx < complianceLogos.length ? logo.name : ""}
                    className={getComplianceLogoClassName(logo.size)}
                    loading="lazy"
                  />
                </motionIconWrap>
              ))}
            </motionIconWrap>
          </motionIconWrap>
        </motionIconWrap>
      </section>

      <section className="container-privanta section-medium pb-14 md:pb-16">
        <motionIconWrap>
          <p className="section-label section-label-teal justify-center">GET STARTED</p>
          <h2 className="heading mt-3 text-[var(--text-primary)]">See Privanta Platform in Action</h2>
          <p className="mx-auto mt-3 max-w-[56ch] text-[var(--text-secondary)]">
            Book a 30-minute live demo with our compliance experts.
          </p>
          <motionIconWrap>
            <Link to="/contact#book-demo" className="btn-demo">
              Book Your Demo
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Us
            </Link>
          </motionIconWrap>
        </motionIconWrap>
      </section>
    </motionIconWrap>
  );
};

export default PlatformContent;
'''

# This script is wrong - let me not use it
print('skip')
