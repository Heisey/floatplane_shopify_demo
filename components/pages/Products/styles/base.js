import styled from 'styled-components'
import { templates } from '../../../../core'

export const Products = styled(templates._page)`
  background-color: ${props => props.theme.colors.baseColorDark};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100vw;
  overflow-x: hidden;
`