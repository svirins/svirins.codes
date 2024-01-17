import type { Config } from 'tailwindcss'

const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.jsx'],
  theme: {
    colors: {
      active: '#ff312e',
      gray: colors.zinc,
      transparent: 'rgb(255 255 255 / 0%)',
      white: '#FFFFFF',
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
      sans: ['Montserrat', ...fontFamily.sans],
      mono: ['JetBrains Mono', ...fontFamily.mono]
    },
    extend: {
      typography(theme: any) {
        return {
          DEFAULT: {
            css: {
              'code::before': {
                content: 'none'
              },
              'code::after': {
                content: 'none'
              }
            }
          }
        }
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [require('@tailwindcss/typography')]
} satisfies Config
