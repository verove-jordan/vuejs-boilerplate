const plugin = require('tailwindcss/plugin')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts,js,jsx,tsx}', "./node_modules/flowbite/**/*.js"],
  // darkMode: 'selector',
  // darkMode: ['selector', '[data-mode="dark"]'],

  darkMode: 'class',

  theme: {
    extend: {
      // here's how to extend fonts if needed
      fontFamily: {
        sans: ['Genera', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'some-colour-example': '#FAFBFF',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    // require('@tailwindcss/datepicker'),
    require('flowbite/plugin'),

    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        })
        isFirefoxRule.append(container.nodes)
        container.append(isFirefoxRule)
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`
        })
      })
    })
  ],
}
