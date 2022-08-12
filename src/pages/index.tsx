import dynamic from 'next/dynamic'
import React, { useRef } from 'react'
import useStore from '@/helpers/store'
import { canvasProps } from '@/scenes/MarplaJourney'
import Navigation from '@/components/dom/Navigation/Navigation'
import { Logo, Section, Transition } from '@/components'
import { Contact, Landing, Works } from '@/sections'
import Whyus from '@/sections/Whyus/Whyus'
import { useScroll } from '@/helpers/hooks/useScroll'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Footer from '@/sections/Footer/Footer'

const MarplaJourney = dynamic(() => import('@/scenes/MarplaJourney'), {
  ssr: false,
})

// dom components goes here
const Page = (props) => {
  const video = useRef(null)
  useStore.setState({ video })

  return (
    <>
      <Navigation />
      <Parallax pages={4.5}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          factor={1}
          sticky={{ start: 0, end: 1 }}
          style={{
            zIndex: -1,
          }}
        >
          <Landing />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          style={{
            zIndex: 0,
          }}
        >
          <Whyus />
          <Works />
          <Contact />
        </ParallaxLayer>
        <ParallaxLayer
          // offset={3.5}
          // speed={1.3}
          factor={2}
          sticky={{ start: 3, end: 4.5 }}
          style={{
            zIndex: -1,
          }}
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
      <video loop autoPlay hidden muted preload='auto' playsInline ref={video}>
        <source src='/videos/cuberto.mp4' type='video/mp4' />
      </video>
    </>
  )
}

Page.canvasProps = canvasProps

Page.r3f = (props) => <MarplaJourney {...props} />

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Marplacode - beauty designs',
    },
  }
}
