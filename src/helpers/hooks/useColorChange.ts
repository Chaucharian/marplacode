import { useIsMobile } from '.'

interface props {
  progress?: number
}
export const useColorChange = (initialProgress?) => {
  const isMobile = useIsMobile()

  const whiteSecction = (progress) =>
    isMobile
      ? progress >= 13 && progress <= 34
      : progress >= 14 && progress <= 34

  if (typeof initialProgress === 'undefined') {
    return (progress) => whiteSecction(progress)
  } else {
    return whiteSecction(initialProgress)
  }
}
