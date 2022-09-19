import lottie from 'lottie-web'
import { useEffect } from 'react'

const useLogoAnimation = ({ lottieRef }) => {
  useEffect(() => {
    var animDuration = 1000
    const anim = lottie.loadAnimation({
      container: lottieRef.current!,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '/marplacodeanimation.json',
    })

    function validateChangeColor() {
      const scrollPosition = window.scrollY
      if (scrollPosition >= 630 && scrollPosition < 1500) {
        lottieRef.current.classList.add('black')
      } else {
        lottieRef.current.classList.remove('black')
      }
    }

    function animatebodymovin(duration: number) {
      const scrollPosition = window.scrollY
      const maxFrames = anim.totalFrames

      const frame = (maxFrames / 100) * (scrollPosition / (duration / 100))

      anim.goToAndStop(frame >= maxFrames ? maxFrames : frame, true)
    }

    const onScroll = () => {
      animatebodymovin(animDuration)
      validateChangeColor()
    }

    document.addEventListener('scroll', onScroll)

    return () => {
      anim.destroy()
      document.removeEventListener('scroll', onScroll)
    }
  }, [])
}

export default useLogoAnimation
