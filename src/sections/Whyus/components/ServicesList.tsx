import {
  Flex,
  Text,
  Line,
  Spacer,
  OpenButton,
  Button,
  Chip,
} from '@/components/dom'
import { theme } from '@/styles'
import { lineGrow } from '@/helpers/animations'
import { animated, config, useSpring, useTransition } from '@react-spring/web'
import styled from 'styled-components'
import { useState } from 'react'
import AppearingEffect from '@/components/dom/AppearingEffect'

const Content = animated(styled.div`
  ${({ open }) => `
  z-index:  ${open ? '1' : '-1'};
  transition: all ease-in-out 0.5s;
  height: ${open ? '300px' : '0px'};
  opacity: ${open ? '100%' : '0%'};
  // display: ${open ? 'block' : 'none'};
`}
`)
const Item = animated(styled.div`
  ${({ open }) => `
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`}
`)

const ItemContent = ({ open, delay, children }) => {
  const animation = useSpring({
    opacity: open ? 1 : 0,
    delay,
  })
  return <animated.div style={animation}>{open && children}</animated.div>
}

const ServicesList = ({
  play,
  services: initialServices,
  onChange = () => {},
}) => {
  const [services, setServices] = useState(initialServices)

  const openItem = (itemIndex: number) => {
    const newServices = [...services].map((service, index) => {
      if (index === itemIndex) {
        service.open = service.open ? false : true
      } else {
        service.open = false
      }
      onChange()
      return service
    })

    setServices(newServices)
  }

  return (
    <Flex flexDirection='column' justifyContent='center'>
      {services.map(({ title, open, content, description = '' }, index) => (
        <Flex flexDirection='column'>
          <Item onClick={() => openItem(index)}>
            <Text
              type={theme.fonts.h3}
              fontWeight={'200'}
              fontSize='27px'
              color='#000'
            >
              {title}
            </Text>
            <OpenButton open={open} />
          </Item>
          <Spacer vertical={theme.spacing.tiny} />
          <Line delay={500} play={play} />
          <Content open={open}>
            <Flex p={theme.spacing.small} height='100%' flexWrap='wrap'>
              <div>
                <Text
                  fontSize='16px'
                  fontFamily='Circular'
                  fontWeight='normal'
                  color='#777777'
                >
                  {description}
                </Text>
                {/* </AppearingEffect> */}
                <Spacer vertical={theme.spacing.small} />
              </div>
              {content.map((item, index) => (
                <>
                  <ItemContent open={open} delay={100 * index}>
                    <Chip>{item}</Chip>
                    <Spacer vertical={theme.spacing.small} />
                  </ItemContent>
                  <Spacer horizontal={theme.spacing.small} />
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
