import {
  Button,
  Flex,
  ArrowButton,
  Shadow,
  Text,
  TextTransitionEffect,
} from '@/components'
import styled from 'styled-components'
import React, { useCallback, useEffect, useState } from 'react'
import { theme } from '@/styles'
import useStore from '@/helpers/store'
import { device, fonts } from '@/styles/theme'
import AppearingEffect from '@/components/dom/AppearingEffect'
import { Container } from '../components'
import { useScroll } from '@/helpers/hooks'
import { SECTIONS } from '@/pages'

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

const smookesMock = [
  {
    name: 'Digital Studio',
    description: 'creating next gen web/mobile',
  },
  { name: 'best-in-class', description: 'experiences and technologies' },
  { name: 'hand-crafted', description: 'crafting refined visual outputs' },
]

const Landing = () => {
  const onScroll = useCallback((progress) => {
    // set intro video on landing
    if (progress < 12) {
      useStore.setState({
        videoUrl: '/videos/liquid.mp4',
      })
    }
  }, [])
  const { progress, locomotiveScroll } = useScroll({})
  const [buttonEffect, setButtonEffect] = useState(false)

  const smookes = smookesMock.map(({ name, description }) => (
    <>
      <Text fontFamily='LibreFranklin' fontWeight='lighter' fontSize='42px'>
        {name}
      </Text>
      <Text type={theme.fonts.p} color='grey' fontWeight={'lighter'}>
        {description}
      </Text>
    </>
  ))

  const show = true

  const domReady = () => {
    setTimeout(() => useStore.setState({ domReady: true }), 1000)
  }

  return (
    <>
      <Container
        shadow
        id={SECTIONS.landing}
        data-scroll
        data-scroll-sticky
        data-scroll-speed='3'
      >
        <Flex
          flexDirection='column'
          justifyContent={{ _: 'flex-end', md: 'center' }}
          height={'100vh'}
          position='relative'
          pb={{ _: '100px' }}
          zIndex={1}
        >
          <Flex>
            <Flex flexDirection='column' data-scroll data-scroll-speed='3'>
              <AppearingEffect
                effect={show ? 'bottom' : 'top'}
                animationProps={{ delay: 2000, minWidth: '400px' }}
                show={show}
              >
                <TextTransitionEffect
                  texts={smookes}
                  height={110}
                  transitionDelay={5000}
                  onChange={(index) => {
                    progress <= 15 &&
                      useStore.setState({ letter: smookesMock[index].name[0] })
                  }}
                ></TextTransitionEffect>
              </AppearingEffect>
              <Flex height='48px' />
              <AppearingEffect
                animationProps={{
                  delay: 2400,
                  onResolve: () => setButtonEffect(true),
                }}
                containerProps={{
                  'data-scroll': 'true',
                }}
                effect={show ? 'top' : 'top'}
                show={show}
              >
                <Flex p={{ md: 10 }}>
                  <Button
                    fontSize='20px'
                    onClick={() => {
                      locomotiveScroll?.scrollTo(`#${SECTIONS.contact}`)
                    }}
                  >
                    Start project
                  </Button>
                </Flex>
              </AppearingEffect>
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
                  <Flex p={{ md: '20px' }}>
                    <ArrowButton
                      height={55}
                      width={55}
                      onClick={() =>
                        locomotiveScroll?.scrollTo(`#${SECTIONS.whyus}`)
                      }
                      data-scroll-speed='3'
                      data-scroll-delay='0.5'
                    />
                  </Flex>
                </AppearingEffect>
              </Flex>
            </IndicatorContainer>
          </Flex>
        </Flex>
      </Container>
    </>
  )
}
export default Landing
