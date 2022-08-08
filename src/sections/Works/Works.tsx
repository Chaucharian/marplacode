import styled from 'styled-components'
import { Flex, LiquidEffect, Spacer, Text } from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React, { useMemo, useState } from 'react'
import { WorksList } from './components/WorksList'

const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding-left: ${theme.spacing.small};
`
const Content = styled.div`
  background-color: white;
  height: 100vh;
  padding: ${theme.spacing.small};
`

const FloatingTextContainer = styled.div`
  ${({ top = 0 }) => `
  position: absolute;
  top: -30px;
  left: 30px;

  @media ${device.desktop} {
    top: -40px;
  }
`}
`

const Box = styled.div`
  ${({ top = 0 }) => `  
  position: absolute;
  top: -10px;
  z-index: -20;
  background-color: white;
  width: 100px;
  height: 30px;
`}
`
const BoxC = styled.div`
  ${({ top = 0 }) => `
  position:relative;
overflow: hidden;
`}
`

const list = [
  {
    name: 'pianucci',
    video: '',
    description: 'appointment custom website aimed to improve user flow',
    isSelected: true,
  },
  { name: 'turnate', video: '', description: '', isSelected: false },
  { name: 'abrirchat', video: '', description: '', isSelected: false },
  { name: 'firpodrawing', video: '', description: '', isSelected: false },
]

const Works = () => {
  const scroll = useStore((state) => state.scroll)
  const [works, setWorks] = useState(list)
  const selectedWork = useMemo(
    () => works.find(({ isSelected }) => isSelected),
    [works]
  )
  const onSelectWork = (selection) => {
    useStore.setState({ letter: selection.name[0] })
    const newWorks = [...works].map((work) => {
      work.isSelected = false
      if (work.name === selection.name) {
        work.isSelected = true
      }

      return work
    })
    setWorks(newWorks)
  }

  return (
    <Flex flexDirection='column' p={theme.spacing.small}>
      <Spacer vertical={theme.spacing.medium} />

      <BoxC>
        <Text type={theme.fonts.h1} fontFamily='Akira' fontSize={'30px'}>
          Selected works
        </Text>
        <Box />
      </BoxC>

      <Flex height={theme.spacing.small} />
      <WorksList
        works={works}
        onChange={onSelectWork}
        selectedWork={selectedWork}
      />
      <Flex mT={theme.spacing.small}>
        <Text type={theme.fonts.p}>{selectedWork?.description}</Text>
      </Flex>
    </Flex>
  )
}
export default Works
