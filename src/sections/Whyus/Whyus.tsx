import styled from 'styled-components'
import { Flex, Spacer, Text } from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React from 'react'
import Line from '@/components/dom/Line'
import { lineGrow } from '@/helpers/animations'
import { ServicesList } from './components'

const WhyUs = () => {
  const scroll = useStore((state) => state.scroll)
  const show = useStore((state) => state.domReady)
  const animate = scroll >= 0.15

  return (
    <Flex
      height='100%'
      bg='white'
      p={theme.spacing.small}
      flexDirection='column'
    >
      <Flex height={theme.spacing.medium} />
      <Text type={theme.fonts.h3}>Why Us</Text>
      <Flex height={theme.spacing.medium} />
      <Text type={theme.fonts.h2}>A createive development studio</Text>
      <Flex height={theme.spacing.medium} />
      <Text type={theme.fonts.p} color='#465764'>
        that build hand crafted web experiences delivering high quality digital
        products.
      </Text>
      <Spacer vertical={theme.spacing.large} />
      <ServicesList play={animate} />
    </Flex>
  )
}
export default WhyUs
