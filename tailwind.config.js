/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f97316", // Sunset Orange
        secondary: "#0ea5e9", // Ocean Blue
        accent: "#eab308", // Golden
        forest: "#10b981", // Forest Green
        sand: "#f5f5dc", // Beige
        dark: "#1c1917", // Stone 900 - Warm Charcoal
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      }
    },
  },
  plugins: [],
}