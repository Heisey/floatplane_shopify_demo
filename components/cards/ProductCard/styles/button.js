import styled from 'styled-components'
import { templates } from '../../../../core'

export const button = styled(templates._button)`
  position: relative;
  top: 200px;
  opacity: 0;
  padding: 10px 30px;
  margin-top: 15px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.tertiaryColor};
  text-transform: uppercase;
  transition: 0.3s;
  border-radius: 5px;
`