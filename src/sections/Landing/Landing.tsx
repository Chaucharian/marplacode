import { Button, Flex, GoDownIndicator, Text } from '@/components'
import styled from 'styled-components'
import React from 'react'
import { theme } from '@/styles'
import useStore from '@/helpers/store'
import * as animations from '@/helpers/animations'
import Line from '@/components/dom/Line'
import { fonts } from '@/styles/theme'

const Shadow = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
  background-image: linear-gradient(#00000000, #000000);
`

const IndicatorContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 300000;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const Landing = () => {
  const show = useStore((state) => state.domReady)

  return (
    <>
      <Shadow />
      <Flex
        p={theme.spacing.small}
        flexDirection='column'
        justifyContent={'flex-end'}
        height={'100%'}
      >
        <Flex>
          <Flex flexDirection='column'>
            <Text type={theme.fonts.h1}>Hand</Text>
            <Text type={theme.fonts.p} fontWeight={'lighter'}>
              trough high quality design and development
            </Text>
            <Flex height='48px' />
            <Button>Start project</Button>
            <Flex height='48px' />
          </Flex>

          <IndicatorContainer>
            <Flex justifyContent='end' pr={theme.spacing.small}>
              <GoDownIndicator />
            </Flex>
          </IndicatorContainer>
        </Flex>
      </Flex>
    </>
  )
}
export default Landing
