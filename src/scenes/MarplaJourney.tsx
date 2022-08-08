import * as THREE from 'three'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Reflector,
  useTexture,
  useGLTF,
  ScrollControls,
  Scroll,
} from '@react-three/drei'
import useStore from '@/helpers/store'
import { Glitch, EffectComposer, Bloom } from '@react-three/postprocessing'
import WaveImage from '@/components/canvas/Image/Wave/WaveImage'
import { useCameraEffect } from '@/components/canvas/hooks'
import { Contact, Landing, Works } from '@/sections'
import { Section } from '@/components'
import Text from '@/components/canvas/Text'
import { KernelSize } from 'postprocessing'
import LandingScene from '@/sections/Landing/Landing.r3f'
import { ReflectionGround } from '@/components/canvas/ReflectionGround'
import WhyusScene from '@/sections/Whyus/Whyus.r3f'
import WorksScene from '@/sections/Works/Works.r3f'
import ContactScene from '@/sections/Contact/Contact.r3f'
import Whyus from '@/sections/Whyus/Whyus'

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
      {/* <fog attach='fog' args={['black', 15, 20]} /> */}
      <fog attach='fog' color='black' near={5} far={7} />
      <color attach='background' args={['black']} />
      <ambientLight />
      {/* <color attach='background' args={['black']} /> */}
      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          <LandingScene />
          {/* <WhyusScene />
          <WorksScene />
          <ContactScene /> */}
          {/* <EffectComposer>
            <Glitch columns={0.0001} strength={[0, 1]} />
          </EffectComposer>
          <EffectComposer multisampling={8}>
            <Bloom
              kernelSize={3}
              luminanceThreshold={0}
              luminanceSmoothing={0.4}
              intensity={0.6}
            />
            <Bloom
              kernelSize={KernelSize.HUGE}
              luminanceThreshold={0}
              luminanceSmoothing={0}
              intensity={0.5}
            />
          </EffectComposer> */}
        </group>
        <ambientLight intensity={0.5} />
        <spotLight position={[0, 10, 0]} intensity={0.3} />
        <directionalLight position={[-50, 0, -40]} intensity={0.7} />
      </Suspense>
      <Scroll html style={{ width: '100%' }}>
        <Section index={0} content={<></>} />
        <Section index={1} content={<></>} />
        <Section index={2} content={<></>} />
        <Section index={3} content={<></>} />
      </Scroll>
    </>
  )
}

export default function withScroll({ ...props }) {
  return (
    <ScrollControls damping={6} pages={4}>
      <MarplaJourney {...props} />
    </ScrollControls>
  )
}
