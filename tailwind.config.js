const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.{js,ts,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: theme => {
      return {
        ...theme('colors'),
        'primary': '#2E3E5C'
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'light-blue': '#F1F6FB',
      'purple': '#8555B9'
    }),
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.emerald,
      purple: colors.purple
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
