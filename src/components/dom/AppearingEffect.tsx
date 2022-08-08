import { animated, useSpring, UseSpringProps } from '@react-spring/web'
import { FC } from 'react'

export interface AppearingEffectProps {
  show?: boolean
  effect?: 'left' | 'right' | 'top' | 'bottom'
  rotation?: number
  animationProps?: UseSpringProps
  children: any
}

const AppearingEffect: FC<AppearingEffectProps> = ({
  show = false,
  effect = 'left',
  rotation = 0,
  animationProps,
  children,
}: any) => {
  const xEffect =
    effect === 'left' ? '-100%' : effect === 'right' ? '100%' : '0%'
  const yEffect =
    effect === 'top' ? '-100%' : effect === 'bottom' ? '100%' : '0%'

  const animation = useSpring({
    transform: show
      ? 'translate(0px, 0px)  rotate(0deg)'
      : `translate(${xEffect},${yEffect} ) rotate(${rotation}deg)`,
    ...animationProps,
  })

  return (
    <animated.div style={{ color: 'white', overflow: 'hidden' }}>
      <animated.div style={animation}>{children}</animated.div>
    </animated.div>
  )
}

export default AppearingEffect
