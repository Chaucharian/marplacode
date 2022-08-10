import Text from '@/components/canvas/Text'
import { ReflectionGround } from '@/components/canvas/ReflectionGround'
import React, { useEffect, useState } from 'react'
import useStore from '@/helpers/store'

const LandingScene = () => {
  const domReady = useStore((state) => state.domReady)
  // const scroll = useStore((state) => state.scroll)
  const bigLetter = useStore((state) => state.letter)

  return (
    <>
      {domReady && (
        <Text
          font='/fonts/AkiraSuperBold.otf'
          position={[0, 1.4, -4]}
          fontSize={2}
          play={domReady}
        >
          {bigLetter}
        </Text>
      )}

      <ReflectionGround
        mirror={1}
        blur={[500, 100]}
        mixBlur={12}
        mixStrength={1.5}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        position={[0, 0.4, -4]}
      />
    </>
  )
}
export default LandingScene
