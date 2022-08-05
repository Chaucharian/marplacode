import { theme } from '@/styles'
import styled from 'styled-components'
import Text from './Text'

const StyledButton = styled.button`
  background: black;
  padding: 20px;
  color: inherit;
  border-radius: 35px;
  border: 1px solid white;
  font: inherit;
  cursor: pointer;
  width: 250px;
  outline: inherit;
  color: white;
`

const Button = ({ children }) => {
  return (
    <StyledButton>
      <Text type={theme.fonts.p} fontWeight={'lighter'}>
        {children}
      </Text>
    </StyledButton>
  )
}

export default Button
