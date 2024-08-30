/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textBlack: "#111111",
        textWhite: "#FFF6F6",
        textPink: "#F84757",
        textRed: "#BB0716",
        textSkin: "#FDD1D5",
        textDarkGray: "#303030",
        textGrayer: "#696969",
        textGray: "#919191"
      },
      fontFamily: {
        jua: ['Jua', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        "calendar": "url('/images/calendar.svg')"
      }
    },
  },
  plugins: [],
}