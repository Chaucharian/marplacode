import { Button, Flex, ArrowButton, Shadow, Text } from '@/components'
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { theme } from '@/styles'
import useStore from '@/helpers/store'
import * as animations from '@/helpers/animations'
import Line from '@/components/dom/Line'
import { fonts } from '@/styles/theme'
import AppearingEffect from '@/components/dom/AppearingEffect'
import { useChangeDescription } from './hooks/useChangeDescription'

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

const options = [
  { title: 'Hand', description: 'trough high quality design and development' },
  { title: 'Design', description: 'desiging everything from scratch' },
  { title: 'Making', description: 'making any dream possible' },
]

const Landing = () => {
  const workSelected = useStore((state) => state?.changeCameraEffect)
  const { title, description } = useChangeDescription({
    time: 4000,
    options,
    onChange: ({ title }) => {
      !workSelected && useStore.setState({ letter: title[0] })
    },
  })
  const video = useStore((state) => state?.video)
  const navigationState = useStore((state) => state?.navigationState)
  const show = !navigationState

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
        position='relative'
      >
        <Flex>
          <Flex flexDirection='column'>
            <AppearingEffect
              effect={show ? 'left' : 'top'}
              animationProps={{ delay: 500 }}
              show={show}
            >
              <Text type={theme.fonts.h1}>{title}</Text>
            </AppearingEffect>
            <AppearingEffect
              animationProps={{ delay: 1000 }}
              effect={show ? 'left' : 'top'}
              show={show}
            >
              <Text type={theme.fonts.p} fontWeight={'lighter'}>
                {description}
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
                  // video?.current?.play()
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
                <ArrowButton />
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
