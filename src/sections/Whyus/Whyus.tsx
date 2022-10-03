import styled from 'styled-components'
import { Flex, Spacer, Text } from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React, { useState } from 'react'
import Line from '@/components/dom/Line'
import { lineGrow } from '@/helpers/animations'
import { ServicesList } from './components'
import GlowText from '@/components/dom/GlowText'
import { Container } from '../components'
import { SECTIONS } from '@/pages'

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
      'Next gen SEO',
      'Creative development',
      'NextJS, Vercel',
      'Cutting edge UI/UX',
    ],
    open: false,
  },
  {
    title: 'Consulting',
    description:
      'Driven by innovation and human behavior, our web design agency is changing the way brands connect with audiences in a digital world. Discover why market leaders choose our enterprise solutions.',
    content: ['Creative strategy', 'MVP validation', 'Business strategy'],
    open: false,
  },
]

const WhyUs = () => {
  const scroll = useStore((state) => state.scroll)
  const show = useStore((state) => state.domReady)
  // const animate = scroll >= 0.15
  const [listOpen, setListOpen] = useState(false)

  return (
    <Container
      bg='white'
      data-scroll
      data-scroll-speed='2'
      data-scroll-target='#landing'
      id={SECTIONS.whyus}
    >
      <Flex
        flexDirection={{ _: 'column', md: 'row' }}
        // justifyContent='space-between'
        pb={{ _: '180px', md: '360px' }}
        pt={{ _: '180px', md: '360px' }}
      >
        <Flex flexDirection='column' width={{ md: '560px' }}>
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
        <Flex
          width={{ md: theme.spacing.large }}
          // height={{ _: theme.spacing.large }}
        />
        <Flex
          // minWidth={{ md: '400px' }}
          width={{ md: '50%' }}
          pt={'100px'}
          // height='400px'
          flexDirection='column'
          justifyContent='center'
        >
          <ServicesList
            play={true}
            services={servicesData}
            onChange={() => setListOpen(!listOpen)}
          />
        </Flex>
      </Flex>
    </Container>
  )
}
export default WhyUs
