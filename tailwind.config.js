/** @type {import('tailwindcss').Config} */

const { spacing, fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.jsx', './mdx-components.tsx'],
  darkMode: 'class',
  theme: {
    colors: {
      active: '#ff312e',
      gray: colors.slate,
      transparent: 'rgb(255 255 255 / 0%)',
      wakatime: {
        blue: '#2563EB',
        amber: '#D97706',
        fuchsia: '#A21CAF',
        indigo: '#4338CA'
      },
      code: {
        emerald: '#10b981',
        yellow: '#eab308',
        pink: '#EC4899',
        blue: '#3b82f6',
        purple: '#A855F7',
        green: '#22c55e'
      }
    },
    fontFamily: {
      sans: ['IBM Plex Sans', ...fontFamily.sans],
      mono: ['IBM Plex Mono', ...fontFamily.mono]
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h2,h3,h4': {
              'scroll-margin-top': spacing[32]
            }
          }
        }
      })
    }
  },
  variants: {
    typography: ['dark']
  },
  safelist: [
    {
      pattern: /hljs+/
    }
  ],
  theme: {
    hljs: {
      theme: 'atom-one-dark'
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
