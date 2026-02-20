import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        surface: "hsl(var(--color-surface) / <alpha-value>)",
        card: "hsl(var(--color-card) / <alpha-value>)",
        muted: "hsl(var(--color-muted) / <alpha-value>)",
        foreground: "hsl(var(--color-foreground) / <alpha-value>)",
        brand: "hsl(var(--color-brand) / <alpha-value>)",
        brandForeground: "hsl(var(--color-brand-foreground) / <alpha-value>)",
        accent: "hsl(var(--color-accent) / <alpha-value>)",
        accentSoft: "hsl(var(--color-accent-soft) / <alpha-value>)",
        stroke: "hsl(var(--color-stroke) / <alpha-value>)"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem"
      },
      boxShadow: {
        soft: "0 8px 20px -12px hsl(var(--color-shadow) / 0.18)",
        panel: "0 10px 26px -16px hsl(var(--color-shadow) / 0.2)"
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(12px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        "fade-up": "fade-up 0.65s ease-out forwards"
      }
    }
  },
  plugins: []
};

export default config;
