import { theme } from '@/styles'
import { device, fonts } from '@/styles/theme'
import { useSpring, UseSpringProps } from '@react-spring/core'
import { animated } from '@react-spring/web'
import styled from 'styled-components'

const StyledAndAnimatedText = ({
  type = 'h1',
  blendMode = 'normal',
  color = theme.colors?.primary,
  fontWeight,
  fontFamily,
  fontSize,
  animate = false,
  children,
  ...props
}) => {
  const StyledAndAnimated = animated(styled(type)`
    font-size: ${fontSize ?? fonts[type].mobile};
    color: ${color};
    font-weight: ${fontWeight ?? fonts[type].fontWeight};
    margin: 0px;
    mix-blend-mode: ${blendMode};
    font-family: ${fontFamily ?? fonts[type].family};

    @media ${device.desktop} {
      font-size: ${fontSize ?? fonts[type].desktop};
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
  return <StyledAndAnimatedText {...props}>{children}</StyledAndAnimatedText>
}
export default Text
