import { Button, Flex, GoDownIndicator, Text } from '@/components'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { theme } from '@/styles'
import useStore from '@/helpers/store'
import * as animations from '@/helpers/animations'
import Line from '@/components/dom/Line'
import { fonts } from '@/styles/theme'
import AppearingEffect from '@/components/dom/AppearingEffect'

const Shadow = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  backdrop-filter: blur(3px);
  top: 0;
  left: 0;
  z-index: -2;
  background-image: linear-gradient(#00000000, #000000);
`

const Colors = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 15;
`

const ColorContainer = styled.div`
  ${({ rotation = 0 }) => `
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  transform: rotate(${rotation}deg);
  animation: rotation 10s ease-in-out 2s infinite alternate;
  filter: blur(200px);


  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`}
`

const ColorBall = styled.div`
  ${({ color = '#9DE3D7' }) => `
  width: 200px;
  height: 200px;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: ${color};
  filter: blur(200px);
`}
`

const IndicatorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: -60px;
  left: 0;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const Landing = () => {
  const video = useStore((state) => state?.video)
  const navigationState = useStore((state) => state?.navigationState)
  const show = !navigationState

  console.log(show)
  const domReady = () => {
    setTimeout(() => useStore.setState({ domReady: true }), 1000)
    // useStore.setState({ domReady: true })
  }

  return (
    <>
      <Flex
        p={theme.spacing.small}
        flexDirection='column'
        justifyContent={'flex-end'}
        height={'100%'}
      >
        <Flex>
          <Flex flexDirection='column'>
            <AppearingEffect
              effect={show ? 'left' : 'top'}
              animationProps={{ delay: 500 }}
              show={show}
            >
              <Text type={theme.fonts.h1}>Hand</Text>
            </AppearingEffect>
            <AppearingEffect
              animationProps={{ delay: 1000 }}
              effect={show ? 'left' : 'top'}
              show={show}
            >
              <Text type={theme.fonts.p} fontWeight={'lighter'}>
                trough high quality design and development
              </Text>
            </AppearingEffect>
            <Flex height='48px' />
            <AppearingEffect
              animationProps={{ delay: 1500 }}
              effect={show ? 'left' : 'top'}
              show={show}
            >
              <Button
                onClick={() => {
                  console.log('asdsa')
                  video?.current?.play()
                }}
              >
                Start project
              </Button>
            </AppearingEffect>
            <Flex height='48px' />
          </Flex>

          <IndicatorContainer>
            <Flex justifyContent='end' pr={theme.spacing.small}>
              <AppearingEffect
                animationProps={{
                  delay: show ? 2000 : 600,
                  onResolve: () => domReady(),
                }}
                effect={show ? 'right' : 'bottom'}
                show={show}
              >
                <GoDownIndicator />
              </AppearingEffect>
            </Flex>
          </IndicatorContainer>
        </Flex>
        <Shadow />
      </Flex>
    </>
  )
}
export default Landing
