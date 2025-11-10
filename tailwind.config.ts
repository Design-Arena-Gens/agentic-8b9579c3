import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        scholerium: {
          50: "#f3f5ff",
          100: "#e9edff",
          200: "#cbd3ff",
          300: "#a9b4ff",
          400: "#8792ff",
          500: "#6a74f5",
          600: "#4e57cc",
          700: "#3b429d",
          800: "#282d6f",
          900: "#161940",
          950: "#0b0f23"
        }
      },
      boxShadow: {
        card: "0 18px 30px -15px rgba(27, 31, 59, 0.4)"
      }
    }
  },
  plugins: []
};

export default config;
