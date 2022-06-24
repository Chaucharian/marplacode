import Instructions from '@/components/dom/Instructions'
import {
  Select,
  Environment,
  ContactShadows,
  Edges,
  useCursor,
  Sky,
  useSelect,
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
    color: { value: color },
    roughness: { value: roughness, min: 0, max: 1 },
    thickness: { value: thickness, min: -10, max: 10 },
    envMapIntensity: { value: envMapIntensity, min: 0, max: 10 },
    transmission: { value: transmission, min: 0, max: 1 },
    ...(metalness !== undefined && {
      metalness: { value: metalness, min: 0, max: 1 },
    }),
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
      onPointerOver={(e) => (e.stopPropagation(), setHover(true))}
      onPointerOut={(e) => setHover(false)}
    >
      <boxGeometry />
      <meshPhysicalMaterial {...materialProps} />
      <Edges visible={true} scale={1.1} renderOrder={1000}>
        <meshBasicMaterial transparent color='#333' depthTest={false} />
      </Edges>
    </mesh>
  )
}

Page.r3f = (props) => (
  <>
    <pointLight position={[10, 10, 10]} />
    <Suspense fallback={null}>
      {/* <Select multiple box onChange={() => {}}>
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
      </Select> */}
      <Cube
        scale={[0.9, 0.9, 1.9]}
        position={[1, 0, 0.5]}
        color='aquamarine'
        metalness={0}
      />
      <Environment preset='city' />
      {/* <ContactShadows
        frames={1}
        position={[0, -0.5, 0]}
        scale={10}
        opacity={0.4}
        far={1}
        blur={2}
      /> */}
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

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Box',
    },
  }
}
