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
      marginLeft: '10px',
      transition: 'all .2s ease-in-out',
    },
    '.link-h2:hover': {
      color: '$blue-500',
      'text-shadow': '1px 1px 1px rgba(255,255,255,.1)',
    },
  },

  '.post': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '10px',

    width: '100%',

    margin: '0 auto 10px',
    padding: '20px',

    color: 'white',

    h1: {
      'text-transform': 'Capitalize',
      'font-size': '$2xl',
      'font-family': 'Cormorant, serif',
    },

    p: {
      'font-size': '$sm',
    },
  },
  '.comment-section': {
    '.comment': {
      h3: {
        'font-size': '$2xl',
      },
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
      'min-height': '250px',
      alignItems: 'center',

      h1: {
        'text-transform': 'Capitalize',
        'font-size': '$2xl',
      },
      p: {
        'font-size': '$md',
      },
    },
  },

  '@media (min-width: 1024px)': {
    width: '1024px',

    '.post': {
      h1: {
        'text-transform': 'Capitalize',
        'font-size': '$2xl',
      },
      p: {
        'font-size': '$lg',
      },
    },
  },
})
