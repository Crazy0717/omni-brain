import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      phone: "480px",
      tablet: "720px",
      laptop: "1024px",
      desktop: "1280px",
    },
    extend: {
      transitionDuration: {
        1: "0.1s",
      },
      colors: {
        light: {
          1: "#f0f4f9",
        },
        dark: {
          1: "#2C2F33",
          2: "#2C3539",
          3: "#474B4E",
          text: "#E8E9ED",
        },
      },
      animation: {
        fadeIn1: "fadeIn 0.2s linear",
        fadeIn2: "fadeIn 0.4s linear",
        fadeIn3: "fadeIn 0.6s linear",
        fadeIn5: "fadeIn 0.8s linear",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}
export default config
