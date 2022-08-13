import styled from 'styled-components'
import {
  Flex,
  LiquidEffect,
  Spacer,
  Text,
  Shadow,
  TextTransitionEffect,
} from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React, { useMemo, useState } from 'react'
import { WorksList } from './components/WorksList'
import { useSpring } from '@react-spring/core'
import AppearingEffect from '@/components/dom/AppearingEffect'
import { title } from 'process'

const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding-left: ${theme.spacing.small};
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
  const [selectedWork, setSelection] = useState(null)
  // const selectedWork = useMemo(
  //   () => works.find(({ isSelected }) => isSelected),
  //   [works]
  // )
  const onSelectWork = (selection) => {
    useStore.setState({ letter: selection.name[0] })
    setSelection(selection)
  }

  // const [show, ]
  // useSpring({
  //   left: show ? '-100%' : '50%'
  // })

  return (
    <Flex
      flexDirection='column'
      p={theme.spacing.small}
      height='100%'
      position='relative'
    >
      <Spacer vertical={theme.spacing.medium} />
      <Flex flexDirection='column'>
        <Text fontSize='30px' fontFamily='Akira' fontWeight='bold'>
          Selected
        </Text>
        <Flex pl={theme.spacing.small}>
          <Text fontSize='50px' fontFamily='Akira'>
            works
          </Text>
        </Flex>
      </Flex>
      <Spacer vertical='500px' />
      <TextTransitionEffect
        animationProps={{ delay: 500 }}
        texts={[
          <Text type={theme.fonts.h1}>asdasdasds</Text>,
          <Text type={theme.fonts.h1}>EEEAAA</Text>,
          <Text type={theme.fonts.h1}>PAPA</Text>,
          <Text type={theme.fonts.h1}>QUEONDA</Text>,
        ]}
      ></TextTransitionEffect>
      <Spacer vertical={theme.spacing.small} />
      <WorksList
        works={works}
        onChange={onSelectWork}
        selected={selectedWork}
      />

      <Shadow />
    </Flex>
  )
}
export default Works
