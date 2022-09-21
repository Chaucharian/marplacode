import dynamic from 'next/dynamic'
import React, { useEffect, useRef } from 'react'
import useStore from '@/helpers/store'
import { canvasProps } from '@/scenes/MarplaJourney'
import Navigation from '@/components/dom/Navigation/Navigation'
import { Contact, Landing, Works } from '@/sections'
import Whyus from '@/sections/Whyus/Whyus'
import styled from 'styled-components'
import ColorLoader from '@/components/dom/ColorLoader'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { useRouter } from 'next/router'

const MarplaJourney = dynamic(() => import('@/scenes/MarplaJourney'), {
  ssr: false,
})

const Section = styled.section`
  ${({ height = '100vh' }) => `
`}
`

export enum SECTIONS {
  landing = 'landing',
  whyus = 'whyus',
  works = 'works',
  contact = 'contact',
}

const Page = (props) => {
  const video = useRef(null)
  const videoUrl = useStore((state) => state.videoUrl)
  const containerRef = useRef(null)
  // const { pathname } = useRouter()
  // const path = pathname.split('?')[0]

  useEffect(() => {
    if (video.current) {
      useStore.setState({
        video,
      })
    }
  }, [video])

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
        }}
        // watch={[path]}
        // location={path}
        containerRef={containerRef}
        // onLocationChange={(scroll) => {
        //   scroll.scrollTo(0, { duration: 0, disableLerp: true })
        // }}
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
