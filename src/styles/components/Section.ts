import { styled } from '../../../stitches.config'

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  alignItems: 'center',
  h2: {
    alignSelf: 'flex-start',
    margin: '40px 0 0',
    fontSize: '$md',
  },
})
