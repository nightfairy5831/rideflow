import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#E8F0FE",
          100: "#C5D9FC",
          200: "#9EBFF9",
          300: "#77A5F6",
          400: "#5691F3",
          500: "#0D1B2A",
          600: "#0B1724",
          700: "#09121D",
          800: "#060D16",
          900: "#04080F",
        },
        secondary: {
          50: "#E0FFF6",
          100: "#B3FFE9",
          200: "#80FFDA",
          300: "#4DFFCC",
          400: "#26FFC1",
          500: "#00D4AA",
          600: "#00B892",
          700: "#009977",
          800: "#007A5F",
          900: "#005C47",
        },
        accent: {
          50: "#FFF3E0",
          100: "#FFE0B2",
          200: "#FFCC80",
          300: "#FFB74D",
          400: "#FFA726",
          500: "#FF6B35",
          600: "#FB5607",
          700: "#E64A19",
          800: "#D84315",
          900: "#BF360C",
        },
        navy: {
          50: "#E8EDF4",
          100: "#C5D0E3",
          200: "#9EB1D0",
          300: "#7792BD",
          400: "#597AAF",
          500: "#0D1B2A",
          600: "#0B1724",
          700: "#09121D",
          800: "#060D16",
          900: "#04080F",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 100%)",
        "gradient-secondary": "linear-gradient(135deg, #00D4AA 0%, #00B892 100%)",
        "gradient-accent": "linear-gradient(135deg, #FF6B35 0%, #FB5607 100%)",
        "gradient-cta": "linear-gradient(135deg, #00D4AA 0%, #0D1B2A 100%)",
        "gradient-hero": "linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 50%, #00D4AA 100%)",
        "gradient-card": "linear-gradient(180deg, #FFFFFF 0%, #F8FFFE 100%)",
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "card-hover": "0 8px 30px rgba(0, 0, 0, 0.12)",
        button: "0 4px 15px rgba(0, 212, 170, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
