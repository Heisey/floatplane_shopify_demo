import styled from 'styled-components'
import { templates } from '../../../../core'

export const Pill = styled(templates._button)`
background-color: ${props => props.theme.colors.primaryColor};
  height: 60px;
  width: 250px;
  border-radius: 25px; 
  box-shadow: 0px 5px 40px 2px ${props => props.theme.colors.primaryColor};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 4px;
`