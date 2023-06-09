import { styled } from '../../../stitches.config'

export const CardBlack = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '10px',

  padding: '0px 20px',
  borderRadius: '5px',
  background: 'rgba(0,0,0,0.4)',
  boxShadow: '0 0 5px rgba(255,255,255,0.2)',

  '@media (min-width: 768px)': {
    width: '100%',
    overflow: 'auto',
  },
})
