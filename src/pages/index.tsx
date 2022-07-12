import dynamic from 'next/dynamic'
import React, { useRef } from 'react'
import useStore from '@/helpers/store'
import { canvasProps } from '@/scenes/MarplaJourney'
import Navigation from '@/components/dom/Navigation/Navigation'
import { Logo, Transition } from '@/components'

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
      <video
        src='/videos/drei.mp4#t=0,30'
        loop
        autoPlay
        hidden
        muted
        ref={video}
      />
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
