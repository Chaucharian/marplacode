import { theme } from '@/styles'
import { device, fonts } from '@/styles/theme'
import { useSpring, UseSpringProps } from '@react-spring/core'
import { animated } from '@react-spring/web'
import styled from 'styled-components'

// ${animate
//   ? `
// overflow: hidden;
// transition: clip-path 1500ms ease;
// &:hover::before {
//   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
// }
// &::before {
//   position: absolute;
//   content: '${animate}';
//   color: ${theme.colors.orange};
//   text-decoration: none;
//   clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
//   transition: clip-path 500ms ease;
// }`
//   : ''}

const StyledAndAnimatedText = ({
  type = 'h1',
  blendMode = 'difference',
  color = theme.colors?.primary,
  fontWeight = 'bold',
  fontFamily = 'LibreFranklin',
  fontSize = fonts[type].mobile,
  animate = false,
  children,
  ...props
}) => {
  const StyledAndAnimated = animated(styled(type)`
    font-size: ${fontSize};
    color: ${color};
    font-weight: ${fontWeight ?? fonts[type].fontWeight};
    margin: 0px;
    mix-blend-mode: ${blendMode};
    font-family: ${fontFamily ?? fonts[type].family};

    @media ${device.desktop} {
      font-size: ${fonts[type].desktop};
    }
  `)
  return <StyledAndAnimated {...props}>{children}</StyledAndAnimated>
}

interface TextProps {
  animation?: UseSpringProps
  children: string
  [x: string]: any
}

const Text = ({ animation, children, ...props }: TextProps) => {
  const animationProps = useSpring(animation)

  return (
    <StyledAndAnimatedText style={animation ? animationProps : {}} {...props}>
      {children}
    </StyledAndAnimatedText>
  )
}
export default Text
