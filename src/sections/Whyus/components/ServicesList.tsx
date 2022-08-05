import { Flex, Text, Line, Spacer, OpenButton } from '@/components/dom'
import { theme } from '@/styles'
import { lineGrow } from '@/helpers/animations'
import { animated, useSpring } from '@react-spring/web'
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

const Content = styled.div`
  ${({ open }) => `
  transition: all ease-in 0.5s;
  height: ${open ? '80px' : '0px'};
  opacity:  ${open ? '1' : '0'};
`}
`
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
      {services.map(({ title, content, open }, index) => (
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
              {content.map((item) => (
                <>
                  <Text type={theme.fonts.span}>{item}</Text>
                  <Spacer vertical={theme.spacing.small} />
                </>
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
