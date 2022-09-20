import dynamic from 'next/dynamic'
import React, { useEffect, useRef } from 'react'
import useStore from '@/helpers/store'
import { canvasProps } from '@/scenes/MarplaJourney'
import Navigation from '@/components/dom/Navigation/Navigation'
import { Contact, Landing, Works } from '@/sections'
import Whyus from '@/sections/Whyus/Whyus'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Footer from '@/sections/Footer/Footer'
import { useIsMobile } from '@/helpers/hooks'
import { useWindowSize } from 'usehooks-ts'
import styled from 'styled-components'
import ColorLoader from '@/components/dom/ColorLoader'
import {
  LocomotiveScrollProvider,
  LocomotiveScrollOptions,
} from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

// const LocomotiveScrollProvider = dynamic(
//   async () => {
//     const { LocomotiveScrollProvider } = await import('react-locomotive-scroll')
//     return LocomotiveScrollProvider
//   },
//   {
//     ssr: false,
//   }
// )
const MarplaJourney = dynamic(() => import('@/scenes/MarplaJourney'), {
  ssr: false,
})

// const Wrapper = styled.main`
//   ${({ height = '100vh' }) => `
//     overflow: hidden;
//     display:block;
// `}
// `

const Section = styled.section`
  ${({ height = '100vh' }) => `
`}
`
const PageContainer = styled.div`
  ${({ height = '100vh' }) => `
`}
`

//min-height: calc(100vh - 4.1666666667vw);
const Page = (props) => {
  const video = useRef(null)
  const scroll = useRef(null)
  const isMobile = useIsMobile()
  const videoUrl = useStore((state) => state.videoUrl)
  const containerRef = useRef(null)

  useEffect(() => {
    // if (scroll.current?.container) {
    //   useStore.setState({
    //     video,
    //     scroll: scroll.current.container.current,
    //     scrollTo: scroll.current.scrollTo,
    //   })
    // }
    if (containerRef.current) {
      useStore.setState({
        video,
        scroll: containerRef.current,
        scrollTo: (page) =>
          window.scrollTo({
            top: page * 1000,
            behavior: 'smooth',
          }),
      })
    }
  }, [containerRef])

  return (
    <>
      <ColorLoader isLoading={false} />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          tablet: {
            smooth: true,
          },
          smartphone: {
            smooth: true,
          },
          // ... all available Locomotive Scroll instance options
        }}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Navigation />
          <Section data-scroll-section>
            <Landing />
          </Section>
          <Section data-scroll-section>
            <Whyus />
          </Section>
          <Section data-scroll-section>
            <Works />
          </Section>
          <Section data-scroll-section style={{ background: 'white' }}>
            <Contact />
          </Section>
        </main>
      </LocomotiveScrollProvider>

      <video
        loop
        autoPlay
        hidden
        muted
        preload='auto'
        playsInline
        ref={video}
        src={videoUrl}
      ></video>
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
