import { useEffect, useState } from 'react'

export const useScroll = (ref) => {
  const [scroll, setScroll] = useState(0)
  useEffect(() => {
    const winScroll = ref.current.scrollTop
    const height = ref.current.scrollHeight - ref.current.clientHeight

    setScroll(winScroll / height)
  }, [])
  return scroll
}
