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
import { SECTIONS } from '@/pages'

const list = [
  // {
  //   name: 'turnate',
  //   videoUrl: '',
  //   description:
  //     'booking platform aimed to improve daily customer experience making the whole process fast and easy',
  //   isSelected: false,
  // },
  {
    name: 'beton',
    videoUrl: '/videos/blue.mp4',
    description: `Beton is an Argentinian construction firm making buildings possible since 1960s. Its mission is to provide the best value with quality and flexibility in an offer that meets the needs of their
     clients, thats why we developed this creative landing experience showing the whole contruction process from beginning to end`,
    url: 'https://beton.marplacode.com',
    isSelected: false,
  },
  {
    name: 'firpodrawing',
    videoUrl: '/videos/wave2.mp4',
    description: `Creative landing development aimed to showcase the artist's talen throug best-in-class design and motion animations`,
    url: 'https://firpodrawings.marplacode.com',
    isSelected: false,
  },
  {
    name: 'audiojourney',
    videoUrl: '/videos/wave.mp4',
    description: `Here we explore the boundaries of web technologies (react/webGL/node) creating an audio journey 
    in wich the user is able to create a 3D sound enviroment and move throught it using mobile gyroscope, its a mobile only experience best suited for headphones, allowing to generate sounds and play with them`,
    url: 'https://audiojourney.marplacode.com',
    isSelected: false,
  },
  {
    name: 'clean-app',
    videoUrl: '/videos/liquidd.mp4',
    url: 'https://www.behance.net/gallery/126504683/Cleanapp-UX-UI-Case-Study',
    description: `With clean-app we want to create a platform that reinterprets and therefore disrupts the whole laundry industry, Our goal is to create a friendly yet professional Mobile app for user
     - Design & development
    `,
    isSelected: false,
  },
]

const Works = () => {
  const scroll = useStore((state) => state.scroll)
  const [works, setWorks] = useState(list)
  const [workIndex, setWorkIndex] = useState(0)
  const scrollPercentage = useScroll(scroll)
  const sectionActive = scrollPercentage >= 22

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
          View more
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
    <Container
      minHeight='750px'
      pt='200px'
      pb='180px'
      shadow
      blur={0}
      position='relative'
      id={SECTIONS.works}
    >
      <Flex
        position='absolute'
        top={{ _: '40%', md: '50%' }}
        left={{ _: theme.spacing.small, md: theme.spacing.horizontal.desktop }}
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
      </Flex>
      <Flex
        position='absolute'
        top={{ _: '40%', md: '50%' }}
        right={{ _: theme.spacing.small, md: theme.spacing.horizontal.desktop }}
      >
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

      <Flex flexDirection='column' width='300px'>
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

      <Flex width='100%' pl={{ md: '160px' }} pt={{ _: '300px', md: '125px' }}>
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
    </Container>
  )
}
export default Works
