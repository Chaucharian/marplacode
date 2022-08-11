import styled from 'styled-components'
import { Text, Line, Flex, Shadow, Spacer } from '@/components/dom'
import { theme } from '@/styles'
import { useSpring } from '@react-spring/core'
import React, { useEffect, useRef, useState, useMemo } from 'react'
import { animated } from '@react-spring/web'
import useStore from '@/helpers/store'

const Container = animated(styled.div`
  overflow: scroll;
  overflow-x: hidden;
  height: 200px;
  position: relative;
  display: flex;
  flex-direction: column;

  & > div {
    cursor: pointer;
    user-select: none;
  }
`)

const SelectionEffect = animated(styled.span`
  ${({ top = 0 }) => `
    pointer-events: none;
    position: absolute;
    transition: all cubic-bezier(0.6, -0.28, 0.74, 0.05) 0.5s;
    top: ${top};
    left: 5%;
    height: 50px;
    width: 200px;
    background: white;
    mix-blend-mode: difference;
`}
`)

export const WorksList = ({ works, selected, onChange }: any) => {
  const [list, setList] = useState(works)
  const effectPosition = useMemo(() => {
    let position = 0
    list.forEach((item, index) => {
      if (item.name === selected?.name) {
        position = index
      }
    })
    return position
  }, [selected])

  console.log(effectPosition)

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
            // fontWeight={selected?.name === work.name ? '900' : 'lighter'}
            // fontWeight={'lighter'}
            fontSize='35px'
            fontFamily='Akira'
            // color={work.isSelected ? theme.colors.orange : theme.colors.primary}
            onClick={() => onChange(work)}
            onMouseOver={() => setHover(true, index)}
            onMouseLeave={() => setHover(false, index)}
          >
            {work.name}
          </Text>
          <Line color='grey' height={2} play={true} />
          <Line color='white' height={2} play={work?.hover} />
          <Spacer vertical={theme.spacing.small} />
        </Flex>
      ))}
      <SelectionEffect
        top={`${effectPosition * (effectPosition >= 2 ? 30 : 25)}%`}
      />
    </Container>
  )
}
