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
        {/* <FloatingTextContainer show={show}>
          <Text fontWeight='lighter'>Why us</Text>
        </FloatingTextContainer> */}
        <Content>
          {/* <Flex height={'150px'} /> */}
          <Text
            fontWeight='lighter'
            color={theme.colors.orange}
            type={theme.fonts.span}
            blendMode='normal'
          >
            .we are
          </Text>
          <Flex height={0} mT={theme.spacing.small} mB={theme.spacing.small}>
            <Line
              animation={{ ...lineGrow, reverse: !animate }}
              color={theme.colors.orange}
            />
          </Flex>
          <Text fontWeight={'bold'} fontSize={'40px'} type={theme.fonts.p}>
            A creative development studio
          </Text>
          <Text fontSize='35px' type={theme.fonts.p}>
            that builds
          </Text>
        </Content>
      </Container>
    </>
  )
}
export default WhyUs
