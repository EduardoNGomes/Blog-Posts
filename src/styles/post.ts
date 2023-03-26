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
    width: '320px',
    margin: '0 auto 10px',

    background: 'rgba(0,0,0,0.4)',

    boxShadow: '0 0 3px rgba(255,255,255,0.3)',
    borderRadius: '5px',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    color: 'white',

    h1: {
      'text-transform': 'Capitalize',
      'font-size': '$md',
    },
  },
})

export const CommentSection = styled('section', {
  h2: {
    marginTop: '35px',
  },
  '.comment': {
    display: 'flex',
    gap: 10,
    flexDirection: 'column',
    width: '250px',
    margin: '0 auto',

    background: '$blue-200',
    boxShadow: '0 0 2px rgba(0,0,0,0.1)',
    borderRadius: '5px',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '10px',
    color: 'white',
  },
})
