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
        flag: "flag 2s",
      },
      keyframes: {
        flag: {
          "0%": { transform : "scale(1)" },
          "50%": { transform : "scale(1.1)" },
          "100%": { transform : "scale(1.5)" },
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
