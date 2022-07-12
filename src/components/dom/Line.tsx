import styled from 'styled-components'
import { animated, useSpring } from '@react-spring/web'
import { lineGrow } from '@/helpers/animations'

const StyledLine = animated(styled.div`
  ${({ color = '#FFF' }) => `
    background-color: ${color};
    height: 1px;
    `}
`)

const Line = ({ animation = lineGrow, ...props }) => {
  const animationProps = useSpring(animation)
  return <StyledLine style={animationProps} {...props} />
}

export default Line
