import styled from 'styled-components'
import { Flex, Text } from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React from 'react'
import Line from '@/components/dom/Line'
import { lineGrow } from '@/helpers/animations'

const Container = styled.section`
  width: 100%;
  height: 100vh;
`

const Content = styled.section`
  width: 100%;
  height: 50%;
  background: ${theme.colors.primary};
`

const Contact = () => {
  const scroll = useStore((state) => state.scroll)
  const show = useStore((state) => state.domReady)
  const animate = scroll >= 0.15

  return (
    <Container>
      <Flex height={'50%'}></Flex>
      <Content></Content>
    </Container>
  )
}
export default Contact
