import styled from 'styled-components'
import {
  Flex,
  LiquidEffect,
  Spacer,
  Text,
  Shadow,
  TextTransitionEffect,
  ArrowButton,
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
  {
    name: 'audiojourney',
    video: '',
    description: `Here we explore the boundaries of web technologies (react/webGL/node)  creating an audio journey 
    in wich the user is able to create a 3D sound enviroment and move throught it using mobile gyroscope`,
    isSelected: false,
  },
]

const Works = () => {
  const scroll = useStore((state) => state.scroll)
  const [works, setWorks] = useState(list)
  const [currentDescription, setCurrentDescription] = useState(null)
  const [workIndex, setWorkIndex] = useState(0)

  const worksDescriptions = works.map(({ description }) => (
    <Text type={theme.fonts.p} color='grey'>
      {description}
    </Text>
  ))
  const worksTitles = works.map(({ name }) => (
    <Text fontFamily='Akira' fontWeight='900' fontSize='30px'>
      {name}
    </Text>
  ))

  // const selectedWork = useMemo(
  //   () => works.find(({ isSelected }) => isSelected),
  //   [works]
  // )
  // const onSelectWork = (selection, index) => {
  //   console.log(selection)
  //   useStore.setState({ letter: selection.name[0], changeCameraEffect: true })
  //   setSelection(selection)
  //   console.log(index)
  //   setCurrentDescription(index)
  // }
  const onSelectWork = (index) => {
    const newIndex =
      index >= works.length - 1 ? 0 : index === -1 ? works.length - 1 : index
    console.log(newIndex)
    useStore.setState({
      letter: works[newIndex]?.name[0],
      changeCameraEffect: true,
    })
    setWorkIndex(newIndex)
  }

  return (
    <Flex
      flexDirection='column'
      p={theme.spacing.small}
      height='100%'
      position='relative'
    >
      <Spacer vertical={theme.spacing.medium} />
      <Flex flexDirection='column'>
        <Text fontSize='20px' fontFamily='Akira' fontWeight='bold'>
          Selected
        </Text>
        <Flex pl={theme.spacing.small}>
          <Text fontSize='30px' fontFamily='Akira'>
            works
          </Text>
        </Flex>
      </Flex>
      <Flex height='500px' justifyContent='center' alignItems='center'>
        <Flex width='100%' justifyContent='space-between'>
          <ArrowButton
            rotation='90'
            arrowAnimationProps={{
              loop: false,
            }}
            circleAnimationProps={{
              delay: 2000,
              from: {
                border: '0.5px solid rgb(255 255 255 / 61%)',
              },
              to: {
                border: '0.5px solid rgb(255 255 255 / 100%)',
              },
            }}
            onClick={() => onSelectWork(workIndex + 1)}
          />
          <ArrowButton
            rotation='-90'
            arrowAnimationProps={{
              loop: false,
            }}
            circleAnimationProps={{
              delay: 2000,
              from: {
                border: '0.5px solid rgb(255 255 255 / 61%)',
              },
              to: {
                border: '0.5px solid rgb(255 255 255 / 100%)',
              },
            }}
            onClick={() => onSelectWork(workIndex - 1)}
          />
        </Flex>
      </Flex>
      <TextTransitionEffect
        animationProps={{ delay: 500 }}
        position={workIndex}
        texts={worksTitles}
        height={72}
      ></TextTransitionEffect>
      {/* <Spacer vertical={theme.spacing.small} /> */}
      <TextTransitionEffect
        animationProps={{ delay: 500 }}
        position={workIndex}
        texts={worksDescriptions}
      ></TextTransitionEffect>

      {/* <WorksList
        works={works}
        onChange={onSelectWork}
        selected={selectedWork}
      /> */}

      <Shadow />
    </Flex>
  )
}
export default Works
