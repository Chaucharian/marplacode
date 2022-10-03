import styled from 'styled-components'
import { space, layout, color, border, position, compose } from 'styled-system'

const Box = styled.div`
  display: block;
  ${compose(color, space, border, layout, position)}
`
export default Box
