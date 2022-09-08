import { useWindowSize } from 'usehooks-ts'

export const useIsMobile = () => {
  const { width } = useWindowSize()
  const isMobile = width < 834
  return isMobile
}
