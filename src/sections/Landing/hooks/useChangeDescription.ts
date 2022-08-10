import { useState, useEffect } from 'react'

export const useChangeDescription = ({
  time = 2000,
  options,
  onChange = (index) => {},
}) => {
  const [current, setCurrent] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      const newPosition = current === options.length - 1 ? 0 : current + 1
      onChange(options[newPosition])
      setCurrent(newPosition)
    }, time)
    return () => clearInterval(id)
  }, [current, setCurrent])

  return options[current]
}
