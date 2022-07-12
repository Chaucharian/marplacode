import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { animated, config, useSpring } from 'react-spring'

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`

const AnimatedContainer = animated(Container)

const TransitionMounted = ({ children }: any) => {
  const [flip, set] = useState(true)
  const props = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    reset: true,
    reverse: flip,
    // reverse: flip,
    delay: 200,
    config: config.molasses,
    // onRest: () => set(!flip),
  })

  return <AnimatedContainer style={{ ...props }}>{children}</AnimatedContainer>
}

export default TransitionMounted
