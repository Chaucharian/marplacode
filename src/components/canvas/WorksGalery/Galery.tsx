import useStore from '@/helpers/store'
import { a, useSpring } from '@react-spring/three'
import WaveImage from '../Image/Wave/WaveImage'

const Galery = () => {
  const currentWork = useStore((state) => state?.letter)
  const props = useSpring({
    // dispFactor: hovered ? 1 : 0,
    // dispFactor: currentWork == 'f' ? 1 : 0,
    config: { tension: 1000 },
  })
  console.log(currentWork)

  return (
    <>
      <WaveImage
        url='https://uploads.codesandbox.io/uploads/user/a3159b6f-2a33-4771-aed9-17b7b55f49f5/cjYf-Img1.jpg'
        {...props}
      />
      {/* <WaveImage /> */}
    </>
  )
}

export default Galery
