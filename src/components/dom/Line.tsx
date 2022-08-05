import styled from 'styled-components'
import { animated, useSpring } from '@react-spring/web'
import { lineGrow } from '@/helpers/animations'

const StyledLine = animated(styled.div`
  ${({ color = '#4657646b' }) => `
    background-color: ${color};
    height: 1px;
    `}
`)

const Line = ({ animation = lineGrow, delay = 0, play = false, ...props }) => {
  const animationProps = useSpring({
    ...animation,
    delay,
    pause: !play,
  })
  return <StyledLine style={animationProps} {...props} />
}

export default Line
