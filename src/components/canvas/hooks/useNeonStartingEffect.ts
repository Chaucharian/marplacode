import { useFrame } from '@react-three/fiber'
import { useState } from 'react'

export const useNeonStartingEffect = ({ colors = ['#000', '#FFF'] } = {}) => {
  const [color, setColor] = useState(colors[0])
  const [finished, setFinished] = useState(false)

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (time >= 0.3 && time <= 0.4) {
      setColor(colors[1])
    } else if (time >= 0.5 && time <= 0.7) {
      setColor(colors[0])
    } else if (time >= 0.8 && time <= 1) {
      setColor(colors[1])
    } else if (time >= 1.2 && time <= 1.5) {
      setColor(colors[0])
    } else if (time >= 1.5 && time <= 1.6) {
      setFinished(true)
      setColor(colors[1])
    }
  })
  return { color, finished }
}
