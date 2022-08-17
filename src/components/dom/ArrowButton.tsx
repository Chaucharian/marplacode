import { theme } from '@/styles'
import styled from 'styled-components'
import { FiChevronDown } from 'react-icons/fi'
import { useSpring } from '@react-spring/core'
import { animated } from '@react-spring/web'
import { FC } from 'react'

const Container = styled(animated.div)`
  ${({ rotation = 0 }) => `
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
  transform: rotate(${rotation}deg);
`}
`

const Arrow = styled(animated(FiChevronDown))``

const ArrowButton: FC<any> = ({
  arrowAnimationProps,
  circleAnimationProps,
  ...props
}) => {
  const arrowAnimation = useSpring({
    from: { position: 'absolute', top: 0 },
    to: { position: 'absolute', top: 20 },
    loop: true,
    delay: 600,
    config: {
      tension: 120,
      friction: 14,
    },
    ...arrowAnimationProps,
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
    ...circleAnimationProps,
  })

  return (
    <Container style={circleAnimation} {...props}>
      <Arrow color='white' size={15} style={arrowAnimation} />
    </Container>
  )
}

export default ArrowButton
