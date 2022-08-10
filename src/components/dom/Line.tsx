import styled from 'styled-components'
import { animated, useSpring } from '@react-spring/web'
import { lineGrow } from '@/helpers/animations'
import { config } from 'react-spring'

const StyledLine = animated(styled.div`
  ${({ color = '#4657646b', height = 1, blendMode = 'normal' }) => `
    background-color: ${color};
    mix-blend-mode: ${blendMode};
    width: 0%;
    height: ${height}px;
    `}
`)

const Line = ({ delay = 0, play = false, ...props }) => {
  const animationProps = useSpring({
    width: play ? '100%' : '0%',
    // config: { ...config.stiff },
    delay,
  })
  return <StyledLine style={animationProps} {...props} />
}

export default Line
