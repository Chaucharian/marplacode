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

const NavigationContainer = styled.header`
  ${({ show, showFull }) => `
    position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background: ${showFull ? 'rgb(255 255 255 / 6%)' : 'transparent'};
  backdrop-filter: blur(10px);
  transition: all ease-in 0.5s;
  width: 100%;
  min-height: 4em;
  max-height: 100%;
  visibility:  ${show ? 'visible' : 'hidden'};
`}
`

const Content = styled.div`
  ${({ open }) => `
  transition: all ease-in 0.5s;
  width: 100%;
  height: ${open ? '100vh' : '0px'};
`}
`

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const show = useStore((state) => state.domReady)
  const scroll = useStore((state) => state.scroll)

  return (
    <NavigationContainer show={show} showFull={scroll >= 0.06}>
      <Flex
        justifyContent='space-between'
        height={'4em'}
        p={theme.spacing.small}
      >
        {/* <Logo open={show && !open}>marplacode;</Logo> */}
        <div style={{ width: '50px', height: '50px' }}></div>
        <BurgerButton open={open} show={show} onClick={() => setOpen(!open)} />
      </Flex>
      <Content open={open}>
        <Menu show={open} />
      </Content>
      <Line
        animation={{
          ...animations.lineGrow,
          to: { width: `${scroll * 100}%` },
          reverse: !show,
        }}
      />
    </NavigationContainer>
  )
}

export default Navigation
