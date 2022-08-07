import dynamic from 'next/dynamic'
import React, { useRef } from 'react'
import useStore from '@/helpers/store'
import { canvasProps } from '@/scenes/MarplaJourney'
import Navigation from '@/components/dom/Navigation/Navigation'
import { Logo, Section, Transition } from '@/components'
import { Contact, Landing, Works } from '@/sections'
import Whyus from '@/sections/Whyus/Whyus'

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
      <Section index={0} content={<Landing />} />
      <Section index={1} content={<Whyus />} />
      <Section index={2} content={<Works />} />
      <Section index={3} content={<Contact />} />

      <video loop autoPlay hidden muted playsInline ref={video}>
        {/* <source src='/videos/drei.mp4#t=0,30' type='video/mp4' /> */}
        <source src='/videos/video.webm#t=0,30' type='video/webm' />
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
      title: 'Index',
    },
  }
}
