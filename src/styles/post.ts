import { styled } from '../../stitches.config'

export const MainContainer = styled('main', {
  padding: '10px',
  margin: '0 auto',
  h2: {
    'text-align': 'left',
    'text-indent': '15px',
    margin: '10px',
    'font-size': '$md',
    color: 'white',
    'text-shadow': '0 0 3px rgba(255,255,255,0.3)',
  },

  '.post': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '10px',

    width: '320px',
    padding: '10px',
    margin: '0 auto 10px',

    background: 'rgba(0,0,0,0.4)',
    boxShadow: '0 0 5px rgba(255,255,255,0.2)',

    borderRadius: '5px',
    color: 'white',
    'text-indent': '15px',

    h1: {
      'text-transform': 'Capitalize',
      'font-size': '$md',
    },
    h3: {
      'text-indent': '0',
    },
    p: {
      'font-size': '$sm',
    },
  },
})

export const CommentSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'center',
  h2: {
    alignSelf: 'flex-start',
    margin: '40px 0 0',
  },
  '.comment': {
    display: 'flex',
    gap: 10,
    flexDirection: 'column',
    width: '250px',
    margin: '0 auto',

    background: '$blue-200',
    boxShadow: '0 0 2px rgba(255,255,255,0.2)',
    borderRadius: '5px',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '10px',

    'text-indent': '15px',
    color: 'white',

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
})
