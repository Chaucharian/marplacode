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
    description:
      'booking platform aimed to improve daily customer experience making the whole process fast and easy',
    isSelected: true,
  },
  {
    name: 'turnate',
    video: '',
    description:
      'booking platform aimed to improve daily customer experience making the whole process fast and easy',
    isSelected: false,
  },
  {
    name: 'abrirchat',
    video: '',
    description: 'mobile application to open whatsapp conversations fast',
    isSelected: false,
  },
  {
    name: 'firpodrawing',
    video: '',
    description: 'drawing portfolio web page using custom design system',
    isSelected: false,
  },
]

const Works = () => {
  const scroll = useStore((state) => state.scroll)
  const [works, setWorks] = useState(list)
  const worksDescriptions = works.map(({ description }) => (
    <Text type={theme.fonts.p}>{description}</Text>
  ))
  const [currentDescription, setCurrentDescription] = useState(null)

  const [selectedWork, setSelection] = useState(null)
  // const selectedWork = useMemo(
  //   () => works.find(({ isSelected }) => isSelected),
  //   [works]
  // )
  const onSelectWork = (selection, index) => {
    console.log(selection)
    useStore.setState({ letter: selection.name[0], changeCameraEffect: true })
    setSelection(selection)
    console.log(index)
    setCurrentDescription(index)
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
        position={currentDescription}
        texts={worksDescriptions}
      ></TextTransitionEffect>
      <Spacer vertical={theme.spacing.medium} />
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
