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
  const letter = useStore((state) => state.letter)
  const animationState: any = useRef({ endTime: 0 })

  return useFrame((state) => {
    // if user scroll a little
    // if (scroll.visible(0, 0.08)) {

    // }
    // dispatch current scroll
    // useStore.setState(() => ({ scroll: Number(scroll.offset.toFixed(2)) }))

    // if (mouseMove) {
    //   const scrollDelta = scroll.range(0, 1) * 10
    //   const scrollVelocity = 2
    //   // camera.position.y = Math.sin((state.mouse.x / 4) * 0.1)
    //   // let cameraPosition = scrollVelocity * scrollDelta
    //   let cameraPositionZ = Math.sin((scrollVelocity * scrollDelta) / 4)
    //   let cameraPositionY = Math.sin((scrollVelocity * scrollDelta) / 8)

    //   camera.position.z = cameraPositionZ <= 0.15 ? 0.15 : cameraPositionZ
    //   // camera.position.y = cameraPositionY

    //   // const selectedWorksVisible = scroll.visible(2 / 4, 1 / 4)
    //   // if (selectedWorksVisible) {
    //   //   camera.position.z = -(scrollVelocity * scrollDelta)
    //   // }
    // }

    // initial animation
    state.camera.position.lerp(vec.set(0, 0.2, domReady ? 0.001 : 3), 0.05)

    // state.camera.lookAt(0, 0, 0)
    // camera.position.z =
    //   Math.sin(state.clock.elapsedTime * (state.mouse.x / 4)) * 20
    // camera.position.x = Math.cos(state.mouse.x) * 10
    // state.camera.position.lerp(vec.set(0.2, 0.2, 14), 0.05)
    // camera.position.z = 3
    if (state.clock.elapsedTime >= 6) {
      // state.camera.position.z = 6

      if (changeCameraEffect) {
        // once a work option is selected
        // state.camera.position.lerp(
        //   vec.set(
        //     Math.cos(state.clock.elapsedTime) * 0.5,
        //     state.camera.position.y,
        //     Math.sin(state.clock.elapsedTime) * 2
        //   ),
        //   0.05
        // )
        state.camera.position.lerp(
          vec.set(
            state.camera.position.x,
            state.camera.position.y,
            Math.sin(state.clock.elapsedTime) * 4
          ),
          0.05
        )
        // if (
        //   Math.round(state.clock.elapsedTime) <
        //   Math.round(state.clock.elapsedTime) + 2
        // ) {
        //   state.camera.position.lerp(
        //     vec.set(state.camera.position.x, state.camera.position.y, 10),
        //     0.05
        //   )
        // } else {
        //   state.camera.position.lerp(
        //     vec.set(state.camera.position.x, state.camera.position.y, 1),
        //     0.05
        //   )
        // }
        // animationState.current.endTime = Math.round(state.clock.elapsedTime) + 2
        // if (
        //   animationState.current.endTime === Math.round(state.clock.elapsedTime)
        // ) {
        //   console.log(console.log('PASARON 2!'))
        // }
      } else {
        // idle effect
        state.camera.position.lerp(
          vec.set(
            Math.sin(state.clock.elapsedTime) * 0.3,
            state.camera.position.y,
            Math.sin(state.clock.elapsedTime) * 0.3
          ),
          0.05
        )
        // works section move to the right
        // state.camera.position.lerp(
        //   vec.set(
        //     state.camera.position.x -
        //       2 +
        //       Math.sin(state.clock.elapsedTime) * 0.3,
        //     state.camera.position.y,
        //     Math.sin(state.clock.elapsedTime) * 0.3
        //   ),
        //   0.05
        // )
      }
    }

    animationState.current.prevLetter = letter
  })
}
