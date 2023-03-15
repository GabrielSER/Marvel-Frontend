
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '470px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        'primary': '#EC1D23',
        'secondary': '#3C373B',
        'light': '#B3B3B3',
        'dark': '#202020',
        'shadow': 'rgba(0, 0, 0, 0.2)'
      },
      fontFamily: {
        comic: 'ComicBook',
        montserrat: 'Montserrat'
      },
      spacing: {
        '100': '25rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}