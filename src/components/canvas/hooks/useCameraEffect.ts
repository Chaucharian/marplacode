import useStore from '@/helpers/store'
import { useScroll } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'

export const useCameraEffect = () => {
  // const camera = useThree((state) => state.camera)
  const [vec] = useState(() => new THREE.Vector3())
  const domReady = useStore((state) => state.domReady)
  const changeCameraEffect = useStore((state) => state.changeCameraEffect)

  const { size, viewport } = useThree()
  const mobile = size.width < 700

  // use this render to all
  return useFrame((state) => {
    // initial animation
    if (state.clock.elapsedTime < 6) {
      state.camera.position.lerp(
        vec.set(mobile ? 0 : -1.3, 0.2, domReady ? 0.001 : 3),
        0.05
      )
    }

    if (state.clock.elapsedTime >= 6) {
      // state.camera.position.z = 6

      // if (mobile) {
      //   state.camera.position.lerp(
      //     vec.set(
      //       state.camera.position.x,
      //       state.camera.position.y,
      //       Math.sin(state.clock.elapsedTime) * 4
      //     ),
      //     0.05
      //   )
      // } else {
      //   state.camera.position.lerp(
      //     vec.set(
      //       state.camera.position.x - 1.3,
      //       state.camera.position.y + 0.5,
      //       -1
      //     ),
      //     0.05
      //   )
      // }

      if (changeCameraEffect) {
        // push letter back
        if (state.camera.position.z < 17) {
          state.camera.position.lerp(
            vec.set(
              state.camera.position.x,
              state.camera.position.y,
              state.camera.position.z + 17
            ),
            0.05
          )
        }
        // pull letter to the front
        if (state.camera.position.z >= 16) {
          useStore.setState({
            changeCameraEffect: false,
          })
        }
      } else {
        // idle effect
        state.camera.position.lerp(
          vec.set(
            mobile ? Math.sin(state.clock.elapsedTime) * 0.3 : -1.7,
            state.camera.position.y,
            Math.sin(state.clock.elapsedTime) * 0.3
          ),
          0.05
        )
      }
    }
  })
}
