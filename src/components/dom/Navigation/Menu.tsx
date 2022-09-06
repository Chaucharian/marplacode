import { theme } from '@/styles'
import React, { useState } from 'react'
import styled from 'styled-components'
import Flex from '../Flex'
import BurgerButton from '../BurgerButton'
import Logo from '../Logo'
import useStore from '@/helpers/store'
import Line from '../Line'
import { Link, Text } from '@/components/dom/'
import {
  config,
  useChain,
  useSpring,
  useSpringRef,
  useTransition,
} from '@react-spring/core'
import * as animations from '@/helpers/animations'
import { animated } from '@react-spring/web'
import AppearingEffect from '../AppearingEffect'
import { Spacer } from '@/components'

const Container = styled(animated.div)`
  padding: ${theme.spacing.small};
`

const Nav = styled(animated.nav)`
  display: flex;
  align-items: center;

  ul {
    margin: 0;
    padding: 0;
  }

  span {
    color: #000;
    font-size: 8px;
    font-family: Inter;
    font-weight: 100;
  }
`

const Li = styled(animated.li)`
  list-style: none;
  position: relative;

  a {
    color: #000;
    font-family: Newake;
    font-size: 50px;
    font-weight: bold;
    text-decoration: none;
    line-height: 1.3;
  }

  .a {
    position: absolute;
    transition: all ease-in 0.5s;
    top: 30%;
    left: -100%;
    height: 0.5px;
    width: 150px;
    background: #0f6dc5d6;
    mix-blend-mode: difference;
  }

  .b {
    position: absolute;
    transition: all ease-in 0.5s;
    top: 90%;
    left: 100%;
    height: 1px;
    width: 80px;
    background: #0f6dc5d6;
    mix-blend-mode: difference;
  }

  &:hover {
    .a {
      left: 50%;
    }
    .b {
      left: -100%;
    }
  }
`

const menuItems = [
  { name: 'Home', link: 'home' },
  { name: 'Why Us', link: 'history' },
  { name: 'Works', link: 'works' },
  { name: 'Contact', link: 'contact' },
]

const Menu = ({ show, onClick }: any) => {
  const itemClick = (index) => {
    onClick(index)
  }

  return (
    <Container>
      <AppearingEffect show={show} effect='top' blendMode='difference'>
        <Spacer vertical={theme.spacing.medium} />
        <Text type={theme.fonts.span}>Menu</Text>
        <Spacer vertical={theme.spacing.small} />
      </AppearingEffect>
      <Nav>
        <ul>
          {menuItems.map((item, index) => (
            <Li key={index}>
              <AppearingEffect
                show={show}
                effect='top'
                animationProps={{ delay: 50 * index }}
              >
                <div>
                  <span>{index + 1}.</span>
                </div>
                <a onClick={() => itemClick(index)}>{item.name}</a>
                <div className='a'></div>
                <div className='b'></div>
              </AppearingEffect>
            </Li>
          ))}
        </ul>
      </Nav>
      <Spacer vertical={theme.spacing.large} />
      <AppearingEffect
        show={show}
        animationProps={{ delay: show ? 350 : 0 }}
        effect='top'
        blendMode='difference'
      >
        <Text type={theme.fonts.span}>Get in touch</Text>
        <Link show={show} href='mailto:hello@marplacode.com'>
          <Text type={theme.fonts.span} fontSize={'16px'}>
            hello@marplacode.com
          </Text>
        </Link>
      </AppearingEffect>
    </Container>
  )
}

export default Menu
