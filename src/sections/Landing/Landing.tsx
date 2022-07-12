import { Flex, Text } from '@/components'
import styled from 'styled-components'
import React from 'react'
import { theme } from '@/styles'
import useStore from '@/helpers/store'
import * as animations from '@/helpers/animations'
import Line from '@/components/dom/Line'

const Container = styled.section`
  width: 100%;
  height: 100vh;
  margin-top: 100px;
`

const Landing = () => {
  const show = useStore((state) => state.domReady)

  return (
    <Container>
      <Flex padding={theme.spacing.small}>
        <Line
          animation={{
            ...animations.lineGrow,
            delay: 500,
            to: { width: `75%` },
            reverse: !show,
          }}
        />
        <Text
          animation={{
            ...animations.textAppears,
            reverse: !show,
          }}
          fontWeight='light'
          color={theme.colors.orange}
          type={theme.fonts.span}
          blendMode='normal'
        >
          .scroll
        </Text>
      </Flex>
    </Container>
  )
}
export default Landing
