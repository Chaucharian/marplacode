import styled from 'styled-components'
import { Text } from '@/components/dom'
import { theme } from '@/styles'
import { useSpring } from '@react-spring/core'
import { useEffect, useRef, useState } from 'react'
import { animated } from '@react-spring/web'
import useStore from '@/helpers/store'

const Container = animated(styled.div`
overflow: 
  display: flex;
  flex-direction: column;
`)

export const WorksList = ({ works, onChange }: any) => {
  return (
    <Container>
      {works.map((work) => (
        <Text
          key={work.name}
          fontWeight={'lighter'}
          type={theme.fonts.h2}
          fontSize='80px'
          color={work.isSelected ? theme.colors.orange : theme.colors.primary}
          onClick={() => onChange(work)}
        >
          {work.name}
        </Text>
      ))}
    </Container>
  )
}
