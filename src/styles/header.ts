import { styled } from '../../stitches.config'

export const Header = styled('header', {
  nav: {
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',

    '.link': {
      'font-size': '$sm',
      display: 'flex',
      gap: '.5rem',
      alignItems: 'center',
      'text-decoration': 'none',
      color: '$blue-500',
      'text-shadow': '0 0 2px rgba(255, 255, 255,.3)',
      'text-transform': 'uppercase',
    },
    button: {
      border: 'none',
      background: 'none',
      color: '$blue-500',
    },
    ul: {
      '.link-li': {
        'text-decoration': 'none',
        color: 'white',
      },
      li: {
        padding: '10px',
        span: {
          display: 'none',
        },
      },
    },
    '.menu-open': {
      position: 'fixed',
      top: '45px',
      display: 'flex',
      gap: '10px',
      'background-color': '$blue-500',
      padding: '10px',
      'flex-direction': 'column',
      'z-index': 1,
      width: '100%',
      'text-align': 'center',
      transition: '0.5s',

      'font-size': '$md',
      color: 'white',
    },
    '.menu-close': {
      position: 'absolute',
      top: '-70px',
    },
  },
})
