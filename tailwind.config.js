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
        "kaminari-chib": "url('/assets/images/kaminari-chib.png')",
        "cover-1a-students": "url('/assets/images/1a-students.png')",
        "bakugo-wallpaper": "url('/assets/images/bakugo-wallpaper-hd.png')",
        manga: "url('/assets/images/manga-three.png')",
      },
    },
  },
  plugins: [],
};
