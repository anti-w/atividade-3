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
        section: "#2c7382",
      },

      backgroundImage: {
        "all-together": "url('/assets/images/myheroes.png')",
        "aisawa-sensei": "url('/assets/images/aisawa-combat.png')",
        "kaminari-chib": "url('/assets/images/kaminari-chib.png')",
        "cover-1a-students": "url('/assets/images/1a-students.png')",
        "bakugo-wallpaper": "url('/assets/images/bakugo-wallpaper-hd.png')",
        "class-1a-wallpaper": "url('/assets/images/class-1a-wallpaper.png')",
        "1a-together-wallpaper":
          "url('/assets/images/1a-together-wallpaper.png')",
        "dabi-wallpaper": "url('/assets/images/dabi-wallpaper.jpg')",
        "tokoyami-wallpaper": "url('/assets/images/tokoyami-wallpaper.png')",
      },
    },
  },
  plugins: [],
};
