import Text from '@/components/canvas/Text'
import { useNeonStartingEffect } from '@/components/canvas/hooks/useNeonStartingEffect'
import { LoboMarino } from '@/components/canvas/models/LoboMarino'
import { ReflectionGround } from '@/components/canvas/ReflectionGround'
import { Html } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import useStore from '@/helpers/store'

const LandingScene = () => {
  const { finished: ready, color: textColor } = useNeonStartingEffect()
  useStore.setState({ domReady: ready })
  const scroll = useStore((state) => state.scroll)
  const bigLetter = useStore((state) => state.letter)
  const showDescription = scroll < 0.4

  return (
    <>
      {showDescription && (
        <Text
          hasVideo={false}
          font={'/fonts/AkiraOutline.otf'}
          position={[-0.1, 2, -4]}
          fontSize={0.2}
          color={textColor}
        >
          We make you grow
        </Text>
      )}
      {ready && (
        <>
          <Text
            font='/fonts/AkiraSuperBold.otf'
            position={[0, 0.5, -4]}
            fontSize={2.5}
          >
            {bigLetter}
          </Text>
          {/* <Text
            font='/fonts/AkiraSuperBold.otf'
            position={[0, -2, -4]}
            fontSize={0.5}
          >
            WEB
          </Text> */}
        </>
      )}
      <ReflectionGround
        mirror={1}
        blur={[500, 100]}
        mixBlur={12}
        mixStrength={1.5}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        position={[0, -0.5, -4]}
      />
    </>
  )
}
export default LandingScene
