import { styled } from '../../stitches.config'

export const MainPage = styled('main', {
  padding: '20px',
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',

  h1: {
    color: 'white',
    fontSize: '$lg',
  },

  section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
  },

  '.card-post': {
    '.link-post': {
      cursor: 'pointer',
      'text-decoration': 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',

      'max-width': '320px',
      margin: '0 auto',

      color: 'white',

      h2: {
        'font-size': '$xl',
        'font-family': 'Cormorant, serif',
      },
      'h2::first-letter': {
        'font-size': '$2xl',
        'font-weight': 'bold',
      },
      p: {
        'font-size': '$sm',
      },
      'p::first-letter': {
        'font-size': '$md',
      },
      '.author': {
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        p: {
          color: '$blue-500',
          'text-decoration': 'underline',
          'justify-self': 'flex-end',
        },
      },
    },
  },

  '@media (min-width: 768px)': {
    width: '100%',
    margin: '0 auto',

    p: {
      fontSize: '$lg',
    },
    section: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '20px',
    },
    h1: {
      color: 'white',
      fontSize: '$2xl',
      'text-align': 'center',
    },
    '.card-post': {
      '.link-post': {
        cursor: 'pointer',
        'text-decoration': 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        'max-width': '100%',

        width: '520px',
        margin: '0 auto',

        color: 'white',

        h2: {
          marginTop: '50px',
          'font-size': '$2xl',
        },
        'h2::first-letter': {
          'font-size': '3rem',
        },
        'p::first-letter': {
          'font-size': '$xl',
        },
        '.author': {
          display: 'flex',
          width: '100%',
          justifyContent: 'flex-end',
          p: {
            color: '$blue-500',
            'text-decoration': 'underline',
            'justify-self': 'flex-end',
          },
        },
      },
    },

    '.author': {
      p: {
        fontSize: '$lg',
      },
    },
  },
  '@media (min-width: 1110px)': {
    '.card-post': {
      '.link-post': {
        width: '720px',
      },
    },
  },
})
