import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import { fontFamily, spacing } from 'tailwindcss/defaultTheme'

module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.jsx'],
  theme: {
    colors: {
      active: 'rgb(255 49 46 / 95%)',
      gray: colors.slate,
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
      sans: ['IBM Plex Sans', ...fontFamily.sans],
      mono: ['IBM Plex Mono', ...fontFamily.mono]
    },
    extend: {
      typography() {
        return {
          DEFAULT: {
            css: {
              'code::before': {
                content: 'none'
              },
              'code::after': {
                content: 'none'
              },
              'h2,h3,h4': {
                'scroll-margin-top': spacing[32]
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
