import { styled } from '../../stitches.config'

export const Header = styled('header', {
  background: '$blue-500',

  nav: {
    width: '100%',
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '20px ',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    '.link': {
      cursor: 'pointer',
      'font-size': '$sm',
      display: 'flex',
      gap: '.5rem',
      alignItems: 'center',
      'text-decoration': 'none',
      color: 'white',
      'text-shadow': '0 0 2px rgba(255, 255, 255,.3)',
      'text-transform': 'uppercase',
    },

    '@media (min-width: 768px)': {
      justifyContent: 'space-between',
    },
    button: {
      border: 'none',
      background: 'none',
      color: 'white',
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
      top: '74px',
      left: 0,
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
      top: '-200px',
      transition: '0.3s',
    },
  },
})
