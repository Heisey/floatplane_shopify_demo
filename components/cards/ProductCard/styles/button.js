import styled from 'styled-components'
import { templates, utils } from '../../../../core'

export const button = styled(templates._button)`
  position: relative;
  top: 200px;
  opacity: 0;
  padding: 10px 30px;
  margin-top: 15px;
  color: ${props => utils.handleColor(props)};
  background-color: ${props => utils.handleColor(props, 'tertiary')};
  text-transform: uppercase;
  transition: 0.3s;
  border-radius: 5px;
`