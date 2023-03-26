import { styled } from '../../stitches.config'

export const MainContainer = styled('main', {
  padding: '10px',
  margin: '0 auto',
  h2: {
    display: 'flex',
    'text-align': 'left',
    margin: '10px',
    'font-size': '$md',
    color: 'white',
    'text-shadow': '0 0 3px rgba(255,255,255,0.3)',

    '.link-h2': {
      'text-decoration': 'none',
      color: 'white',
      marginLeft: '10px',
      cursor: 'pointer',
    },
  },

  '.post': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '10px',

    width: '320px',
    margin: '0 auto 10px',

    color: 'white',
    'text-indent': '15px',

    h1: {
      'text-transform': 'Capitalize',
      'font-size': '$md',
    },

    p: {
      'font-size': '$sm',
    },
  },
  '.comment-section': {
    '.comment': {
      '.author': {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        p: {
          color: 'white',
          'text-decoration': 'underline',
          'justify-self': 'flex-end',
        },
      },
    },
  },
})
