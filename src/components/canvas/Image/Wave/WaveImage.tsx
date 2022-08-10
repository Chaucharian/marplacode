import * as THREE from 'three'
import React, { useRef, Suspense } from 'react'
import { Canvas, extend, useFrame, useLoader } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import vertex from './shaders/shader.vert'
import fragment from './shaders/shader.frag'
import lerp from 'lerp'

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
  },
  vertex,
  fragment
)

extend({ WaveShaderMaterial })

const WaveImage = ({
  position = [0, 1, -1],
  width = 1,
  height = 3,
  url,
}: any) => {
  const ref = useRef()
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()))

  const [image] = useLoader(THREE.TextureLoader, [
    url ??
      'https://images.unsplash.com/photo-1604011092346-0b4346ed714e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
  ])

  useFrame(() => {
    // const { pages, top } = state
    // image.scale = lerp(
    //   material.current.scale,
    //   offsetFactor - top.current / ((pages - 1) * viewportHeight),
    //   0.1
    // )
    image.shift = lerp(image.shift, 2, 200)
  })

  return (
    <group position={position}>
      <mesh>
        <planeBufferGeometry args={[width, height, 16, 16]} />
        <waveShaderMaterial uColor={'blue'} ref={ref} uTexture={image} />
      </mesh>
    </group>
  )
}

export default WaveImage
