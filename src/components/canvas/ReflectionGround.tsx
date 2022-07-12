import { useTexture, Reflector } from '@react-three/drei'
import React from 'react'

export const ReflectionGround = ({
  surface = '/models/textures/SurfaceImperfections.jpg',
  normalSurface = '/models/textures/SurfaceImperfections_normal.jpg',
  ...props
}: any) => {
  const [floor, normal] = useTexture([surface, normalSurface])
  return (
    <Reflector resolution={1024} args={[8, 8]} {...props}>
      {(Material, props) => (
        <Material
          color='#f0f0f0'
          metalness={0}
          roughnessMap={floor}
          normalMap={normal}
          normalScale={[2, 2]}
          {...props}
        />
      )}
    </Reflector>
  )
}
