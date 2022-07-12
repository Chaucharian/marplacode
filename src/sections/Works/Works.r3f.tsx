import Text from '@/components/canvas/Text'
import { useNeonStartingEffect } from '@/components/canvas/hooks/useNeonStartingEffect'
import { LoboMarino } from '@/components/canvas/models/LoboMarino'
import { ReflectionGround } from '@/components/canvas/ReflectionGround'
import { Html } from '@react-three/drei'
import React, { useState } from 'react'
import WaveImage from '@/components/canvas/Image/Wave/WaveImage'
import { state } from '@/components/canvas/Galery/utils'

const WorksScene = () => {
  const [{ position: imagePosition, image, visible: workHovered }, setWork] =
    useState({
      visible: false,
      position: [0, 0, 0],
      image: '/img/2.jpeg',
    })

  const onHoverWork = (image, position) => {
    setWork((state) => ({ ...state, visible: true, position, image }))
  }
  const onLeaveWork = () => {
    setWork((state) => ({ ...state, visible: false, image: null }))
  }

  return (
    <>
      <Text font='/fonts/AkiraSuperBold.otf' position={[-3, 0, 8]}>
        Works
      </Text>
      <Text
        hasVideo={false}
        position={[2, 0, 8.5]}
        fontSize={0.5}
        interactive
        color='#FF7A00'
        onHover={() => onHoverWork('/img/2.jpeg', [-0.1, 0.6, 8.5])}
        onLeave={() => onLeaveWork()}
      >
        PIANUCCI
      </Text>
      <Text
        hasVideo={false}
        interactive
        position={[2, 0.5, 8.5]}
        fontSize={0.5}
        onHover={() => onHoverWork('/img/4.jpeg', [-0.09, 1.1, 8.5])}
        onLeave={() => onLeaveWork()}
      >
        TURNATE
      </Text>
      <Text
        hasVideo={false}
        position={[2, 1, 8.5]}
        fontSize={0.5}
        interactive
        color='#DBFF00'
        onHover={() => onHoverWork('/img/6.jpeg', [0, 1.6, 8.5])}
        onLeave={() => onLeaveWork()}
      >
        ADDIDAS
      </Text>
      <ReflectionGround
        mirror={1}
        blur={[500, 100]}
        mixBlur={12}
        mixStrength={1.5}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        position={[-3, -0.8, 8]}
      />
      {workHovered && (
        <WaveImage
          position={imagePosition}
          url={image}
          width={1}
          height={1.5}
        />
      )}
      <ReflectionGround
        mirror={1}
        blur={[500, 100]}
        mixBlur={12}
        mixStrength={1.5}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        position={[0, -0.8, 8]}
      />
    </>
  )
}
export default WorksScene
