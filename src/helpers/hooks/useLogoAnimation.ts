import lottie from 'lottie-web'
import { useEffect, useRef } from 'react'
import { useColorChange } from './useColorChange'

const useLogoAnimation = ({ lottieRef }) => {
  const animDuration = 1000
  const animation: any = useRef()
  const whiteSecction: any = useColorChange()

  function validateChangeColor({ scroll }) {
    if (whiteSecction(scroll)) {
      lottieRef.current.classList.add('black')
    } else {
      lottieRef.current.classList.remove('black')
    }
  }

  function animateOnScroll({ duration = animDuration, scroll }) {
    const maxFrames = animation.current?.totalFrames

    const frame = (maxFrames / 100) * ((scroll * 100) / (duration / 100))

    animation.current?.goToAndStop(frame >= maxFrames ? maxFrames : frame, true)
  }
  const animate = (scroll) => {
    animateOnScroll({ scroll })
    validateChangeColor({ scroll })
  }

  useEffect(() => {
    animation.current = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/marplacodeanimation.json',
    })

    return () => {
      animation.current?.destroy()
    }
  }, [animation.current])

  return animate
}

export default useLogoAnimation
