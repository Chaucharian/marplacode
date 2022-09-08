import { useEffect, useState } from 'react'

const useScroll = (ref) => {
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    ref?.addEventListener('scroll', ({ currentTarget }) => {
      const winScroll = currentTarget?.scrollTop
      const height = currentTarget?.scrollHeight - currentTarget?.clientHeight

      setScroll((winScroll * 100) / height)
    })
  }, [ref])

  return scroll
}

export default useScroll
