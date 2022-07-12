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
const Content = styled.div`
  background-color: white;
  height: 100vh;
  padding: ${theme.spacing.small};
`

const FloatingTextContainer = styled.div`
  ${({ top = 0, show }) => `
  position: absolute;
  top: -30px;
  transition: all 1s ease;
  opacity: ${show ? 1 : 0};
  left: ${theme.spacing.small};

  @media ${device.desktop} {
    top: -40px;
  }
`}
`

const WhyUs = () => {
  const scroll = useStore((state) => state.scroll)
  const show = useStore((state) => state.domReady)
  const animate = scroll >= 0.15

  return (
    <>
      <Container>
        <FloatingTextContainer show={show}>
          <Text fontWeight='lighter'>Why us</Text>
        </FloatingTextContainer>
        <Content>
          <Flex height={'150px'} />
          <Text
            fontWeight='lighter'
            color={theme.colors.orange}
            type={theme.fonts.span}
            blendMode='normal'
          >
            .what we do
          </Text>
          <Flex height={0} mT={theme.spacing.small} mB={theme.spacing.small}>
            <Line
              animation={{ ...lineGrow, reverse: !animate }}
              color={theme.colors.orange}
            />
          </Flex>

          <Text fontWeight='lighter' type={theme.fonts.p}>
            marplacode is a high-quality product agency focused on developing
            next generation web applications, transforming them into a
            sustainable business while ensuring they stay true to their core
            values.
          </Text>
        </Content>
      </Container>
    </>
  )
}
export default WhyUs
