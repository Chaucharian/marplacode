const breakpoints: any = ['40em', '52em', '64em', '80em']

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

// usage example
// bg={{ _: 'blue', sm: 'red', md: 'ref' }}

export const size = {
  mobile: 375,
  tablet: 768,
  desktop: 1024,
}

export const fonts = {
  h1: {
    desktop: '80px',
    mobile: '80px',
    family: 'Newake',
    fontWeight: 'normal',
  },
  h2: {
    desktop: '65px',
    mobile: '40px',
    family: 'Newake',
    fontWeight: 'normal',
  },
  h3: {
    desktop: '50px',
    mobile: '22px',
    family: 'LibreFranklin',
    fontWeight: 'lighter',
  },
  p: {
    desktop: '25px',
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
  sizes: {
    desktop: {
      contentWidth: '1100px',
    },
  },
  breakpoints,
}
