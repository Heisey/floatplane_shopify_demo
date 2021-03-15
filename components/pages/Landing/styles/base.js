import styled from 'styled-components'
import { templates, utils } from '../../../../core'

export const Landing = styled(templates._page)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => utils.handleColor(props)};
`