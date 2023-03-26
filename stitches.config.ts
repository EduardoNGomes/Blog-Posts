import { createStitches } from '@stitches/react'

export const { config, styled, globalCss, keyframes, getCssText, theme, css } =
  createStitches({
    media: {
      bp1: '(min-width: 500px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
    },
    theme: {
      colors: {
        'blue-500': '#144272',
        'blue-200': 'rgba(44, 116, 179,.1)',
      },

      fontSizes: {
        md: '1.125rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
    },
  })
