import { Button, Flex, ArrowButton, Shadow, Text } from '@/components'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { theme } from '@/styles'
import useStore from '@/helpers/store'
import { device, fonts } from '@/styles/theme'
import AppearingEffect from '@/components/dom/AppearingEffect'
import { useChangeDescription } from './hooks/useChangeDescription'
import { Container } from '../components'
import { useScroll } from '@/helpers/hooks'

const IndicatorContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Content = styled.div`
  @media ${device.desktop} {
    min-width: ${theme.sizes.desktop.contentWidth};
  }
`

const options = [
  {
    title: 'Hand Crafted',
    description: 'we aimed for handcrafted and polish products',
  },
  { title: 'Detail Oriented', description: 'obsed with tiny pixels' },
  { title: 'Making Experiences', description: 'uniques design pieces' },
]

const Landing = () => {
  const scroll = useStore((state) => state.scroll)
  const scrollPercentage = useScroll(scroll)
  const scrollTo = useStore((state) => state.scrollTo)
  const [buttonEffect, setButtonEffect] = useState(false)
  const { title, description } = useChangeDescription({
    time: 4000,
    options,
    onChange: ({ title }) => {
      scrollPercentage <= 20 && useStore.setState({ letter: title[0] })
    },
  })

  const video = useStore((state) => state?.video)
  const navigationState = useStore((state) => state?.navigationState)
  const show = true

  const domReady = () => {
    setTimeout(() => useStore.setState({ domReady: true }), 1000)
  }

  return (
    <Container shadow>
      <Flex
        m={theme.spacing.small}
        flexDirection='column'
        justifyContent={{ _: 'flex-end', md: 'center' }}
        height={'100vh'}
        position='relative'
        zIndex={1}
      >
        <Flex>
          <Flex flexDirection='column'>
            <AppearingEffect
              effect={show ? 'bottom' : 'top'}
              animationProps={{ delay: 2000 }}
              show={show}
            >
              <Text type={theme.fonts.h1}>{title}</Text>
            </AppearingEffect>
            <AppearingEffect
              animationProps={{ delay: 2200 }}
              effect={show ? 'bottom' : 'top'}
              show={show}
            >
              <Text type={theme.fonts.p} fontWeight={'lighter'}>
                {description}
              </Text>
            </AppearingEffect>
            <Flex height='48px' />
            <AppearingEffect
              animationProps={{
                delay: 2400,
                onResolve: () => setButtonEffect(true),
              }}
              // containerProps={{
              //   style: { overflow: buttonEffect ? 'visible' : 'hidden' },
              // }}
              effect={show ? 'top' : 'top'}
              show={show}
            >
              <Flex p={{ md: 10 }}>
                <Button
                  fontSize='20px'
                  onClick={() => {
                    scrollTo(3.5)
                  }}
                >
                  Start project
                </Button>
              </Flex>
            </AppearingEffect>
            <Flex height='48px' />
          </Flex>

          <IndicatorContainer>
            <Flex
              justifyContent={{ _: 'flex-end', md: 'center' }}
              pr={{ _: theme.spacing.small }}
              pb={{ _: '20%', md: '10%' }}
            >
              <AppearingEffect
                animationProps={{
                  from: { opacity: 0, transform: `translate(0,-100%)` },
                  to: { opacity: 1, transform: `translate(0,0%)` },
                  delay: show ? 2600 : 600,
                  onResolve: () => domReady(),
                }}
                effect={show ? 'top' : 'bottom'}
                show={show}
              >
                <ArrowButton
                  height={55}
                  width={55}
                  onClick={() => scrollTo(1)}
                />
              </AppearingEffect>
            </Flex>
          </IndicatorContainer>
        </Flex>
      </Flex>
    </Container>
  )
}
export default Landing
