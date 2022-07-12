import Text from '@/components/canvas/Text'
import { useNeonStartingEffect } from '@/components/canvas/hooks/useNeonStartingEffect'
import { LoboMarino } from '@/components/canvas/models/LoboMarino'
import { ReflectionGround } from '@/components/canvas/ReflectionGround'
import { Html } from '@react-three/drei'
import React from 'react'

const WhyusScene = () => {
  return (
    <>
      <Text
        hasVideo={false}
        font={'/fonts/CircularLight.ttf'}
        position={[2, 0, 3.5]}
        fontSize={0.5}
      >
        a small team looking for awwwards
      </Text>
      <Text font='/fonts/AkiraSuperBold.otf' position={[-3, 0, 1]}>
        Why Us
      </Text>
      <ReflectionGround
        mirror={1}
        blur={[500, 100]}
        mixBlur={12}
        mixStrength={1.5}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        position={[-3, -0.8, 3]}
      />
      <ReflectionGround
        mirror={1}
        blur={[500, 100]}
        mixBlur={12}
        mixStrength={1.5}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        position={[0, -0.8, 3]}
      />
    </>
  )
}
export default WhyusScene
