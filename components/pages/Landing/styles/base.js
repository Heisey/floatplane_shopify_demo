import styled from 'styled-components'
import {templates} from '../../../../core'

export const Landing = styled(templates._page)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.white}
`