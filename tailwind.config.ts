import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#FFA500", // Orange accent from DKK logo
          foreground: "#000000",
          50: "#FFF7E6",
          100: "#FFE8BF",
          200: "#FFD180",
          300: "#FFBA40",
          400: "#FFA500",
          500: "#FF9800",
          600: "#F08E00",
          700: "#D97F00",
          800: "#B36800",
          900: "#7A4700",
        },
      },
    },
  },
  plugins: [],
};
export default config;
