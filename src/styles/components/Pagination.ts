import { styled } from '../../../stitches.config'

export const UlPagination = styled('ul', {
  display: 'flex',
  gap: '5px',
  'justify-content': 'space-between',
  'align-items': 'center',
  'list-style': 'none',

  '.pageLink': {
    cursor: 'pointer',
  },

  /* pagination pageItem */
  '.pageItem': {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    width: '1.5rem',
    height: '1.5rem',
    border: '1px solid #eaeaea',
    'border-radius': '0.5rem',
    color: 'white',
    cursor: 'pointer',
  },

  /* pagination page item when active */
  '.pageItemActive': {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    width: '1.5rem',
    height: '1.5rem',
    border: '1px solid #eaeaea',
    'border-radius': '0.5rem',
    cursor: 'pointer',
    'background-color': '$blue-500',
  },

  '@media (min-width: 768px)': {
    gap: '10px',

    '.pageItem': {
      width: '2.5rem',
      height: '2.5rem',
    },
    '.pageItemActive': {
      width: '2.5rem',
      height: '2.5rem',
    },
  },
  '@media (min-width: 1024px)': {
    gap: '15px',

    '.pageItem': {
      width: '3.5rem',
      height: '3.5rem',
    },
    '.pageItemActive': {
      width: '3.5rem',
      height: '3.5rem',
    },
  },
})
