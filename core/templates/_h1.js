import styled from 'styled-components'

const _h1 = styled.h1`
  font-size: ${props => props['font-size'] ? props['font-size'] : '3rem'};
`

export default _h1