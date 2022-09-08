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
  width: 100vw;
  height: 100vh;
  position: fixed;
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
    title: 'Hand',
    description: 'we aimed for handcrafted and polish products',
  },
  { title: 'Detail', description: 'we are detail oriented' },
  { title: 'Making', description: 'uniques design pieces' },
]

const Landing = () => {
  const scroll = useStore((state) => state.scroll)
  const scrollPercentage = useScroll(scroll)
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
    <Container>
      <Flex
        m={theme.spacing.small}
        flexDirection='column'
        justifyContent={{ _: 'flex-end', md: 'center' }}
        height={'100%'}
        position='relative'
        zIndex={1}
      >
        <Flex>
          <Flex flexDirection='column'>
            <AppearingEffect
              effect={show ? 'bottom' : 'top'}
              animationProps={{ delay: 500 }}
              show={show}
            >
              <Text type={theme.fonts.h1}>{title}</Text>
            </AppearingEffect>
            <AppearingEffect
              animationProps={{ delay: 700 }}
              effect={show ? 'bottom' : 'top'}
              show={show}
            >
              <Text type={theme.fonts.p} fontWeight={'lighter'}>
                {description}
              </Text>
            </AppearingEffect>
            <Flex height='48px' />
            <AppearingEffect
              animationProps={{ delay: 900 }}
              effect={show ? 'top' : 'top'}
              show={show}
            >
              <Button
                onClick={() => {
                  scrollTo(2)
                  // video?.current?.play()
                }}
              >
                Start project
              </Button>
            </AppearingEffect>
            <Flex height='48px' />
          </Flex>

          <IndicatorContainer>
            <Flex
              justifyContent={{ _: 'flex-end', md: 'center' }}
              pr={theme.spacing.small}
              pb={{ _: '20%', md: '10%' }}
            >
              <AppearingEffect
                animationProps={{
                  delay: show ? 2000 : 600,
                  onResolve: () => domReady(),
                }}
                effect={show ? 'bottom' : 'bottom'}
                show={show}
              >
                <ArrowButton />
              </AppearingEffect>
            </Flex>
          </IndicatorContainer>
        </Flex>
      </Flex>
      <Shadow />
    </Container>
  )
}
export default Landing
