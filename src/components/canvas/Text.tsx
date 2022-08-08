import * as THREE from 'three'
import React, { useEffect, useState } from 'react'
import { Text as DreiText } from '@react-three/drei'
import useStore from '@/helpers/store'

function Text({
  hasVideo = true,
  interactive,
  children = 'TEXT',
  onLeave = () => {},
  onHover = () => {},
  ...props
}) {
  const video = useStore((state) => state?.video)
  const [on, setState] = useState(false)
  const [font, setFont] = useState('/fonts/AkiraOutline.otf')

  useEffect(() => {
    const id = setTimeout(() => video.current?.play(), 2000)
    return () => clearTimeout(id)
  }, [video])

  // useEffect(() => {
  //   if (on) {
  //     console.log('EEEE', video.current)
  //     video.current.pause()
  //   } else {
  //     video.current.play()
  //   }
  // }, [on])

  return (
    <DreiText
      font={font}
      fontSize={1}
      letterSpacing={-0.06}
      onPointerDown={() => {
        // setState(!on)
      }}
      onPointerLeave={() => {
        interactive && setFont('/fonts/AkiraOutline.otf')
        onLeave()
      }}
      onPointerOver={() => {
        interactive && setFont('/fonts/AkiraSuperBold.otf')
        onHover()
      }}
      {...props}
    >
      {children}
      {hasVideo && (
        <meshBasicMaterial toneMapped={false}>
          <videoTexture
            attach='map'
            args={[video.current]}
            encoding={THREE.sRGBEncoding}
          />
        </meshBasicMaterial>
      )}
    </DreiText>
  )
}

export default Text
