import { theme } from '@/styles'
import { Flex } from '.'
import styled from 'styled-components'
import { useSpring } from '@react-spring/core'
import { animated } from '@react-spring/web'

const Container = styled(animated.article)`
  ${() => `
`}
`

const Text = styled.h1`
  ${() => `
    color: black;
    margin: 0;
    font-weight: normal;
    font-size: 60px
`}
`

const GlowText = ({
  colors1 = ['#23393E', '#A7D5FF'],
  colors2 = ['#097BE4', '#3AE2EC'],
  children,
  ...props
}) => {
  const a1 = useSpring({
    from: {
      'background-position': '25% 75%',
      background: `linear-gradient(
    to right, 
    ${colors1[0]},
    ${colors1[1]}
  )`,
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
    to: {
      'background-position': '0% 0%',
      background: `linear-gradient(
    to right, 
    ${colors2[0]},
    ${colors2[1]}
  )`,

      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
    loop: true,
    pause: false,
    config: {
      tension: 280,
      friction: 120,
      velocity: -0.029,
    },
  })

  return (
    <Container style={a1}>
      <Text {...props}>{children}</Text>
    </Container>
  )
}

export default GlowText
