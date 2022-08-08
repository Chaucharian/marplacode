import { Button, Flex, GoDownIndicator, Text } from '@/components'
import styled from 'styled-components'
import React from 'react'
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
  top: 0;
  left: 0;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const Landing = () => {
  const video = useStore((state) => state?.video)
  const navigationState = useStore((state) => state?.navigationState)
  const show = useStore((state) => state.domReady) && !navigationState

  return (
    <>
      {/* <ColorContainer>
        <ColorBall color='#9DE3D7' />
      </ColorContainer>
      <ColorContainer rotation={200}>
        <ColorBall color='#318FC3' />
      </ColorContainer>
      <ColorContainer rotation={90}>
        <ColorBall color='#027F70' />
      </ColorContainer> */}
      <Flex
        p={theme.spacing.small}
        flexDirection='column'
        justifyContent={'flex-end'}
        height={'100%'}
        style={{ zIndex: 10 }}
      >
        <Flex>
          <Flex flexDirection='column'>
            <AppearingEffect
              show={show}
              effect={show ? 'left' : 'top'}
              animationProps={{ delay: 200 }}
            >
              <Text type={theme.fonts.h1}>Hand</Text>
            </AppearingEffect>
            <AppearingEffect
              animationProps={{ delay: 400 }}
              show={show}
              effect={show ? 'left' : 'top'}
            >
              <Text type={theme.fonts.p} fontWeight={'lighter'}>
                trough high quality design and development
              </Text>
            </AppearingEffect>
            <Flex height='48px' />
            <AppearingEffect
              animationProps={{ delay: 600 }}
              show={show}
              effect={show ? 'left' : 'top'}
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
                animationProps={{ delay: 900 }}
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
