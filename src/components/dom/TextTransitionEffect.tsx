import { animated, useSpring, UseSpringProps } from '@react-spring/web'
import { FC, useEffect, useState } from 'react'

export interface AppearingEffectProps {
  show?: boolean
  effect?: 'left' | 'right' | 'top' | 'bottom'
  rotation?: number
  animationProps?: any
  blendMode?: string
  texts: any
  position?: number
}

const TextTransitionEffect: FC<AppearingEffectProps> = ({
  show = true,
  effect = 'left',
  rotation = 0,
  blendMode = 'normal',
  animationProps,
  position = 0,
  texts,
}) => {
  const xEffect =
    effect === 'left' ? '-100%' : effect === 'right' ? '100%' : '0%'
  const yEffect =
    effect === 'top' ? '-100%' : effect === 'bottom' ? '100%' : '0%'
  // const [prevChildren, setPrevChildren] = useState(null)
  const [currentPosition, setCurrentPosition] = useState(0)

  const [animation, start] = useSpring(() => ({
    from: {
      transform: `translate(${xEffect},-${
        texts.length * 100
      }px ) rotate(${rotation}deg)`,
    },
    ...animationProps,
  }))

  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     const newPosition = currentPosition + 1
  //     setCurrentPosition(newPosition)
  //   }, 6000)
  //   return () => clearTimeout(id)
  // }, [currentPosition])

  useEffect(() => {
    const newPosition =
      position === null
        ? -texts.length * 100
        : (texts.length * 100 - position * 100) * -1
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
        height: '100px',
      }}
    >
      <animated.div style={{ ...animation, position: 'absolute' }}>
        {texts.map((text, index) => (
          <animated.div>{text}</animated.div>
        ))}
      </animated.div>
    </animated.div>
  )
}

export default TextTransitionEffect
