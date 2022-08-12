import { Flex, Line } from '.'
import styled from 'styled-components'
import { useState } from 'react'

const Container = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
`

const Link = ({ show, color1 = 'white', color2 = 'black', children }) => {
  const [hover, setHover] = useState(false)

  return (
    <div>
      <Container
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
        <Line color={color1} play={show} />
        <Flex position='absolute' bottom={0} width='100%'>
          <Line color={color2} height={2} play={hover} />
        </Flex>
      </Container>
    </div>
  )
}

export default Link
