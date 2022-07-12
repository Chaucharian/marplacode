// import dynamic from 'next/dynamic'
// // Step 5 - delete Instructions components
// // import Shader from '@/components/canvas/Shader/Shader'
// import { Canvas, useFrame } from '@react-three/fiber'
// import {
//   BakeShadows,
//   Bounds,
//   Cloud,
//   ContactShadows,
//   Environment,
//   Float,
//   Html,
//   Lightformer,
//   MeshReflectorMaterial,
//   Scroll,
//   ScrollControls,
//   useBounds,
// } from '@react-three/drei'
// import { Vector3, BackSide } from 'three'

// import { Physics, usePlane } from '@react-three/cannon'
// import React, { useRef } from 'react'
// import { Chair, Table, Lamp } from '@/components/canvas/Furniture/Furniture'
// import { Cursor } from '@/components/canvas/Furniture/helpers/Drag'
// import { LoboMarino } from '@/components/canvas/models/LoboMarino'
// import { useCameraEffect } from '@/components/canvas/hooks'
// import { Camera } from '@/components/canvas'
// import styled from 'styled-components'
// import { theme } from '@/styles'
// import { Text } from '@/components'
// import WhyUs from '@/sections/Whyus/Whyus'
// import { Works, Contact } from '@/sections'
// import { Glitch, EffectComposer } from '@react-three/postprocessing'
// import { LayerMaterial, Base, Depth } from 'lamina'

// // Dynamic import is used to prevent a payload when the website start that will include threejs r3f etc..
// // WARNING ! errors might get obfuscated by using dynamic import.
// // If something goes wrong go back to a static import to show the error.
// // https://github.com/pmndrs/react-three-next/issues/49
// const Shader = dynamic(() => import('@/components/canvas/Shader/Shader'), {
//   ssr: false,
// })

// // dom components goes here
// const Page = (props) => {
//   return <></>
// }

// function Floor(props) {
//   const [ref] = usePlane(() => ({ type: 'Static', ...props }))
//   return (
//     <mesh ref={ref} receiveShadow>
//       <planeGeometry args={[100, 100]} />
//       <MeshReflectorMaterial
//         color='#878790'
//         blur={[400, 400]}
//         resolution={1024}
//         mixBlur={1}
//         mixStrength={3}
//         depthScale={1}
//         minDepthThreshold={0.85}
//         metalness={0}
//         roughness={1}
//       />
//     </mesh>
//   )
// }

// Page.canvasProps = {
//   dpr: [1, 2],
//   shadows: true,
//   shake: true,
//   camera: { position: [0, 0, 40], zoom: 0.5, fov: 25, near: 1, far: 100 },
// }

// function SelectToZoom({ children }) {
//   const api = useBounds()
//   return (
//     <group
//       onClick={(e) => (
//         e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit()
//       )}
//       onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}
//     >
//       {children}
//     </group>
//   )
// }

// function MovingSpots({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
//   const group = useRef()
//   useFrame(
//     (state, delta) =>
//       (group.current.position.z += delta * 15) > 60 &&
//       (group.current.position.z = -60)
//   )
//   return (
//     <group rotation={[0, 0.5, 0]}>
//       <group ref={group}>
//         {positions.map((x, i) => (
//           <Lightformer
//             form='circle'
//             intensity={4}
//             color='orange'
//             rotation={[Math.PI / 2, 0, 0]}
//             position={[x, 4, i * 4]}
//             scale={[3, 1, 1]}
//           />
//         ))}
//       </group>
//     </group>
//   )
// }
// function CameraRig({ v = new Vector3() }) {
//   return useFrame((state) => {
//     const t = state.clock.elapsedTime
//     state.camera.position.lerp(
//       v.set(Math.sin(t / 5), 0, 10 + Math.cos(t / 5)),
//       0.05
//     )
//     state.camera.lookAt(0, 0, 0)
//   })
// }

// Page.r3f = (props) => {
//   return (
//     <>
//       <color attach='background' args={['#171720']} />

//       <Environment frames={Infinity} resolution={256}>
//         {/* Ceiling */}
//         <Lightformer
//           intensity={0.75}
//           rotation-x={Math.PI / 2}
//           position={[0, 5, -9]}
//           scale={[10, 10, 1]}
//         />
//         <MovingSpots />
//         {/* Sides */}
//         <Lightformer
//           intensity={4}
//           rotation-y={Math.PI / 2}
//           position={[-5, 1, -1]}
//           scale={[20, 0.1, 1]}
//         />
//         <Lightformer
//           rotation-y={Math.PI / 2}
//           position={[-5, -1, -1]}
//           scale={[20, 0.5, 1]}
//         />
//         <Lightformer
//           rotation-y={-Math.PI / 2}
//           position={[10, 1, 0]}
//           scale={[20, 1, 1]}
//         />
//         <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.01} />
//         <Cloud position={[-4, 2, -10]} speed={0.2} opacity={0.01} />
//         <Cloud position={[4, -2, -5]} speed={0.2} opacity={0.01} />
//         <Cloud position={[4, 2, 0]} speed={0.2} opacity={0.09} />
//         <color attach='background' args={['#171720']} />
//         <fog attach='fog' args={['#171720', 60, 90]} />
//         <ambientLight intensity={0.2} />
//         <pointLight position={[-20, -5, -20]} color='#FF7A00' />
//         {/* Accent (red) */}
//         <Float speed={5} floatIntensity={2} rotationIntensity={2}>
//           <Lightformer
//             form='ring'
//             color='red'
//             intensity={1}
//             scale={10}
//             position={[-15, 4, -18]}
//             target={[0, 0, 0]}
//           />
//         </Float>
//         {/* Background */}
//         <mesh scale={100}>
//           <sphereGeometry args={[1, 64, 64]} />
//           {/* <LayerMaterial side={BackSide}>
//             <Base color='#444' alpha={1} mode='normal' />
//             <Depth
//               colorA='blue'
//               colorB='black'
//               alpha={0.5}
//               mode='normal'
//               near={0}
//               far={300}
//               origin={[100, 100, 100]}
//             />
//           </LayerMaterial> */}
//         </mesh>
//         {/* <Cloud position={[-4, -2, -25]} speed={0.2} opacity={0.01} />
//         <Cloud position={[4, 2, -15]} speed={0.2} opacity={0.01} />
//         <Cloud position={[-4, 2, -10]} speed={0.2} opacity={0.01} />
//         <Cloud position={[4, -2, -5]} speed={0.2} opacity={0.01} />
//         <Cloud position={[4, 2, 0]} speed={0.2} opacity={0.09} />
//         <color attach='background' args={['#171720']} />
//         <fog attach='fog' args={['#171720', 60, 90]} />
//         <ambientLight intensity={0.2} />
//         <pointLight position={[-20, -5, -20]} color='#FF7A00' />
//         <Physics allowSleep={false} iterations={15} gravity={[0, -200, 0]}>
//           <Cursor />
//           <Lamp position={[0, 15, 0]} />
//         </Physics>  */}
//         <Bounds fit clip observe margin={1.2}>
//           <SelectToZoom>
//             <LoboMarino position={[0, -2, -2]} scale={0.06} />
//           </SelectToZoom>
//         </Bounds>
//         <spotLight
//           position={[0, 15, 0]}
//           angle={0.3}
//           penumbra={1}
//           castShadow
//           intensity={2}
//           shadow-bias={-0.0001}
//         />
//         <ambientLight intensity={0.2} />
//         <ContactShadows
//           resolution={1024}
//           frames={1}
//           position={[0, -1.16, 0]}
//           scale={10}
//           blur={3}
//           opacity={1}
//           far={10}
//         />
//         {/* <mesh scale={100}>
//           <sphereGeometry args={[1, 64, 64]} />
//           <LayerMaterial side={BackSide}>
//             <Base color='#444' alpha={1} mode='normal' />
//             <Depth
//               colorA='blue'
//               colorB='black'
//               alpha={0.5}
//               mode='normal'
//               near={0}
//               far={300}
//               origin={[100, 100, 100]}
//             />
//           </LayerMaterial>
//         </mesh> */}
//         <BakeShadows />
//         <CameraRig />
//       </Environment>
//       <EffectComposer>
//         <Glitch columns={0.0001} />
//       </EffectComposer>
//       <ScrollControls damping={6} pages={5}>
//         <LoboMarino position={[0, -2, -2]} scale={0.06} />

//         <Scroll html style={{ width: '100%' }}>
//           {/* <Section index={0} content={<Landing />} /> */}
//           {/* <Section index={1} content={<WhyUs />} />
//           <Section index={2} content={<Works />} />
//           <Section index={3} content={<Contact />} /> */}
//           <Section
//             index={4}
//             content={
//               <h1>
//                 her
//                 <br />
//                 mes.
//               </h1>
//             }
//           />
//         </Scroll>
//       </ScrollControls>
//       {/* <Camera /> */}
//     </>
//   )
// }

export default () => {}

// export async function getStaticProps() {
//   return {
//     props: {
//       title: 'Index',
//     },
//   }
// }
