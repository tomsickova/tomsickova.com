/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Defaults: https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        serif: ['Amatic SC', ...defaultTheme.fontFamily.serif],
      },
    },
  },
}
