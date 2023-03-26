import { styled } from '../../../stitches.config'

export const Section = styled('section', {
  width: '100%',
  maxWidth: '1024px',
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'center',
  justifyContent: 'center',

  h2: {
    alignSelf: 'flex-start',
    margin: '40px 0 ',
    fontSize: '$md',
  },

  '.section-content': {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
  },

  '@media (min-width: 768px)': {
    width: '650px',

    h2: {
      fontSize: '$xl',
      margin: '40px 0',
    },

    '.section-content': {
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    },
  },
  '@media (min-width: 1024px)': {
    margin: '0',

    h2: {},
    '.section-content': {
      width: '1024px',

      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
})
