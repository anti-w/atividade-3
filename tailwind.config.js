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
        secondary: "#F27405",
        text: "#F2F2F2",
      },

      backgroundImage: {
        "all-together": "url('/assets/images/myheroes.png')",
      },
    },
  },
  plugins: [],
};