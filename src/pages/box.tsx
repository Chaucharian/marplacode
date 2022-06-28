import MouseLight from '@/components/canvas/MouseLight'
import Instructions from '@/components/dom/Instructions'
import useStore from '@/helpers/store'
import {
  Select,
  Environment,
  ContactShadows,
  Edges,
  useCursor,
  Sky,
  useSelect,
  OrbitControls,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'
import React, { Suspense, useEffect, useState } from 'react'

const Box = dynamic(() => import('@/components/canvas/Box'), {
  ssr: false,
})

// Step 5 - delete Instructions components
const Page = (props) => {
  return (
    <>
      <Instructions />
    </>
  )
}

function Cube({
  color = 'white',
  thickness = 2,
  roughness = 0.65,
  envMapIntensity = 1,
  transmission = 0,
  metalness,
  ...props
}: any) {
  const [hovered, setHover] = useState(false)
  const selected = useSelect().map((sel) => sel.userData.store)

  const [materialProps, setMaterialProps] = useState({
    color: color,
    // roughness: { value: roughness, min: 0, max: 1 },
    // thickness: { value: thickness, min: -10, max: 10 },
    // envMapIntensity: { value: envMapIntensity, min: 0, max: 10 },
    // transmission: { value: transmission, min: 0, max: 1 },
    // ...(metalness !== undefined && {
    //   metalness: { value: metalness, min: 0, max: 1 },
    // }),
  })
  // useEffect(() => {
  //   document.addEventListener('mousemove', (event) => {
  //     const x = event.clientX / 4
  //     const y = event.clientY / 4
  //     const newColor = `rgb(${x},${y},${y})`
  //     setMaterialProps({ ...materialProps, color: newColor })
  //   })
  // }, [])
  // const isSelected = !!selected.find((sel) => sel === store)
  // useCursor(hovered)
  return (
    <mesh
      {...props}
      // userData={{ store }}
      receiveShadow
      castShadow
      onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
      onPointerOut={(e) => setHover(false)}
    >
      <boxGeometry />
      <meshStandardMaterial attach='material' {...materialProps} />
    </mesh>
  )
}

Page.canvasProps = {
  shadows: true,
  dpr: [1, 2],
  orthographic: true,
  camera: { position: [-10, 10, 10], zoom: 100 },
}

Page.r3f = (props) => {
  return (
    <>
      {/* <MouseLight color='orange' intensity={1} position={[10, 10, 10]} /> */}
      <Suspense fallback={null}>
        {/* <directionalLight position={[-10, -10, 2]} intensity={3} />
    <directionalLight
      position={[1, 10, -2]}
      intensity={1}
      shadow-camera-far={70}
      shadow-camera-left={-10}
      shadow-camera-right={10}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
      shadow-mapSize={[512, a512]}
      castShadow
    /> */}

        <Cube
          scale={0.9}
          position={[-1, 0, 0]}
          color='orange'
          transmission={1}
          thickness={-2}
          envMapIntensity={5}
        />
        <Cube
          scale={0.9}
          position={[0, 0, 0]}
          color='#eb8686'
          envMapIntensity={2}
        />
        <Cube
          scale={0.9}
          position={[0, 0, -1]}
          color='hotpink'
          transmission={1}
          thickness={-2}
          envMapIntensity={5}
        />
        <Cube
          scale={[1, 0.9, 0.9]}
          position={[0.05, 0, 1]}
          color='aquamarine'
          metalness={0}
        />
        <Cube
          scale={[0.9, 0.9, 1.9]}
          position={[1, 0, 0.5]}
          color='aquamarine'
          metalness={0}
        />

        {/* <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, -0.75, 0]}>
      <planeGeometry args={[20, 20]} />
      <shadowMaterial opacity={0.2} />
    </mesh> */}

        {/* <Environment preset='night' /> */}
        {/* <ContactShadows
      frames={1}
      position={[0, -0.5, 0]}
      scale={10}
      opacity={0.4}
      far={1}
      blur={2}
    /> */}
        <OrbitControls
          makeDefault
          rotateSpeed={2}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.5}
        />
      </Suspense>
      {/* <OrbitControls
      makeDefault
      rotateSpeed={2}
      minPolarAngle={0}
      maxPolarAngle={Math.PI / 2.5}
    /> */}
      <Sky />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Box',
    },
  }
}
