import { styled } from '../../stitches.config'

export const Header = styled('header', {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '.link': {
      'font-size': '$md',
      display: 'flex',
      gap: '.5rem',
      alignItems: 'center',

      'text-decoration': 'none',
      color: '$blue-500',
      'text-transform': 'uppercase',
    },
  },
})

export const Ul = styled('ul', {
  display: 'flex',
  'font-size': '$md',
  gap: '.5rem',
  variants: {
    color: {
      white: {
        color: 'white',
      },
      blue: {
        color: 'blue-500',
      },
    },
  },
})
