/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
  plugins: [],
}