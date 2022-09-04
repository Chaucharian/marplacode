import { theme } from '@/styles'
import React, { useState } from 'react'
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

const NavigationContainer = styled.header`
  ${({ show, open }) => `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: ${open ? '#FFF' : 'transparent'};
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

const ProgressLine = animated(styled.div`
  ${({ color = '#FFF', height = 0.5, width = 0, blendMode = 'normal' }) => `
    background-color: ${color};
    width: ${width}%;
    transition: all ease-in 0.5s;
    height: ${height}px;
    `}
`)

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const scroll = useStore((state) => state.scroll)
  const scrollPercentage = useScroll(scroll)

  const openHandler = () => {
    const navigationState = !open
    setOpen(navigationState)
    useStore.setState({ navigationState })
  }

  return (
    <NavigationContainer open={open} showFull={true}>
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
      >
        {/* <Logo open={show && !open}>marplacode;</Logo> */}
        <div style={{ width: '50px', height: '50px' }}></div>
        <BurgerButton open={open} onClick={openHandler} />
      </Flex>
      <Content open={open}>
        <Menu show={open} />
      </Content>
      <ProgressLine width={scrollPercentage > 20 ? 100 : 0} />
    </NavigationContainer>
  )
}

export default Navigation
