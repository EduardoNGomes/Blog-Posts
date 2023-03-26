import { styled } from '../../../stitches.config'

export const CardBlue = styled('article', {
  display: 'flex',
  gap: 10,
  flexDirection: 'column',
  width: '300px',
  margin: '0 auto',

  background: '$blue-200',
  boxShadow: '0 0 2px rgba(255,255,255,0.2)',
  borderRadius: '5px',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  padding: '10px',

  'text-indent': '15px',
  color: 'white',
})
