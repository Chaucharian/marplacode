import dynamic from 'next/dynamic'
// Step 5 - delete Instructions components
import Instructions from '@/components/dom/Instructions'
// import Shader from '@/components/canvas/Shader/Shader'
import { Canvas } from '@react-three/fiber'
import { MeshReflectorMaterial } from '@react-three/drei'
import { Physics, usePlane } from '@react-three/cannon'
import React from 'react'
import { Chair, Table, Lamp } from '@/components/canvas/Furniture/Furniture'
import { Cursor } from '@/components/canvas/Furniture/helpers/Drag'
import { LoboMarino } from '@/components/canvas/models/LoboMarino'

// Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
  ssr: false,
})

// dom components goes here
const Page = (props) => {
  return <></>
}

function Floor(props) {
  const [ref] = usePlane(() => ({ type: 'Static', ...props }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <MeshReflectorMaterial
        color='#878790'
        blur={[400, 400]}
        resolution={1024}
        mixBlur={1}
        mixStrength={3}
        depthScale={1}
        minDepthThreshold={0.85}
        metalness={0}
        roughness={1}
      />
    </mesh>
  )
}

Page.canvasProps = {
  dpr: [1, 2],
  shadows: true,
  camera: { position: [-40, 40, 40], fov: 25, near: 1, far: 100 },
}
Page.r3f = (props) => {
  return (
    <>
      <color attach='background' args={['#171720']} />
      <fog attach='fog' args={['#171720', 60, 90]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[-20, -5, -20]} color='#FF7A00' />
      <Physics allowSleep={false} iterations={15} gravity={[0, -200, 0]}>
        <Cursor />
        <Floor position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        {/* <Chair position={[0, 0, -2.52]} /> */}
        <Chair position={[10, 0, -2.52]} />
        {/* <Table position={[8, 0, 0]} /> */}
        <LoboMarino position={[0, -2, -2]} scale={0.06} />
        <Lamp position={[0, 15, 0]} />
      </Physics>
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
