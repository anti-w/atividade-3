/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans", "sans-serif"],
      },
      colors: {
        primary: "#0D0D0D",
        secondary: "#d31717",
        text: "#F2F2F2",
        hover: "#fcf800",
      },

      backgroundImage: {
        "all-together": "url('/assets/images/myheroes.png')",
        "aisawa-sensei": "url('/assets/images/aisawa-combat.png')",
      },
    },
  },
  plugins: [],
};
