/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Fredoka One'", "cursive"],
        body: ["'Nunito'", "sans-serif"],
      },
      colors: {
        "paw-orange": "#FF6B35",
        "paw-teal": "#00C9A7",
        "paw-pink": "#FF6B9D",
        "paw-purple": "#9B5DE5",
        "paw-yellow": "#FFD93D",
        "paw-dark": "#1a1a2e",
      },
    },
  },
  plugins: [],
};