import styled from 'styled-components'

const _page = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${props => props['background-color'] ? props['background-color'] : props.theme.colors.baseColor}
`

export default _page