/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#141619",
          deep: "#0c0e10",
          soft: "#1e2328",
        },
        recycle: {
          DEFAULT: "#22c55e",
          muted: "#16a34a",
          glow: "#4ade80",
        },
        action: {
          DEFAULT: "#ea580c",
          hover: "#f97316",
          subtle: "#c2410c",
        },
        steel: {
          DEFAULT: "#94a3b8",
          dark: "#64748b",
          bg: "#2d3339",
        },
      },
      fontFamily: {
        display: ["Lexend", "system-ui", "sans-serif"],
        sans: ["Source Sans 3", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
