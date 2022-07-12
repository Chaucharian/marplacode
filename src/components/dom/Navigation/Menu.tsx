import { theme } from '@/styles'
import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from '../Flex'
import BurgerButton from '../BurgerButton'
import Logo from '../Logo'
import useStore from '@/helpers/store'
import Line from '../Line'
import { Text } from '@/components/dom/'
import {
  config,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from '@react-spring/core'
import * as animations from '@/helpers/animations'
import { animated } from '@react-spring/web'

const Nav = styled(animated.nav)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1em;
  ul {
    margin: 0;
    padding: 0;
  }
`

const Li = styled(animated.li)`
  list-style: none;

  a {
    color: #fff;
    font-size: 50px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    line-height: 1.3;
  }
  span {
    color: white;
    font-size: 8px;
    font-family: Inter;
    font-weight: 100;
  }
`

const menuItems = [
  { name: 'HOME', link: 'home' },
  { name: 'OUR SERVICES', link: 'services' },
  { name: 'WHO WE ARE', link: 'history' },
  { name: 'CONTACT', link: 'contact' },
]

const Menu = ({ show }: any) => {
  // Set refs - required for useChain
  const navRef = useSpringRef()
  const liRef = useSpringRef()

  // Setup animation for nav element
  const navAnimation = useSpring<any>({
    ref: navRef,
    config: config.default,
    from: { width: '0%' },
    to: { width: show ? '100%' : '0%' },
  })
  const transitionConfig: any = {
    ref: liRef,
    trail: 400 / menuItems.length,
    from: { opacity: 0, transform: 'translateY(20px)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(20px)' },
  }
  // Setup animations for nav items
  const liTransitions = useTransition(show ? menuItems : [], transitionConfig)

  // On showMenu, start with nav animationm then nav items
  const animationOrder: any = show ? [navRef, liRef] : [liRef, navRef]
  useChain(animationOrder, [0, show ? 0.4 : 0.6])

  return (
    // <Nav style={springProps}>
    <Nav>
      <ul>
        {liTransitions((springAnimation, key, { item }, index) => {
          return (
            <>
              <Li key={key} style={springAnimation}>
                <div>
                  <span>{index + 1}.</span>
                </div>
                <a href={item.link}>{item.name}</a>
              </Li>
            </>
          )
        })}
      </ul>
    </Nav>
  )
}

export default Menu