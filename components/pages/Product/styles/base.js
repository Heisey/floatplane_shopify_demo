import styled from 'styled-components'
import { templates } from '../../../../core'

export const ProductPage = styled(templates._page)`
  position: relative;
  max-height: 100vh;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  z-index: 5;
`