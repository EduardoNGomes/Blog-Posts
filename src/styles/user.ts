import { styled } from '../../stitches.config'

export const MainContainer = styled('main', {
  h1: {
    color: 'white',
    fontSize: '$lg',
  },

  padding: '10px',
  margin: '10px auto 0',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',

  '.user-information': {
    width: '320px',
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
})
