import styled from 'styled-components'

const Flex = styled.div`
  ${({
    direction = 'row',
    justifyContent = 'center',
    alignItems = 'center',
    alignContent = 'center',
    width = '100%',
    height = '',
    padding = '0px',
    pR = '0px',
    margin = '0px',
    mR = '0px',
    mT = '0px',
    mB = '0px',
  }) => `
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-content: ${alignContent};
  align-items: ${alignItems};
  width: ${width};
  height: ${height};
  padding: ${padding};
  padding-right: ${pR};
  margin: ${margin};
  margin-right: ${mR};
  margin-top: ${mT};
  margin-bottom: ${mB};
`}
`

export default Flex
