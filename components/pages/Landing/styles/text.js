import styled from 'styled-components'
import { templates } from '../../../../core'

export const pageTitle = styled(templates._h1)`

`

export const colorAccent = styled.span`
  font-size: inherit;
  color: ${props => props.theme.colors.tertiaryColor}
`