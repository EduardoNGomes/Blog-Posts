import { styled } from '../../stitches.config'

export const MainContainer = styled('main', {
  padding: '10px',
  maxWidth: '1024px',
  margin: '0 auto',
  h2: {
    display: 'flex',
    margin: '10px 0',
    fontSize: '$lg',

    color: 'white',
    'text-shadow': '0 0 3px rgba(255,255,255,0.3)',

    '.link-h2': {
      color: 'white',
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
  '@media (min-width: 768px)': {
    width: '650px',
    paddingBottom: '80px',

    h2: {
      fontSize: '$xl',
      margin: '10px',
    },
    '.post': {
      width: '500px',
      'min-height': '250px',
      alignItems: 'center',

      h1: {
        'text-transform': 'Capitalize',
        'font-size': '$lg',
      },
      p: {
        'font-size': '$xl',
      },
    },
  },

  '@media (min-width: 1024px)': {
    width: '1024px',

    h2: {
      fontSize: '$2xl',
    },

    '.post': {
      width: '520px',

      h1: {
        'text-transform': 'Capitalize',
        'font-size': '$lg',
      },
    },
  },
})
