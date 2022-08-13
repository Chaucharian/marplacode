import { animated, useSpring, UseSpringProps } from '@react-spring/web'
import { FC, useEffect, useState } from 'react'

export interface AppearingEffectProps {
  show?: boolean
  effect?: 'left' | 'right' | 'top' | 'bottom'
  rotation?: number
  animationProps?: any
  blendMode?: string
  texts: any
  height?: number
  position?: number
}

const TextTransitionEffect: FC<AppearingEffectProps> = ({
  show = true,
  effect = 'left',
  rotation = 0,
  blendMode = 'normal',
  animationProps,
  height = 200,
  position = 0,
  texts,
}) => {
  const xEffect =
    effect === 'left' ? '-100%' : effect === 'right' ? '100%' : '0%'
  const yEffect =
    effect === 'top' ? '-100%' : effect === 'bottom' ? '100%' : '0%'

  const [animation, start] = useSpring(() => ({
    from: {
      transform: `translate(${xEffect},-${
        texts.length * height
      }px ) rotate(${rotation}deg)`,
    },
    ...animationProps,
  }))

  useEffect(() => {
    const newPosition =
      position === null
        ? texts.length * height
        : position === 0
        ? 0
        : -(position * height)

    console.log(newPosition)

    start({
      transform: `translate(0px, ${newPosition}px)  rotate(0deg)`,
      ...animationProps,
    })
  }, [position])

  return (
    <animated.div
      style={{
        color: 'white',
        overflow: 'hidden',
        mixBlendMode: blendMode,
        position: 'relative',
        height: `${height}px`,
      }}
    >
      <animated.div style={{ ...animation, position: 'absolute' }}>
        {texts.map((text, index) => (
          <animated.div style={{ height: `${height}px` }}>{text}</animated.div>
        ))}
      </animated.div>
    </animated.div>
  )
}

export default TextTransitionEffect
