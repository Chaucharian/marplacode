import styled from 'styled-components'
import { Text, Line, Flex, Shadow, Spacer } from '@/components/dom'
import { theme } from '@/styles'
import { useSpring } from '@react-spring/core'
import React, { useEffect, useRef, useState } from 'react'
import { animated } from '@react-spring/web'
import useStore from '@/helpers/store'

const Container = animated(styled.div`
  overflow: scroll;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  span {
    position: absolute;
    transition: all ease-in 0.5s;
    top: 0%;
    left: 100%;
    height: 10px;
    width: 80px;
    background: white;
    mix-blend-mode: difference;
  }

  &:hover {
    span {
      left: 50%;
    }
  }
`)

export const WorksList = ({ works, onChange }: any) => {
  const [list, setList] = useState(works)

  const setHover = (state: boolean, itemIndex: number) => {
    const newList = [...list].map((item, index) => {
      if (index === itemIndex) {
        item.hover = state
      } else {
        item.hover = false
      }
      return item
    })
    setList(newList)
  }

  return (
    <Container>
      {works.map((work, index) => (
        <Flex flexDirection='column'>
          <Text
            key={work.name}
            fontWeight={'lighter'}
            fontSize='35px'
            fontFamily='Akira'
            color={work.isSelected ? theme.colors.orange : theme.colors.primary}
            onClick={() => onChange(work)}
            onMouseOver={() => setHover(true, index)}
            onMouseLeave={() => setHover(false, index)}
          >
            {work.name}
            <span></span>
          </Text>
          <Line color='grey' height={2} play={true} />
          <Line color='white' height={2} play={work?.hover} />
          <Spacer vertical={theme.spacing.small} />
        </Flex>
      ))}
      <Shadow />
    </Container>
  )
}
