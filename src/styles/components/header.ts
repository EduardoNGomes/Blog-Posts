import { styled } from '../../../stitches.config'

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
      width: '100%',
      cursor: 'pointer',
      'font-size': '$sm',
      display: 'flex',
      gap: '.5rem',
      alignItems: 'center',
      'text-decoration': 'none',
      color: 'white',
      'text-shadow': '0 0 2px rgba(255, 255, 255,.3)',
      'text-transform': 'uppercase',
      transition: 'all .1s ease-in-out',
    },
    '.link:hover': {
      color: '$black-500',
    },

    button: {
      border: 'none',
      background: 'none',
      color: 'white',
    },

    '.menu': {
      position: 'absolute',
      top: '-100%',
      left: 0,
      right: 0,
      display: 'flex',
      'flex-direction': 'column',
      gap: '10px',
      'z-index': 1,

      padding: '10px',
      width: '100%',
      'background-color': '$blue-500',

      'text-align': 'center',
      transition: 'top 0.5s ease-in-out',

      'font-size': '$md',
      color: 'white',
    },
    '.menu.open': {
      position: 'absolute',
      top: '74px',
      left: 0,
      right: 0,
    },
    ul: {
      '.link-li': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '5px',
        'text-decoration': 'none',
        color: 'white',
        transition: 'all .2s ease-in-out',
      },
      '.link-li:hover': {
        color: '$black-500',
      },
      li: {
        padding: '10px',
        span: {
          display: 'none',
        },
      },
    },

    '@media (min-width: 768px)': {
      justifyContent: 'space-between',
    },
    '@media (min-width: 1024px)': {
      nav: {
        justifyContent: 'between',
      },
      button: {
        display: 'none',
      },

      '.menu': {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',

        li: {
          '.link-link': {
            display: 'flex',
            alignItems: 'center',
          },
        },
      },
      ul: {
        li: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          span: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        },
        'li:hover': {
          color: '$blue-500',
        },
      },
    },
  },
})

export const ButtonToTop = styled('div', {
  position: 'fixed',
  bottom: '10vh',
  right: '4vw',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '40px',

  '.toTop': {
    display: 'none',
    border: 'none',
    borderRadius: '9999px',
    backgroundColor: '$blue-500',
    color: 'white',
    padding: '10px',
    width: '100%',
    height: '40px',
    cursor: 'pointer',
    transition: 'all .3s ease-in-out',
  },
  'button.active': {
    display: 'block',
  },
  'button.active:hover': {
    filter: 'brightness(1.75)',
  },
})
