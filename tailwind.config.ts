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
        neon: {
          cyan: "#00FFFF",
          blue: "#0066FF",
          magenta: "#FF00FF",
          pink: "#FF00CC",
        },
        primary: {
          DEFAULT: "#00FFFF", // Neon cyan
          foreground: "#000000",
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 10px #00FFFF, 0 0 20px #00FFFF, 0 0 30px #00FFFF",
        "neon-magenta": "0 0 10px #FF00FF, 0 0 20px #FF00FF, 0 0 30px #FF00FF",
        "neon-gradient": "0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.5)",
      },
      backgroundImage: {
        "neon-gradient": "linear-gradient(90deg, #00FFFF 0%, #0066FF 50%, #FF00FF 100%)",
        "neon-gradient-vertical": "linear-gradient(180deg, #00FFFF 0%, #0066FF 50%, #FF00FF 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
