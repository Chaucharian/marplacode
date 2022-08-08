import { Button, Flex, GoDownIndicator, Text } from '@/components'
import styled from 'styled-components'
import React from 'react'
import { theme } from '@/styles'
import useStore from '@/helpers/store'
import * as animations from '@/helpers/animations'
import Line from '@/components/dom/Line'
import { fonts } from '@/styles/theme'
import AppearingText from '@/components/dom/AppearingText'
import AppearingEffect from '@/components/dom/AppearingText'

const Shadow = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
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
  const show = useStore((state) => state.domReady)
  const video = useStore((state) => state?.video)
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
        style={{ zIndex: 300001 }}
      >
        <Flex>
          <Flex flexDirection='column'>
            <AppearingEffect show={show}>
              <Text type={theme.fonts.h1}>Hand</Text>
            </AppearingEffect>
            <AppearingEffect animationProps={{ delay: 500 }} show={show}>
              <Text type={theme.fonts.p} fontWeight={'lighter'}>
                trough high quality design and development
              </Text>
            </AppearingEffect>
            <Flex height='48px' />
            <AppearingEffect animationProps={{ delay: 700 }} show={show}>
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
                effect='top'
                show={show}
              >
                <GoDownIndicator />
              </AppearingEffect>
            </Flex>
          </IndicatorContainer>
        </Flex>
      </Flex>
      {/* <Shadow /> */}
    </>
  )
}
export default Landing
