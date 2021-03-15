import styled from 'styled-components'
import { templates, utils } from '../../../../core'

export const Pill = styled(templates._button)`
  background-color: ${props => utils.handleColor(props, props.color)};
  height: 60px;
  width: 250px;
  border-radius: 25px; 
  box-shadow: 0px 5px 40px 2px ${props => utils.handleColor(props, props.color)};
  color: ${props => utils.handleColor(props)};
  text-transform: uppercase;
  letter-spacing: 4px;
  transition: all 0.3s;
`