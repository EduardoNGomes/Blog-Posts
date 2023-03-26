import { styled } from '../../stitches.config'

export const MainContainer = styled('main', {
  h1: {
    color: 'white',
    fontSize: '$md',
    'text-transform': 'uppercase',
  },

  padding: '10px',
  maxWidth: '1024px',
  margin: '0 auto',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  '.user-information': {
    width: '320px',
    margin: '0 auto',
    color: 'white',

    '.user-image': {
      alignSelf: 'center',
      width: 50,
      height: 50,

      display: 'flex',
      'align-items': 'center',
      justifyContent: 'center ',

      backgroundColor: '$blue-500',
      boxShadow: '0 0 5px rgba(255,255,255,0.1)',

      'border-radius': '9999px',

      fontSize: '$lg',
    },

    h2: {
      fontSize: '$md',
      fontWeight: 'normal',

      span: {
        fontSize: '$md',

        fontWeight: 'bold',
      },
    },

    p: {
      span: {
        fontSize: '$md',

        fontWeight: 'bold',
      },
    },
  },

  '.posts': {
    h2: {
      color: 'white',
      'text-shadow': '0px 0px 3px rgba(255,255,255,.3)',
    },
  },
  '.comments': {
    h2: {
      color: 'white',
      'text-shadow': '0px 0px 3px rgba(255,255,255,.3)',
    },
    marginBottom: '20px',
  },

  h4: {
    color: 'white',
  },

  '@media (min-width: 768px)': {
    width: '650px',

    h1: {
      margin: '20px 0',
      fontSize: '$xl',
    },

    '.user-information': {
      width: '520px',
      padding: '20px 40px',

      '.user-image': {
        alignSelf: 'center',
        width: 100,
        height: 100,

        fontSize: '$2xl',
        margin: '10px 0',
      },

      h2: {
        fontSize: '$xl',
        fontWeight: 'normal',

        span: {
          fontSize: '$xl',
          fontWeight: 'bold',
        },
      },

      p: {
        fontSize: '$lg',

        span: {
          fontSize: '$lg',

          fontWeight: 'bold',
        },
      },
    },
  },
})
