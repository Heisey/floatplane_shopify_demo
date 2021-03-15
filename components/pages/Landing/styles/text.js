import styled from 'styled-components'
import { templates, utils } from '../../../../core'

export const pageTitle = styled(templates._h1)``

export const colorAccent = styled.span`
  font-size: inherit;
  color: ${props => utils.handleColor(props, props.color)};
  line-height: 4rem;
  margin-bottom: 3rem;
  transition: all 0.3s;
`