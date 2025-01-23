const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        gravity: ['fs-gravity'], // Add custom font here
      },
      animation: {
        flag: "flag 1s ease-in-out infinite",
      },
      keyframes: {
        flag: {
          //rotate the image
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "50%": { transform: "rotate(-1deg)" },
          "75%": { transform: "rotate(1deg)" },
        },
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      const allColors = flattenColorPalette(theme("colors"));
      const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
    },
  ],
};
