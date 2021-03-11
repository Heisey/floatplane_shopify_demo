import styled from 'styled-components'
import { templates } from '../../../../core'

export const close = styled(templates._button)`
  color: ${props => props.theme.colors.white};
  font-size: 2rem;
  position: absolute;
  top: 50px;
  right: 50px;
  cursor: pointer;
` 