/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./content/*.md', './layouts/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['FigTree', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        wow: {
          'death-knight': '#c41e3a',
          'demon-hunter': '#a330c9',
          druid: '#ff7c0a',
          evoker: '#33937f',
          hunter: '#aad372',
          mage: '#3fc7eb',
          monk: '#00ff98',
          paladin: '#f48cba',
          priest: '#ffffff',
          rogue: '#fff468',
          shaman: '#0070dd',
          warlock: '#8788ee',
          warrior: '#c69b6d',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  safelist: [
    "text-wow-death-knight",
    "text-wow-demon-hunter",
    "text-wow-druid",
    "text-wow-evoker",
    "text-wow-hunter",
    "text-wow-mage",
    "text-wow-monk",
    "text-wow-paladin",
    "text-wow-priest",
    "text-wow-rogue",
    "text-wow-shaman",
    "text-wow-warlock",
    "text-wow-warrior"
  ]
};
