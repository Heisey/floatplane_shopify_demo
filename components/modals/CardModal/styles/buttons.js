import styled from 'styled-components'
import { templates, utils } from '../../../../core'

export const close = styled(templates._button)`
  color: ${props => utils.handleColor(props)};
  font-size: 2rem;
  position: absolute;
  top: 50px;
  right: 50px;
  cursor: pointer;
` 