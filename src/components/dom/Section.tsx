import styled from 'styled-components'

const Wrapper = styled.div`
  ${({ top }) => `
  position: absolute;
  right: 0;
  top: ${top}vh;
  width: 100%;
  height: 100%;
`}
`
const Section = ({ index, content, sceneOptions, controllerOptions }: any) => {
  return (
    <Wrapper id={index} top={index * 100}>
      {content}
    </Wrapper>
  )
}

export default Section
