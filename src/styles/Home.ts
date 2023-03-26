import { styled } from '@stitches/react'

export const MainPage = styled('main', {
  padding: '10px',
  margin: '0 auto',
})

export const CardPosts = styled('article', {
  '>div': {
    display: 'flex',
    flexDirection: 'column',
    width: '320px',
    margin: '0 auto',

    background: 'rgba(0,0,0,0.4)',
    boxShadow: '0 0 2px rgba(255,255,255,0.1)',
    borderRadius: '5px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
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
})
