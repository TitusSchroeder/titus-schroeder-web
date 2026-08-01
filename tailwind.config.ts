import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0F172A",        // Friendly Deep Slate (Primary Text & Dunkle Elemente)
          navyLight: "#1E293B",   // Soft Secondary Nuance
          blue: "#1D4ED8",        // Royal Navy-Blue (Akzent & Buttons)
          blueHover: "#1E40AF",   // Hover State
          bg: "#FFFFFF",          // Pure White Background
          card: "#FAFAFC",        // Off-White Card Background
          border: "#E2E8F0",      // Subtile 1px Rasterlinien
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(29, 78, 216, 0.25)",
        pill: "0 10px 30px -10px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
