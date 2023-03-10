import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    scrollBehavior: 'smooth',
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100',
    maxWidth: '74rem',
    margin: '0 auto',
    overflowX: 'hidden',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
})
