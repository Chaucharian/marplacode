import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import LandingScene from '@/sections/Landing/Landing.r3f'
import { ScrollControls } from '@react-three/drei'
import { useCameraEffect } from '@/components/canvas/hooks'
import { useFrame, useThree } from '@react-three/fiber'
import { useMousePosition } from '@/helpers/hooks'

export const canvasProps = {
  gl: { alpha: false },
  pixelRatio: [1, 1.5],
  camera: {
    dpr: [1, 1.5],
    position: [0, 0, 15],
    fov: 15,
    zoom: 0.2,
  },
}

function MarplaJourney({ ...props }) {
  useCameraEffect()

  // const ballRef: any = useRef()
  // const { viewport } = useThree()

  // const position = useMousePosition()
  // useFrame(({ mouse }) => {
  //   const x = position.mouseX //(mouse.x * viewport.width) / viewport.width
  //   const y = position.mouseY
  //   ballRef.current?.position.set(x, y, -3)
  //   // ballRef.current?.rotation.set(-y, x, 0)
  // })

  // useEffect(() => {
  //   const updateMousePosition = ({ clientX, clientY }) => {
  //     const x = ((clientX * -0.1) / 1000) * -1
  //     const y = clientY * 0.01 - viewport.height / 2
  //     console.log(x, y)
  //     ballRef.current?.position.set(x, 1, -3)
  //   }
  //   window.addEventListener('mousemove', updateMousePosition)

  //   return () => window.removeEventListener('mousemove', updateMousePosition)
  // }, [])

  return (
    <>
      <fog attach='fog' color='black' near={5} far={15} />
      {/* <color attach='background' args={['black']} /> */}
      <ambientLight />
      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          <LandingScene />
        </group>
        {/* <group ref={ballRef}>
          <mesh>
            <sphereBufferGeometry args={[0.04, 10, 10]} attach='geometry' />
            <meshBasicMaterial color='red' attach='material' />
          </mesh>
        </group> */}

        {/* <ambientLight intensity={0.5} /> */}
        {/* <spotLight position={[0, 10, 0]} intensity={0.3} /> */}
        {/* <directionalLight position={[-50, 0, -40]} intensity={0.7} /> */}
      </Suspense>
    </>
  )
}

// export default MarplaJourney
export default MarplaJourney
