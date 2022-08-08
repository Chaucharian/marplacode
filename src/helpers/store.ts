import create from 'zustand'

const useStore = create((set): any => {
  return {
    router: null,
    dom: null,
    video: null,
    // videos: [{ name: 'marplacode', video: '/'}],
    domReady: false,
    scroll: null,
    letter: 'h',
    navigationOpen: false,
  }
})

export default useStore
