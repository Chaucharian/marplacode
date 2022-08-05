import dynamic from 'next/dynamic'
import React, { useRef } from 'react'
import useStore from '@/helpers/store'
import { canvasProps } from '@/scenes/MarplaJourney'
import Navigation from '@/components/dom/Navigation/Navigation'
import { Logo, Section, Transition } from '@/components'
import { Landing } from '@/sections'

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
      <video loop autoPlay hidden muted ref={video}>
        <source src='/videos/drei.mp4#t=0,30' type='video/mp4' />
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
