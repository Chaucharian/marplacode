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

  useEffect(() => {
    // if (scroll.current?.container) {
    //   useStore.setState({
    //     video,
    //     scroll: scroll.current.container.current,
    //     scrollTo: scroll.current.scrollTo,
    //   })
    // }
    if (scroll.current) {
      useStore.setState({
        video,
        scroll: scroll.current,
        scrollTo: (page) =>
          window.scrollTo({
            top: page * 1000,
            behavior: 'smooth',
          }),
      })
    }
  }, [scroll])

  return (
    <PageContainer ref={scroll}>
      <ColorLoader isLoading={false} />
      <Navigation />
      <Section>
        <Landing />
      </Section>
      <Section>
        <Whyus />
      </Section>
      <Section>
        <Works />
      </Section>
      <Section>
        <Contact />
      </Section>
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
    </PageContainer>
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
