import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-mid": "var(--color-primary-mid)",
        "primary-light": "var(--color-primary-light)",
        gold: "var(--color-gold)",
        "gold-light": "var(--color-gold-light)",
        cream: "var(--color-cream)",
        charcoal: "var(--color-charcoal)",
        muted: "var(--color-muted)",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        mono: ["var(--font-dm-mono)", "DM Mono", "monospace"],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        'stats': '0 8px 40px rgba(0,0,0,0.08), 0 2px 12px rgba(0,0,0,0.04)',
        'card': '0 2px 12px rgba(0,0,0,0.06)',
        'card-hover': '0 8px 30px rgba(0,0,0,0.12)',
      },
      animation: {
        'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-gentle': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
