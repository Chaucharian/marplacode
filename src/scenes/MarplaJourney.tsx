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
  useCameraEffect()

  return (
    <>
      <fog attach='fog' color='black' near={5} far={15} />
      <ambientLight />
      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          <LandingScene />
        </group>
      </Suspense>
    </>
  )
}

export default MarplaJourney
