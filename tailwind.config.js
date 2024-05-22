
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '470px',
      'xs2': '600px',
      ...defaultTheme.screens
    },
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      colors: {
        'primary': '#EC1D23',
        'secondary': '#3C373B',
        'light-2': '#2F2F2F',
        'light': '#B3B3B3',
        'dark': '#202020',
        'power-0': '#d680bd',
        'power-1': '#8eaadb',
        'power-2': '#a8d08d',
        'power-3': '#e9e259',
        'power-4': '#df6f63',
        'power-5': '#bfbfbf',
        'comic-primary': '#f4ff00',
        'comic-secondary': '#bfbfbf',
        'comic-tertiary': '#4a8fee',
        'comic-primary-light': '#f1f1c2',
        'shadow': 'rgba(0, 0, 0, 0.2)'
      },
      fontFamily: {
        comic: 'ComicBook',
        montserrat: 'Montserrat',
        condensed: 'RobotoCondensed',
        marvel: 'Marvel'
      },
      spacing: {
        '100': '25rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem',
        '136': '34rem',
        '144': '36rem'
      },
      zIndex: {
        'page': '10',
        'over-page': '20',
        'header': '30',
        'hud': '50'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ]
}