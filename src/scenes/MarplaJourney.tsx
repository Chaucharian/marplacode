import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import LandingScene from '@/sections/Landing/Landing.r3f'
import { ScrollControls } from '@react-three/drei'
import { useCameraEffect } from '@/components/canvas/hooks'

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
  useCameraEffect({ mouseMove: true, scrollMove: true })

  return (
    <>
      {/* <fog attach='fog' color='black' near={5} far={7} /> */}
      {/* <color attach='background' args={['black']} /> */}
      <ambientLight />
      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          <LandingScene />
        </group>

        {/* <ambientLight intensity={0.5} /> */}
        {/* <spotLight position={[0, 10, 0]} intensity={0.3} /> */}
        {/* <directionalLight position={[-50, 0, -40]} intensity={0.7} /> */}
      </Suspense>
    </>
  )
}

// export default MarplaJourney
export default function withScroll({ ...props }) {
  return (
    <ScrollControls damping={6} pages={4}>
      <MarplaJourney {...props} />
    </ScrollControls>
  )
}
