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
        primary: "#1A3A6B",
        secondary: "#E8729A",
        "secondary-light": "#F4A7C0",
        surface: "#F7F8FA",
        textPrimary: "#1A1A2E",
        textMuted: "#6B7280",
        white: "#FFFFFF",
        charcoal: "#1A1A2E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
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

