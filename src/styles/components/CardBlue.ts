import { styled } from '../../../stitches.config'

export const CardBlue = styled('article', {
  display: 'flex',
  gap: '10px',
  flexDirection: 'column',
  margin: '0 auto',

  background: '$blue-200',
  boxShadow: '0 0 2px rgba(255,255,255,0.2)',
  borderRadius: '5px',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  padding: '10px',

  color: 'white',
  h3: {
    'font-family': 'Cormorant, serif',
  },

  '@media (min-width: 768px)': {
    width: '620px',
    'min-height': '200px',

    overflow: 'auto',
    justifyContent: 'space-around',
  },
  '@media (min-width: 1024px)': {
    width: '720px',
    overflow: 'auto',
    justifyContent: 'space-around',
  },
})
