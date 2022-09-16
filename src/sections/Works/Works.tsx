import styled from 'styled-components'
import {
  Flex,
  LiquidEffect,
  Spacer,
  Text,
  Shadow,
  TextTransitionEffect,
  ArrowButton,
  Link,
} from '@/components/dom'
import theme, { device, fonts } from '@/styles/theme'
import useStore from '@/helpers/store'
import React, { useEffect, useMemo, useState } from 'react'
import { WorksList } from './components/WorksList'
import { useSpring } from '@react-spring/core'
import AppearingEffect from '@/components/dom/AppearingEffect'
import { title } from 'process'
import { Container } from '../components'
import { useWindowSize } from 'usehooks-ts'
import { useIsMobile, useScroll } from '@/helpers/hooks'

const list = [
  {
    name: 'turnate',
    videoUrl: '',
    description:
      'booking platform aimed to improve daily customer experience making the whole process fast and easy',
    isSelected: false,
  },
  {
    name: 'abrirchat',
    videoUrl: '/videos/marplacode.mp4',
    description: 'mobile application to open whatsapp conversations fast',
    isSelected: false,
  },
  {
    name: 'firpodrawing',
    videoUrl: '/videos/firpo.mp4',
    description: 'drawing portfolio web page using custom design system',
    isSelected: false,
  },
  {
    name: 'audiojourney',
    videoUrl: '/videos/cuberto.mp4',
    description: `Here we explore the boundaries of web technologies (react/webGL/node)  creating an audio journey 
    in wich the user is able to create a 3D sound enviroment and move throught it using mobile gyroscope`,
    isSelected: false,
  },
  {
    name: 'clean-app',
    videoUrl: '/videos/dreii.mp4',
    url: 'https://www.behance.net/gallery/126504683/Cleanapp-UX-UI-Case-Study',
    description: `Design and development of Mobile/Web digital platform`,
    isSelected: false,
  },
]

const Works = () => {
  const scroll = useStore((state) => state.scroll)
  const [works, setWorks] = useState(list)
  const [workIndex, setWorkIndex] = useState(0)
  const scrollPercentage = useScroll(scroll)
  const sectionActive = scrollPercentage >= 28
  // const isMobile = useIsMobile()

  // console.log(scrollPercentage)
  const worksDescriptions = works.map(({ description, url }) => (
    <>
      <Text type={theme.fonts.p} fontSize='17px' color='grey'>
        {description}
      </Text>
      <Spacer vertical={theme.spacing.small} />
      <Link show={true} color1='grey' color2='white' href={url} target='_blank'>
        <Text
          type={theme.fonts.span}
          color='grey'
          hover={{ color: 'white' }}
          fontSize={'16px'}
          transition='all .5s cubic-bezier(0.45, 0.05, 0.55, 0.95)'
        >
          Ver sitio
        </Text>
      </Link>
    </>
  ))
  const worksTitles = works.map(({ name }) => (
    <Text fontFamily='LibreFranklin' fontWeight='lighter' fontSize='42px'>
      {name}
    </Text>
  ))

  const onSelectWork = (index) => {
    const newIndex =
      index >= works.length - 1 ? 0 : index === -1 ? works.length - 1 : index
    useStore.setState({
      letter: works[newIndex]?.name[0],
      videoUrl: works[newIndex]?.videoUrl,
      changeCameraEffect: true,
    })
    setWorkIndex(newIndex)
  }

  useEffect(() => {
    // once the user reaches this section, set first work letter
    if (sectionActive) {
      useStore.setState({
        letter: works[0]?.name[0],
      })
    }
  }, [sectionActive])

  return (
    <Container minHeight='750px' pt='200px' pb='180px' shadow blur={0}>
      <Flex flexDirection='column' width='300px' pb='125px'>
        <Text type={theme.fonts.h1} fontWeight='bold'>
          Selected
        </Text>
        <Flex justifyContent='space-around'>
          <Text
            type={theme.fonts.h2}
            fontFamily='LibreFranklin'
            fontWeight='lighter'
          >
            works
          </Text>
        </Flex>
      </Flex>

      <Flex position='relative'>
        <Flex
          position='absolute'
          width='100%'
          height='100%'
          justifyContent='space-between'
          alignItems='center'
        >
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
          <Flex></Flex>
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
        <Flex height='500px' justifyContent='center' alignItems='center'>
          <Flex
            width='100%'
            pl={{ md: '160px' }}
            pt={{ _: '500px', md: '50px' }}
          >
            <Flex width='100%'>
              <Flex width='400px' flexDirection='column'>
                <TextTransitionEffect
                  animationProps={{ delay: 500 }}
                  position={workIndex}
                  texts={worksTitles}
                  height={72}
                ></TextTransitionEffect>
                <TextTransitionEffect
                  animationProps={{ delay: 500 }}
                  position={workIndex}
                  texts={worksDescriptions}
                ></TextTransitionEffect>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  )
}
export default Works
