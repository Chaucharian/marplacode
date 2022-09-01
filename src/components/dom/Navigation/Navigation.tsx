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

const NavigationContainer = styled.header`
  ${({ show, open }) => `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background: ${open ? '#0f6dc5d6' : 'transparent'};
    backdrop-filter: blur(10px);
    transition: all ease-in 0.5s;
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

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const scroll = useStore((state) => state.scroll)

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
        p={theme.spacing.small}
      >
        {/* <Logo open={show && !open}>marplacode;</Logo> */}
        <div style={{ width: '50px', height: '50px' }}></div>
        <BurgerButton open={open} onClick={openHandler} />
      </Flex>
      <Content open={open}>
        <Menu show={open} />
      </Content>
      <Line />
    </NavigationContainer>
  )
}

export default Navigation
