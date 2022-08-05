export default {
  colors: {
    primary: 'white',
    secondary: 'black',
    lightGrey: '#5050502b',
    orange: '#FF4B0E',
  },
  fonts: {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    span: 'span',
  },
  spacing: {
    tiny: '0.5em',
    small: '1em',
    medium: '4em',
    large: '6em',
  },
}

export const size = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
}

export const fonts = {
  h1: {
    desktop: '20px',
    mobile: '80px',
    family: 'LibreFranklin',
    fontWeight: 'normal',
  },
  h2: {
    desktop: '65px',
    mobile: '40px',
    family: 'LibreFranklin',
    fontWeight: 'lighter',
  },
  h3: {
    desktop: '65px',
    mobile: '22px',
    family: 'LibreFranklin',
    fontWeight: 'lighter',
  },
  p: {
    desktop: '40px',
    mobile: '20px',
    family: 'LibreFranklin',
    fontWeight: 'lighter',
  },
  span: {
    mobile: '12px',
    family: 'LibreFranklin',
    fontWeight: 'lighter',
  },
}

export const device = {
  mobile: `(min-width: ${size.mobile}px)`,
  tablet: `(min-width: ${size.tablet}px)`,
  desktop: `(min-width: ${size.desktop}px)`,
}
