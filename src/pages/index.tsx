import dynamic from 'next/dynamic'
import React, { useRef } from 'react'
import useStore from '@/helpers/store'
import { canvasProps } from '@/scenes/MarplaJourney'
import Navigation from '@/components/dom/Navigation/Navigation'
import { Logo, Section, Transition } from '@/components'
import { Contact, Landing, Works } from '@/sections'
import Whyus from '@/sections/Whyus/Whyus'
import { useScroll } from '@/helpers/hooks/useScroll'

const MarplaJourney = dynamic(() => import('@/scenes/MarplaJourney'), {
  ssr: false,
})

// dom components goes here
const Page = (props) => {
  const con = useRef()
  const scroll = useScroll(con)
  const video = useRef(null)
  useStore.setState({ video })

  console.log(scroll)
  return (
    <div ref={con}>
      <svg
        style={{
          position: 'absolute',
          overflow: 'hidden',
          width: 0,
          height: 0,
          pointerEvents: 'none',
        }}
      >
        <defs>
          <filter id='filter-1'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0'
              numOctaves='1'
              result='warp'
            ></feTurbulence>
            <feOffset dx='-90' result='warpOffset'></feOffset>
            <feDisplacementMap
              xChannelSelector='R'
              yChannelSelector='G'
              scale='30'
              in='SourceGraphic'
              in2='warpOffset'
            ></feDisplacementMap>
          </filter>
          <filter id='filter-2'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0'
              numOctaves='20'
              result='warp'
            ></feTurbulence>
            <feOffset dx='-90' result='warpOffset'></feOffset>
            <feDisplacementMap
              xChannelSelector='R'
              yChannelSelector='G'
              scale='40'
              in='SourceGraphic'
              in2='warpOffset'
            ></feDisplacementMap>
          </filter>
          <filter id='filter-3'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.15 0.02'
              numOctaves='3'
              result='warp'
            ></feTurbulence>
            <feDisplacementMap
              xChannelSelector='R'
              yChannelSelector='G'
              scale='0'
              in='SourceGraphic'
              in2='warp'
            ></feDisplacementMap>
          </filter>
          <filter id='filter-4'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0'
              numOctaves='5'
              result='warp'
            ></feTurbulence>
            <feOffset dx='-90' result='warpOffset'></feOffset>
            <feDisplacementMap
              xChannelSelector='R'
              yChannelSelector='G'
              scale='35'
              in='SourceGraphic'
              in2='warpOffset'
            ></feDisplacementMap>
          </filter>
          <filter id='filter-5'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.01 0.7'
              numOctaves='5'
              result='warp'
            ></feTurbulence>
            <feDisplacementMap
              xChannelSelector='R'
              yChannelSelector='G'
              scale='0'
              in='SourceGraphic'
              in2='warp'
            ></feDisplacementMap>
          </filter>
          <filter id='filter-6'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.01 0.07'
              numOctaves='5'
              seed='2'
              result='noise'
            ></feTurbulence>
            <feDisplacementMap
              in='SourceGraphic'
              in2='warp'
              scale='0'
              xChannelSelector='R'
              yChannelSelector='B'
            ></feDisplacementMap>
          </filter>
          <filter id='filter-7'>
            <feTurbulence
              type='fractalNoise'
              baseFrequency='1'
              numOctaves='5'
              result='warp'
            ></feTurbulence>
            <feDisplacementMap
              xChannelSelector='R'
              yChannelSelector='G'
              scale='90'
              in='SourceGraphic'
              in2='warp'
            ></feDisplacementMap>
          </filter>
        </defs>
      </svg>
      <Navigation />
      <Section index={0} content={<Landing />} />
      <Section index={1} content={<Whyus />} />
      <Section index={2} content={<Works />} />
      <Section index={3} content={<Contact />} />

      <video loop autoPlay hidden muted preload='auto' playsInline ref={video}>
        <source src='/videos/cuberto.mp4' type='video/mp4' />
      </video>
    </div>
  )
}

Page.canvasProps = canvasProps

Page.r3f = (props) => <MarplaJourney {...props} />

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Index',
    },
  }
}
