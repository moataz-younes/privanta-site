import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "24px",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", "system-ui", "sans-serif"],
        display: ["Outfit", "system-ui", "sans-serif"],
        heading: ["Montserrat", "Open Sans", "sans-serif"],
        body: ["Open Sans", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Fira Code", "monospace"],
        arabic: ["Cairo", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        brand: {
          deep: "hsl(var(--brand-deep))",
          blue: "hsl(var(--brand-blue))",
          cyan: "hsl(var(--brand-cyan))",
          glow: "hsl(var(--brand-cyan-glow))",
          purple: "hsl(var(--brand-purple))",
          "purple-glow": "hsl(var(--brand-purple-glow))",
        },
        // New color system
        "bg-primary": "#0B0F1A",
        "bg-secondary": "#0F172A",
        "bg-elevated": "#111827",
        "deep-blue": "#17306C",
        "cyan-accent": "#63F0DD",
        "ai-purple": "#7C5CFF",
        "trust-gold": "#C8A95B",
        "text-primary": "#E5E7EB",
        "text-secondary": "#9CA3AF",
        "text-muted": "#6B7280",
        "status-success": "#22C55E",
        "status-warning": "#F59E0B",
        "status-error": "#EF4444",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at 75% 50%, rgba(99, 240, 221, 0.15) 0%, transparent 60%)',
        'gradient-brand': 'var(--gradient-brand)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
        'gradient-ai': 'var(--gradient-ai)',
      },
      boxShadow: {
        glow: 'var(--shadow-glow)',
        'glow-lg': 'var(--shadow-glow-lg)',
        card: 'var(--shadow-card)',
        elevated: 'var(--shadow-elevated)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    function ({ addVariant }) {
      addVariant("rtl", '[dir="rtl"] &');
      addVariant("ltr", '[dir="ltr"] &');
    },
  ],
} satisfies Config;
