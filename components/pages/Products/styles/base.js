import styled from 'styled-components'
import { templates, utils } from '../../../../core'

export const Products = styled(templates._page)`
  background-color: ${props => utils.handleColor(props, 'base-dark')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  overflow-x: hidden;
`