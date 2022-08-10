import styled from 'styled-components'
import { Flex, Spacer, Text } from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React from 'react'
import Line from '@/components/dom/Line'
import { lineGrow } from '@/helpers/animations'
import { ServicesList } from './components'
import GlowText from '@/components/dom/GlowText'
import AppearingEffect from '@/components/dom/AppearingEffect'
import { config, useSpring } from '@react-spring/core'
import { animated } from '@react-spring/web'

// const MovingTextContainer = styled(animated.div)`
//   position: absolute;
//   top: 0;
//   left: 0%;
// `

// const MovingText = ({ children }) => {
//   return (
//     <Flex>
//       <MovingTextContainer>
//         <Text fontFamily='Akira'>{children}</Text>
//       </MovingTextContainer>
//     </Flex>
//   )
// }

const WhyUs = () => {
  const scroll = useStore((state) => state.scroll)
  const show = useStore((state) => state.domReady)
  // const animate = scroll >= 0.15

  return (
    <Flex
      height='100%'
      bg='white'
      p={theme.spacing.small}
      flexDirection='column'
      position='relative'
    >
      {/* <MovingText>MARPLACODE</MovingText> */}
      <Flex height={theme.spacing.medium} />
      <Text type={theme.fonts.h3}>Why Us</Text>

      <Flex height={theme.spacing.medium} />
      <Text type={theme.fonts.h2}>A createive development</Text>
      <GlowText>studio</GlowText>
      <Flex height={theme.spacing.small} />
      <Text type={theme.fonts.p} color='#465764'>
        that build hand crafted web experiences delivering high quality digital
        products.
      </Text>
      <Spacer vertical={theme.spacing.large} />
      <ServicesList play={true} />
    </Flex>
  )
}
export default WhyUs
