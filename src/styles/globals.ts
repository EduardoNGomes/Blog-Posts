import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    'font-family': 'Poppins',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    background: '#121214',
  },

  'body, input, textarea,button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
  ul: {
    'list-style': 'none',
  },
})
