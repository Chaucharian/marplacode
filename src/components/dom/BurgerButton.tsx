// import React from 'react'
// import styled from 'styled-components'

// const Container = styled.div`
//   ${({ width, isOpen }) => `

//   button {
//     display: block;
//     background-color: transparent;
//     outline: none;
//     width: 50px;
//     height: 15px;
//     margin: 0px;
//     padding: 0px;
//     position: relative;
//     transform: rotate(0deg);
//     transition: 0.5s ease-in-out;
//     cursor: pointer;
//     border: none;

//     span {
//       display: block;
//       position: absolute;
//       left: 0px;
//       height: 2px;
//       width: 100%;
//       background: #fff;
//       border-radius: 9px;
//       opacity: 1;
//       transition: 0.25s ease-in-out;
//       transform-origin: left center;

//       &:hover {
//         background: grey;
//       }
//     }

//     span:nth-child(1) {
//       top: 0px;
//     }
//     span:nth-child(2) {
//       top: 12px;
//     }
//     span:nth-child(3) {
//       top: 24px;
//     }
//       ${
//         isOpen &&
//         `
//     span:nth-child(1) {
//         transform: rotate(45deg);
//         top: -3px;
//     }

//     span:nth-child(2) {
//         transform: rotate(-45deg);
//         top: 25px;
//     }
//   }`
//       }
//   `}
// `

// const BugerButton = ({ open, show, onClick }: any) => (
//   <Container isOpen={open} width={show ? '100%' : '0%'} onClick={onClick}>
//     <button>
//       <span></span>
//       <span></span>
//     </button>
//   </Container>
// )

// export default BugerButton

import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'

const Button = styled.button`
  display: block;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  width: 40px;
  border: none;
  padding: 0;
  margin: 0;
`

const Svg = styled.svg`
  mix-blend-mode: difference;
`

const useAnimation = ({ play }) => {
  const [animation, start] = useSpring(() => ({
    width: '0%',
  }))

  if (play) {
    start({ width: '100%', delay: 2000 })
  } else {
    start({ width: '0%' })
  }

  return animation
}

const Burger = ({ open, show = true, onClick }) => {
  const animation = useAnimation({ play: show })
  const second = useSpring({
    transform: open
      ? 'translate(10px, 4px) rotate(45deg)'
      : 'translate(2px, 19px) rotate(0deg)',
  })
  const third = useSpring({
    transform: open
      ? 'translate(5px, 32px) rotate(-45deg)'
      : 'translate(2px, 31px) rotate(0deg)',
  })

  return (
    <Button>
      <Svg
        onClick={onClick}
        width='40'
        height='32'
        viewBox='0 0 44 44'
        fill='#fafafa'
        xmlns='http://www.w3.org/2000/svg'
      >
        <animated.rect
          height='4'
          rx='2'
          style={{
            ...second,
            ...animation,
          }}
        />
        <animated.rect height='4' rx='2' style={{ ...third, ...animation }} />
      </Svg>
    </Button>
  )
}

export default Burger
