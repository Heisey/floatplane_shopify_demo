import styled from 'styled-components'

const cardRow = styled.div`
  display: flex;
  justify-content: ${props => props['justify-content'] ? props['justify-content'] : 'space-between'};
  height: ${props => props['height'] ? props['height'] : 'fit-content'};
  width: ${props => props['width'] ? props['width'] : '100%'};
`

export default cardRow