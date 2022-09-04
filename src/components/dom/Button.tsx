import { theme } from '@/styles'
import styled from 'styled-components'
import Text from './Text'

const StyledButton = styled.button`
  ${({
    width = 200,
    background = 'black',
    borderColor = 'white',
    color = 'white',
    padding = '20px',
  }) => `
  background: ${background};
  padding: ${padding};
  border-radius: 50px;
  border: 1px solid ${borderColor};
  font: inherit;
  cursor: pointer;
  width: ${width}px;
  outline: inherit;
  color: ${color};
`}
`

const Button = ({ children, textProps, ...props }) => {
  return (
    <StyledButton {...props}>
      <Text
        type={theme.fonts.p}
        fontSize={'16px'}
        fontWeight={'lighter'}
        {...textProps}
      >
        {children}
      </Text>
    </StyledButton>
  )
}

export default Button
