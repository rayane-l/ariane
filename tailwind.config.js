/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports =  withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      arianRed: "#DA0005",
      arianBord: "#8F0006",
      arianGris: "#808080",
      arianOrange: "#FF401F",
      arianJaune: "#FFA32E",


    },
    fontFamily: {
      'poiret': ['Poiret One', 'cursive'],
      'jura' : [ 'Jura', 'sans-serif']
    }
  },
  plugins: [],
})