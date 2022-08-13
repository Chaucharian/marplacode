import { useRef, useState } from 'react'
import styled from 'styled-components'
import { Flex, Line } from '.'

const StyledTextField = styled.input`
  font-family: 'LibreFranklin';
  font-weight: 200;
  font-size: 16px;
  outline: 0;
  color: #000;
  padding: 15px 0;
  border: 0px;
  background: none;
  margin: 0px;
  display: block;
  min-width: 0px;
  width: 100%;
  opacity: 0.5;
  transition: all ease-in 3s;

  &::placeholder {
    color: #fff;
    opacity: 0.8;
  }

  &:hover {
    &::placeholder {
      opacity: 1;
    }
  }
`

const TextField = ({ ...props }) => {
  const [hover, setHover] = useState(false)

  return (
    <Flex flexDirection='column' position='relative'>
      <StyledTextField
        type='text'
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...props}
      />
      <Line color='white' play={true} />
      <Flex position='absolute' bottom={0} width='100%'>
        <Line color='black' height={2} play={hover} />
      </Flex>
    </Flex>
  )
}

export default TextField
