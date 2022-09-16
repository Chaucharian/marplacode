import { useEffect, useState } from 'react'

const useScroll = (ref) => {
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    if (ref) {
      ref?.addEventListener('scroll', ({ currentTarget }) => {
        const winScroll = currentTarget?.scrollTop
        const height = currentTarget?.scrollHeight - currentTarget?.clientHeight

        setScroll((winScroll * 100) / height)
      })
    } else {
      document.addEventListener(
        'scroll',
        ({ target: { documentElement } }: any) => {
          const winScroll = documentElement?.scrollTop
          const height =
            documentElement?.scrollHeight - documentElement?.clientHeight
          setScroll((winScroll * 100) / height)
        }
      )
    }
  }, [ref])

  return scroll
}

export default useScroll
