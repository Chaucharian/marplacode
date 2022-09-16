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
        const svgs = lottieRef.current.querySelectorAll('path')
        console.log(svgs)
        svgs.forEach((svg) => (svg.style.fill = 'black'))
      } else {
        const svgs = lottieRef.current.querySelectorAll('path')
        console.log(svgs)
        svgs.forEach((svg) => (svg.style.fill = 'white'))
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
