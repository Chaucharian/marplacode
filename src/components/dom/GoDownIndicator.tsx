import { theme } from '@/styles'
import styled from 'styled-components'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { useSpring } from '@react-spring/core'
import { animated } from '@react-spring/web'

const Container = styled(animated.div)`
  position: relative;
  color: inherit;
  border-radius: 100px;
  cursor: pointer;
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  mix-blend-mode: difference;
  border: 1px solid rgba(255, 255, 255, 0.25);
`
const Arrow = styled(animated(AiOutlineArrowDown))``

const GoDownIndicator = () => {
  const arrowAnimation = useSpring({
    from: { position: 'absolute', top: 0 },
    to: { position: 'absolute', top: 20 },
    loop: true,
    delay: 600,
    config: {
      tension: 120,
      friction: 14,
    },
  })
  const circleAnimation = useSpring({
    from: {
      border: '1px solid rgba(255, 255, 255, 0.25)',
    },
    to: { border: '1px solid rgba(255, 255, 255, 0.99)' },
    loop: true,
    delay: 600,
    config: {
      tension: 120,
      friction: 14,
    },
  })

  return (
    <Container style={circleAnimation}>
      <Arrow color='white' size={25} style={arrowAnimation} />
    </Container>
  )
}

export default GoDownIndicator
