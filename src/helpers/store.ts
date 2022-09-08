import { useHover } from '@/helpers/hooks'
import create from 'zustand'

const useStore = create((set): any => {
  return {
    menuHover: false,
    router: null,
    dom: null,
    video: null,
    // videos: [{ name: 'marplacode', video: '/'}],
    domReady: false,
    scroll: null,
    scrollTo: () => {},
    changeCameraEffect: false,
    letter: 'h',
    navigationOpen: false,
  }
})

export default useStore
