import React, { useRef, forwardRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { distance } from '@/helpers/math'
import { useHover, useIsMobile } from '@/helpers/hooks'
import { theme } from '@/styles'

const Text = styled.span`
  ${({ primaryColor, secondaryColor }) => `

  display: block;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 50%;
    color: ${primaryColor ?? theme.colors.primary};
    white-space: nowrap;
    transform: translate3d(-50%, -50%, 0);
    transition: all 0.65s ${theme.transitions.easeOutCirc};
  }

  &::after {
    color: ${secondaryColor ?? theme.colors.secondary};
    transform: translate3d(-50%, 140%, 0);
  }
`}
`

const Link = styled.a`
  ${({
    primaryColor,
    secondaryColor,
    fontSize = '15px',
    isHover,
    isActive,
    checkboxMode,
    buttonStyles,
    selectedTextColor,
  }) => `
  font-family: LibreFranklin;
  font-size: ${fontSize};
  position: relative;
  display: inline-flex;
  justify-content: center;
  padding: 1em 2em;
  max-width: 300px;
  max-height: 75px;
  font-weight: 200;
  line-height: 1.25;
  letter-spacing: 0.025em;
  color: ${primaryColor ?? theme.colors.primary};
  background: ${secondaryColor ?? theme.colors.secondary};
  border: 0.5px solid #cccccc;
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
    border-color: #cccccc;

    ${Text} {
      &::before {
        transform: translate3d(-50%, -300%, 0);
      }

      &::after {
        color: ${
          checkboxMode
            ? primaryColor ?? theme.colors.primary
            : selectedTextColor ?? secondaryColor ?? theme.colors.secondary
        };
        transform: translate3d(-50%, -50%, 0);
      }
    }
  }

  ${
    isActive
      ? `
    border-color: #cccccc;

    ${Text} {
      &::before {
        transform: translate3d(-50%, -300%, 0);
      }

      &::after {
        color: ${selectedTextColor ?? secondaryColor ?? theme.colors.secondary};
        transform: translate3d(-50%, -50%, 0);
      }
    }
  `
      : ``
  }


  ${buttonStyles}
`}
`

const Fill = styled.div`
  ${({ primaryColor, isActive }) => `
  z-index: 10;
  position: absolute;
  top: -50%;
  left: -25%;
  width: 150%;
  height: 250%;
  display: block;
  border-radius: 50%;
  background: ${primaryColor ?? theme.colors.primary};
  pointer-events: none;
  transform: translate3d(0, ${isActive ? 10 : 80}%, 0);
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
`}
`

const Button = forwardRef(
  (
    {
      href,
      children,
      primaryColor,
      secondaryColor,
      selected,
      fontSize,
      selectedTextColor,
      onClick,
      ...props
    }: any,
    ref: any
  ) => {
    const textRef: any = useRef()
    const buttonRef: any = useRef()
    // const [buttonRef, isHover] = useHover()
    const backdropRef: any = useRef()
    const isDesktop = !useIsMobile()
    const checkboxMode = typeof selected === 'boolean'

    const handleMouseEnter = () => {
      // Handle background color animation
      backdropRef.current.style.transform = `translate3d(0, 10%, 0)`
    }

    const handleMouseLeave = () => {
      backdropRef.current.style.transform = `translate3d(0, -100%, 0)`
    }

    const magneticEffect = ({ containerRef, textRef, mouseX, mouseY }) => {
      let x = 0
      let y = 0
      // New values for the translations
      const rect = containerRef.getBoundingClientRect()
      const distanceToTrigger = rect.width * 0.6
      const distanceMouseButton = distance(
        mouseX + window.scrollX,
        mouseY + window.scrollY,
        rect.left + rect.width / 2,
        rect.top + rect.height / 2
      )
      console.log(window.scrollY)
      // Handle magnetic effect
      if (distanceMouseButton < distanceToTrigger) {
        // Translate button position on hover
        x = (mouseX + window.scrollX - (rect.left + rect.width / 2)) * 0.2
        y = (mouseY + window.scrollY - (rect.top + rect.height / 2)) * 0.2
        containerRef.style.transform = `translate3d(${x}px, ${y}px, 0)`
        textRef.current.style.transform = `translate3d(${x / 4}px, ${
          y / 4
        }px, 0)`
      } else {
        // Restore initial position
        containerRef.style.transform = `translate3d(0, 0, 0)`
        textRef.current.style.transform = `translate3d(0, 0, 0)`
      }
    }

    useEffect(() => {
      const node = buttonRef.current

      const updateMousePosition = ({ clientX: mouseX, clientY: mouseY }) => {
        magneticEffect({ containerRef: node, textRef, mouseX, mouseY })
      }

      if (node) {
        !checkboxMode && node?.addEventListener('mouseenter', handleMouseEnter)
        !checkboxMode && node?.addEventListener('mouseleave', handleMouseLeave)
        // magnetic effect only in Desktop
        isDesktop && node?.addEventListener('mousemove', updateMousePosition)

        return () => {
          isDesktop &&
            node?.removeEventListener('mousemove', updateMousePosition)
          node?.removeEventListener('mouseenter', handleMouseEnter)
          node?.removeEventListener('mouseleave', handleMouseLeave)
        }
      }
    }, [buttonRef, textRef, isDesktop])

    return (
      <Link
        ref={buttonRef}
        href={href}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
        selectedTextColor={selectedTextColor}
        // isHover={isHover}
        isActive={selected}
        fontSize={fontSize}
        checkboxMode={checkboxMode}
        onClick={onClick}
        {...props}
      >
        <span ref={textRef}>
          <Text data-text={children}>{children}</Text>
        </span>
        <Fill
          ref={backdropRef}
          isActive={selected}
          primaryColor={primaryColor}
        />
      </Link>
    )
  }
)

export default Button
