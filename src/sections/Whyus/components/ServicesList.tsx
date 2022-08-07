import { Flex, Text, Line, Spacer, OpenButton } from '@/components/dom'
import { theme } from '@/styles'
import { lineGrow } from '@/helpers/animations'
import { animated, config, useSpring, useTransition } from '@react-spring/web'
import styled from 'styled-components'
import { useState } from 'react'

const mock = [
  {
    title: 'Product design',
    content: ['Research', 'Ideation', 'Prototyping'],
    open: false,
  },
  {
    title: 'Fron-end dev',
    content: [
      'Creative development',
      '3D interactive projects',
      'Cutting edge UI/UX',
    ],
    open: false,
  },
  {
    title: 'Consulting',
    content: ['Creative strrategy', 'MVP validation', 'Business strategy'],
    open: false,
  },
]

const Content = animated(styled.div`
  ${({ open }) => `
  z-index: 100;
  transition: all ease-in 0.5s;
  height: ${open ? '80px' : '0px'};
`}
`)

const Item = ({ open, delay, children }) => {
  const animation = useSpring({
    opacity: open ? 1 : 0,
    delay,
  })
  return <animated.div style={animation}>{open && children}</animated.div>
}

const ServicesList = ({ play, services: initialServices = mock }) => {
  const [services, setServices] = useState(initialServices)

  const openItem = (itemIndex: number) => {
    const newServices = [...services].map((service, index) => {
      if (index === itemIndex) {
        service.open = service.open ? false : true
      } else {
        service.open = false
      }
      return service
    })

    setServices(newServices)
  }

  return (
    <Flex flexDirection='column'>
      {services.map(({ title, open, content }, index) => (
        <Flex flexDirection='column'>
          <Flex justifyContent='space-between'>
            <Text type={theme.fonts.h3} fontWeight={'lighter'} fontSize='27px'>
              {title}
            </Text>
            <OpenButton open={open} onClick={() => openItem(index)} />
          </Flex>
          <Spacer vertical={theme.spacing.tiny} />
          <Line delay={500} play={play} />
          <Content open={open}>
            <Flex
              p={theme.spacing.small}
              height='100%'
              flexWrap='wrap'
              flexDirection='column'
            >
              {content.map((item, index) => (
                <Item open={open} delay={200 * index}>
                  <Text color='#000' type={theme.fonts.span}>
                    {item}
                  </Text>
                  <Spacer vertical={theme.spacing.small} />
                </Item>
              ))}
            </Flex>
          </Content>
          <Spacer vertical={theme.spacing.small} />
        </Flex>
      ))}
    </Flex>
  )
}

export default ServicesList
