import styled from 'styled-components'
import { templates } from '../../../../core'

export const AdminDashboard = styled(templates._page)`
  position: relative;
  background-color: ${props => props.theme.colors.baseColorDark};
`

export const CardImageTop = styled.div`
  position: absolute;
  top: -20px;
  left: 30px;
  height: 60px;
  width: 100px;
  background-color: ${props => props.color};
`