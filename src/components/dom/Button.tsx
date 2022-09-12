// import { theme } from '@/styles'
// import styled from 'styled-components'
// import Text from './Text'

// const StyledButton = styled.button`
//   ${({
//     width = 200,
//     height = 100,
//     background = 'transparent',
//     borderColor = 'white',
//     color = 'white',
//     padding = '20px',
//   }) => `
//   background: ${background};
//   padding: ${padding};
//   border-radius: 50px;
//   border: 1px solid ${borderColor};
//   font: inherit;
//   width: ${width};
//   height: ${height};
//   max-width: 200px;
//   outline: inherit;
//   color: ${color};
//   transition: all .5s ease-in;
//   position: relative;
//   overflow: hidden;

//     .backdrop {
//       transition: transform .5s cubic-bezier(.4,0,0,1),border-radius .5s cubic-bezier(.4,0,0,1);
//       position:absolute;
//       left: 0;
//       display:block;
//       bottom: 0;
//       width: 100%;
//       height: 100%;
//       background: #000;
//       transform: translateY(100%);
//     }

//     .text {
//       z-index: 2;
//       display: block;
//       font-size: 14px;
//       text-align: center;

//       &:after {
//         content: attr(data-text);
//         display: block;
//         position: absolute;
//         width: 100%;
//         left: 0;
//         color: #000;
//         transition: transform .5s cubic-bezier(.4,0,0,1);
//         transform: translateY(100%);
//       }
//     }

//     &:hover {
//       &.text:after {
//       transform: translateY(0%);

//       }
//     }

// `}
// `

// const Button = ({ children, textProps, ...props }) => {
//   return (
//     <StyledButton {...props}>
//       <div>
//         <span className='backdrop'></span>
//         <span className='text' data-text={children}>
//           {children}
//         </span>
//       </div>
//     </StyledButton>
//   )
// }

// export default Button

import React, { useRef, forwardRef, useEffect, useState } from 'react'
import styled from 'styled-components'
// import useMousePosition from '../utils/useMousePosition'
import { distance } from '@/helpers/math'
import { useIsMobile, useMousePosition } from '@/helpers/hooks'
import { theme } from '@/styles'

const Text = styled.span`
  display: block;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 50%;
    color: ${({ theme }) => '#FFF'};
    white-space: nowrap;
    transform: translate3d(-50%, -50%, 0);
    transition: all 0.65s ${({}) => theme.transitions.easeOutCirc};
  }

  &::after {
    color: ${({}) => '#000'};
    transform: translate3d(-50%, 140%, 0);
  }
`

const Style = styled.a`
  position: relative;
  display: inline-flex;
  justify-content: center;
  margin: 1em;
  padding: 1em 2em;
  max-width: 300px;
  font-size: 1.25em;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0.025em;
  color: ${({ theme }) => '#FFF'};
  background: ${({ theme }) => '#000'};
  border: 2px solid ${({ theme }) => '#cccccc'};
  border-radius: 50px;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.75s ${({ theme }) => theme.transitions.easeOutCirc};

  /* Text wrapper */
  > span {
    z-index: 100;
    position: relative;
    color: transparent;
  }

  &:hover {
    border-color: ${({ theme }) => '#cccccc'};

    ${Text} {
      &::before {
        transform: translate3d(-50%, -300%, 0);
      }

      &::after {
        color: ${({ theme }) => '#000'};
        transform: translate3d(-50%, -50%, 0);
      }
    }
  }
`

const Fill = styled.div`
  ${({ y = '80%' }) => `
  z-index: 10;
  position: absolute;
  top: -50%;
  left: -25%;
  width: 150%;
  height: 250%;
  display: block;
  border-radius: 50%;
  background: #FFF;
  pointer-events: none;
  transform: translate3d(0, ${y}, 0);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
`}
`

const Button = forwardRef((props, reff) => {
  // const { mouseX, mouseY } = useMousePosition()
  const textRef: any = useRef()
  const ref: any = useRef()
  const [fillProps, setFillProps] = useState({})
  const isDesktop = !useIsMobile()

  useEffect(() => {
    const node = ref.current
    let x = 0
    let y = 0

    const updateMousePosition = ({ clientX: mouseX, clientY: mouseY }) => {
      if (ref) {
        // New values for the translations
        const rect = node.getBoundingClientRect()
        const distanceToTrigger = rect.width * 0.7
        const distanceMouseButton = distance(
          mouseX + window.scrollX,
          mouseY + window.scrollY,
          rect.left + rect.width / 2,
          rect.top + rect.height / 2
        )

        // Handle magnetic effect
        if (distanceMouseButton < distanceToTrigger) {
          // Translate button position on hover
          x = (mouseX + window.scrollX - (rect.left + rect.width / 2)) * 0.2
          y = (mouseY + window.scrollY - (rect.top + rect.height / 2)) * 0.2
          node.style.transform = `translate3d(${x}px, ${y}px, 0)`
          textRef.current.style.transform = `translate3d(${x / 4}px, ${
            y / 4
          }px, 0)`
        } else {
          // Restore initial position
          node.style.transform = `translate3d(0, 0, 0)`
          textRef.current.style.transform = `translate3d(0, 0, 0)`
        }
      }
    }

    const handleMouseEnter = () => {
      // Handle background color animation
      setFillProps({
        y: '10%',
      })
    }

    const handleMouseLeave = () => {
      setFillProps({
        y: '-80%',
      })
    }

    if (node) {
      ref.current?.addEventListener('mouseenter', handleMouseEnter)
      ref.current?.addEventListener('mouseleave', handleMouseLeave)
      // magnetic effect only in Desktop
      isDesktop &&
        ref.current?.addEventListener('mousemove', updateMousePosition)

      return () => {
        isDesktop &&
          ref.current?.removeEventListener('mousemove', updateMousePosition)
        ref.current?.removeEventListener('mouseenter', handleMouseEnter)
        ref.current?.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [ref, textRef, isDesktop])

  return (
    <Style ref={ref} href={props.href}>
      <span ref={textRef}>
        <Text data-text={props.children}>{props.children}</Text>
      </span>
      <Fill {...fillProps} />
    </Style>
  )
})

export default Button
