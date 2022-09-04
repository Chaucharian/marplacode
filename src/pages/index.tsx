import dynamic from 'next/dynamic'
import React, { useEffect, useRef } from 'react'
import useStore from '@/helpers/store'
import { canvasProps } from '@/scenes/MarplaJourney'
import Navigation from '@/components/dom/Navigation/Navigation'
import { Contact, Landing, Works } from '@/sections'
import Whyus from '@/sections/Whyus/Whyus'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Footer from '@/sections/Footer/Footer'

const MarplaJourney = dynamic(() => import('@/scenes/MarplaJourney'), {
  ssr: false,
})

const Page = (props) => {
  const video = useRef(null)
  const scroll = useRef(null)
  useStore.setState({ video })

  useEffect(() => {
    if (scroll.current?.container) {
      useStore.setState({ scroll: scroll.current.container.current })
    }
    // env(keyboard-inset-height, 0px);
    // if ('virtualKeyboard' in navigator) {
    //   console.log('EEEEEEE')
    //   window.navigator.virtualKeyboard.overlaysContent = true
    //   window.navigator.virtualKeyboard?.addEventListener(
    //     'geometrychange',
    //     (event) => {
    //       const { x, y, width, height } = event.target.boundingRect
    //       console.log('Virtual keyboard geometry changed:', x, y, width, height)
    //       scroll.current?.container.current.addEventListener('scroll', (a) => {
    //         console.log(a)
    //         scroll.current.container.current.scrollTop =
    //           scroll.current.container.current.scrollTop - height
    //       })
    //     }
    //   )
    // }
  }, [scroll])

  return (
    <>
      <Navigation />
      <Parallax
        pages={4.5}
        ref={scroll}
        // onScrollCapture={({ currentTarget }) =>
        //   useStore.setState({ scroll: currentTarget.scrollTop })
        // }
      >
        <ParallaxLayer
          offset={0}
          speed={2.5}
          // factor={1}
          sticky={{ start: 0, end: 1 }}
          style={{
            zIndex: -1,
          }}
        >
          <Landing />
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <Whyus />
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <Works />
          <Contact />
        </ParallaxLayer>
        <ParallaxLayer
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
