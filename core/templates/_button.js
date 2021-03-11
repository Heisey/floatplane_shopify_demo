import styled from 'styled-components'

const _button = styled.button`
  border: ${props => props['border'] ? props['border'] : 'none'};
  background-color: ${props => props['background-color'] ? props['background-color'] : 'transparent'};
  cursor: pointer;
`

export default _button