import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    'font-family': 'Poppins',

    '::-webkit-scrollbar': {
      width: '8px',
    },

    '::-webkit-scrollbar-track': {
      background: 'rgba(255, 255, 255, .6)',

      'border-radius': '8px',
    },

    '::-webkit-scrollbar-thumb': {
      background: '$blue-500',

      'border-radius': '8px;',
    },

    '::-webkit-scrollbar-thumb:hover': {
      'background-color': 'white',
    },
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    background: '$black-500',
  },

  'body, input, textarea,button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
  ul: {
    'list-style': 'none',
  },
})
