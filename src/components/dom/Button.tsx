import { theme } from '@/styles'
import styled from 'styled-components'
import Text from './Text'

const StyledButton = styled.button`
  ${({ width = 250 }) => `
background: black;
  padding: 20px;
  color: inherit;
  border-radius: 35px;
  border: 1px solid white;
  font: inherit;
  cursor: pointer;
  width: ${width}px;
  outline: inherit;
  color: white;
`}
`

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <Text type={theme.fonts.p} fontWeight={'lighter'}>
        {children}
      </Text>
    </StyledButton>
  )
}

export default Button
