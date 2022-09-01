import styled from 'styled-components'
import { Flex, Spacer, Text } from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React from 'react'
import Line from '@/components/dom/Line'
import { lineGrow } from '@/helpers/animations'
import { ServicesList } from './components'
import GlowText from '@/components/dom/GlowText'

const Container = styled.div`
  height: 100%;
  display: flex;
  background-color: white;
  padding: ${theme.spacing.small};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.desktop} {
    flex-direction: row;
  }
`

const WhyUs = () => {
  const scroll = useStore((state) => state.scroll)
  const show = useStore((state) => state.domReady)
  // const animate = scroll >= 0.15

  return (
    <Container>
      <Content>
        <Flex flexDirection='column' maxWidth='560px'>
          <Text type={theme.fonts.p} color='#000'>
            Our approach
          </Text>
          <Flex height={theme.spacing.small} />
          <Text type={theme.fonts.h2} color='#000'>
            Creative
          </Text>
          <Text type={theme.fonts.h3} color='#000'>
            development
          </Text>
          <GlowText>studio</GlowText>
          <Flex height={theme.spacing.small} />
          <Text type={theme.fonts.p} color='#465764'>
            We focus on making the essence of your project visible through
            high-level design and development.
          </Text>
        </Flex>
        <Spacer horizontal={theme.spacing.large} />
        <Flex maxWidth='500px' flexDirection='column' justifyContet='center'>
          <Spacer vertical={theme.spacing.large} />
          <ServicesList play={true} />
          <Spacer vertical={theme.spacing.large} />
        </Flex>
      </Content>
    </Container>
  )
}
export default WhyUs
