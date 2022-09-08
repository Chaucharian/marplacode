import { theme } from '@/styles'
import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import Flex from '../Flex'
import BurgerButton from '../BurgerButton'
import Logo from '../Logo'
import useStore from '@/helpers/store'
import Line from '../Line'
import Menu from './Menu'
import * as animations from '@/helpers/animations'
import { device } from '@/styles/theme'
import { animated } from 'react-spring'
import { useScroll } from '@/helpers/hooks/useScroll'
import AppearingEffect from '../AppearingEffect'
import Lottie from 'react-lottie-player'
import animationLogo from 'public/marplacodeanimation.json'

import { Shadow } from '@/components'

const NavigationContainer = styled.header`
  ${({ show, open }) => `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    // background: ${open ? '#FFF' : 'transparent'};
    backdrop-filter: blur(10px);
    transition: all cubic-bezier(0, 0, 0.2, 1) 0.5s;
    width: 100%;
    min-height: 4em;
    max-height: 100%;

    @media ${device.desktop} {
      // width: ${open ? '50vh' : '0px'}; 
    }
`}
`

const Content = styled.div`
  ${({ open }) => `
  transition: all ease-in 0.5s;
  @media ${device.mobile} {
  width: 100%;
   height: ${open ? '100vh' : '0px'}; 
  }
  visibility:  ${open ? 'visible' : 'hidden'};

  @media ${device.desktop} {
   width: ${open ? '50vh' : '0px'}; 
   height: ${open ? '100vh' : '0px'}; 
  }
`}
`

const Backdrop = styled.div`
  ${({ open }) => `
  transition: all cubic-bezier(0, 0, 0.04, 1) 0.5s;
  background: white;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: ${open ? '0%' : '100%'};
  z-index: -1;

  @media ${device.desktop} {
    width: 100%;
    left: ${open ? '55%' : '100%'};
  }

`}
`

const ProgressLine = animated(styled.div`
  ${({
    color = '#FFF',
    height = 0.5,
    width = 0,
    opacity = 0,
    blendMode = 'normal',
  }) => `
    background-color: ${color};
    width: ${width}%;
    opacity: ${opacity}%;
    transition: all ease-in-out 0.5s;
    height: ${height}px;
    `}
`)

const Svg = styled.svg`
  transition: all ease-in-out 1s;
`
const Path = styled.path`
  transition: all ease-in-out 1s;
`
const Navigation = () => {
  const [open, setOpen] = useState(false)
  const [direction, setDirection] = useState<any>(1)
  const [play, setPlay] = useState<any>(false)

  const scroll = useStore((state) => state.scroll)
  const scrollTo = useStore((state) => state.scrollTo)
  const domReady = useStore((state) => state.domReady)
  const scrollPercentage = useScroll(scroll)
  const whiteSection = scrollPercentage >= 25 && scrollPercentage <= 55

  const openHandler = () => {
    const navigationState = !open
    setOpen(navigationState)
    useStore.setState({ navigationState })
  }

  const onMenuClick = (page) => {
    openHandler()
    scrollTo(page)
  }

  // const logo = useRef()

  useEffect(() => {
    // lottie.loadAnimation({
    //   container: logo.current, // the dom element that will contain the animation
    //   renderer: 'svg',
    //   name: 'logo',
    //   loop: false,
    //   autoplay: true,
    //   path: '/marplacodeanimation.json', // the path to the animation json
    // })
  }, [])

  useEffect(() => {
    if (open) {
      setDirection(-1)
      setPlay(true)
    } else {
      setDirection(1)
      setPlay(true)
    }
  }, [scrollPercentage, open])

  return (
    <NavigationContainer open={open} showFull={true}>
      <Backdrop open={open}>
        <Flex pl={{ _: '45px', md: '98px' }} pr={{ _: '30px', md: '98px' }}>
          <Menu show={open} onClick={onMenuClick} />
        </Flex>
      </Backdrop>
      <Flex
        justifyContent='space-between'
        height={'4em'}
        pl={{
          _: theme.spacing.horizontal.mobile,
          md: theme.spacing.horizontal.desktop,
        }}
        pr={{
          _: theme.spacing.horizontal.mobile,
          md: theme.spacing.horizontal.desktop,
        }}
        zIndex={10}
      >
        <Flex alignItems='center' pl={'20px'}>
          <AppearingEffect animationProps={{ delay: 500 }}>
            <Lottie
              animationData={animationLogo}
              play={play}
              // loop={true}
              goTo={20}
              direction={direction}
              style={{ width: 150, height: 150 }}
            />
          </AppearingEffect>
        </Flex>
        <BurgerButton
          color={whiteSection || open ? 'black' : 'white'}
          open={open}
          onClick={openHandler}
        />
      </Flex>

      {/* <Content open={open}>
        <Menu show={open} />
      </Content> */}
      {!open && (
        <ProgressLine
          color={whiteSection ? 'black' : 'white'}
          // width={scrollPercentage > 20 ? 100 : 0}
          width={100}
          opacity={domReady ? 35 : 0}
        />
      )}

      {open && <Shadow height='100vh' />}
    </NavigationContainer>
  )
}

export default Navigation
