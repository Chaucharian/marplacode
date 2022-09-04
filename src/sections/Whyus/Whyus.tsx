import styled from 'styled-components'
import { Flex, Spacer, Text } from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React from 'react'
import Line from '@/components/dom/Line'
import { lineGrow } from '@/helpers/animations'
import { ServicesList } from './components'
import GlowText from '@/components/dom/GlowText'
import { Container } from '../components'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.desktop} {
    flex-direction: row;
  }
`

const servicesData = [
  // {
  //   title: 'Web3',
  //   content: ['ERC20 tokens', 'deploy on any network', 'smart contracts'],
  //   open: false,
  // },
  {
    title: 'Product design',
    description: `Once we have an idea of your needs, a research and design process begins to gain deep knowledge about the business, users and world context.
With that data in mind, we’re able to design a structurally, visually and technically better solution.`,
    content: ['Research', 'Ideation', 'Prototyping'],
    open: false,
  },
  {
    title: 'Web/Mobile',
    description: `Once your digital product is designed and validated, in example, a website, we move forward with the development process using the newest and most optimized technologies.`,
    content: [
      'be visible with next gen SEO',
      'Creative development',
      '3D interactive projects',
      'Cutting edge UI/UX',
    ],
    open: false,
  },
  {
    title: 'Consulting',
    content: ['Creative strategy', 'MVP validation', 'Business strategy'],
    open: false,
  },
]

const WhyUs = () => {
  const scroll = useStore((state) => state.scroll)
  const show = useStore((state) => state.domReady)
  // const animate = scroll >= 0.15

  return (
    <Container bg='white'>
      <Content>
        <Flex flexDirection='column' maxWidth='560px'>
          <Text type={theme.fonts.p} color='#000'>
            Our approach
          </Text>
          <Flex height={theme.spacing.small} />
          <GlowText fontSize={{ _: '40px', md: '60px' }}>Creative</GlowText>
          <Text type={theme.fonts.h3} color='#000'>
            development studio
          </Text>

          <Flex height={theme.spacing.small} />
          <Text type={theme.fonts.p} color='#465764'>
            We focus on making the essence of your project visible through
            high-level design and development.
          </Text>
        </Flex>
        <Spacer horizontal={theme.spacing.large} />
        <Flex
          minWidth={{ md: '400px' }}
          height='500px'
          flexDirection='column'
          justifyContet='center'
        >
          <Spacer vertical={theme.spacing.large} />
          <ServicesList play={true} services={servicesData} />
        </Flex>
      </Content>
    </Container>
  )
}
export default WhyUs
