import { useRouter } from 'next/router'
import useStore from '@/helpers/store'
import { FC, useEffect } from 'react'
import Header from '@/config'
import Dom from '@/components/layout/dom'
import '@/styles/index.css'
import dynamic from 'next/dynamic'
import { Props as CanvasProps } from '@react-three/fiber/dist/declarations/src/web/Canvas'

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: false,
})

export interface R3FComponent {
  canvasProps?: CanvasProps
  r3f?: (props: any) => JSX.Element
}

export type R3FComponentType = React.Component<any> | R3FComponent

interface AppProps {
  Component: R3FComponent
  pageProps: any
}

const App: FC<AppProps> = ({ Component, pageProps = { title: 'index' } }) => {
  const router = useRouter()

  useEffect(() => {
    useStore.setState({ router })
  }, [router])

  return (
    <>
      <Header title={pageProps.title} />
      <Dom>
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </Dom>
      {Component?.r3f && (
        <LCanvas {...Component?.canvasProps}>
          {Component.r3f(pageProps)}
        </LCanvas>
      )}
    </>
  )
}

export default App
