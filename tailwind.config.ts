import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Algerian national palette
        algeria: {
          green: "#0E6B3B",
          "green-light": "#13864a",
          "green-dark": "#094d29",
          red: "#C1272D",
          "red-light": "#d8342f",
          "red-dark": "#8f1d22",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E4C76B",
          dark: "#9C7B16",
          50: "#FBF6E7",
          100: "#F5EAC4",
          200: "#EBD58A",
          300: "#E0BF52",
          400: "#D4AD32",
          500: "#C9A227",
          600: "#A6831C",
          700: "#7E631A",
          800: "#5C481A",
          900: "#3D3014",
        },
        ink: {
          DEFAULT: "#0c1411",
          soft: "#14201a",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-body)", "serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(14, 107, 59, 0.18)",
        gold: "0 12px 40px -10px rgba(201, 162, 39, 0.35)",
        card: "0 4px 24px -6px rgba(12, 20, 17, 0.10)",
        "card-hover": "0 24px 60px -18px rgba(12, 20, 17, 0.28)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #E4C76B 0%, #C9A227 45%, #9C7B16 100%)",
        "green-gradient":
          "linear-gradient(135deg, #13864a 0%, #0E6B3B 55%, #094d29 100%)",
        "hero-radial":
          "radial-gradient(circle at 20% 20%, rgba(14,107,59,0.18), transparent 45%), radial-gradient(circle at 80% 30%, rgba(193,39,45,0.14), transparent 45%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
