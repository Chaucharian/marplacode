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

const MarplaJourney = dynamic(() => import('@/scenes/MarplaJourney'), {
  ssr: false,
})

const Wrapper = styled.main`
  ${({ height = '100vh' }) => `
    overflow: hidden;
    display:block;
`}
`

const Section = styled.section`
  ${({ height = '100vh' }) => `
  height:100%;

`}
`
const PageContainer = styled.div`
  ${({ height = '100vh' }) => `
    position:absolute;
    height:100%;
    width: 100%;
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
    <PageContainer>
      <Navigation />
      {/* <Parallax pages={isMobile ? 6 : 4.5} ref={scroll}>
        <ParallaxLayer offset={0}>
          <Landing />
        </ParallaxLayer>
        <ParallaxLayer offset={1} factor={isMobile ? 1.3 : 1}>
          <Whyus />
        </ParallaxLayer>
        <ParallaxLayer offset={2.3} factor={isMobile ? 1.3 : 1}>
          <Works />
        </ParallaxLayer>
        <ParallaxLayer
          offset={isMobile ? 3.6 : 3.3}
          style={{
            height: '100%',
          }}
        >
          <Contact />
        </ParallaxLayer>
        {!isMobile ? (
          <ParallaxLayer offset={5.2} factor={1.5} speed={2.3}>
            <Footer />
          </ParallaxLayer>
        ) : (
          <></>
        )}
      </Parallax> */}
      <Wrapper ref={scroll}>
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
      </Wrapper>

      {/* <Cursor hover={menuHover} /> */}
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
