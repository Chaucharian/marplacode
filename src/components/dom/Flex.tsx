import styled from 'styled-components'
import { space, layout, color, border, flexbox, compose } from 'styled-system'

const Flex = styled.div`
  display: flex;
  ${compose(color, space, border, layout, flexbox)}
`
export default Flex
