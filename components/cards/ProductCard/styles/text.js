import styled from 'styled-components'
import { templates, utils } from '../../../../core'

export const name = styled(templates._h3)`
  font-size: 18px;
  color: ${props => utils.handleColor(props, 'tertiary')};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const price = styled(templates._h4)`
  font-size: 24px;
  color: ${props => utils.handleColor(props)};
  font-weight: 500;
  letter-spacing: 1px;
`