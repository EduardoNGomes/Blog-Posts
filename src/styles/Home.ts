import { styled } from '@stitches/react'

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

  '.card-post': {
    '.link-post': {
      cursor: 'pointer',
      'text-decoration': 'none',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',

      width: '320px',
      margin: '0 auto',

      color: 'white',

      h2: {
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

    '.card-post': {
      '.link-post': {
        width: '100%',
      },
    },
  },
})
