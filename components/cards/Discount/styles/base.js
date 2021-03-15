import styled from 'styled-components'
import { utils } from '../../../../core'

export const Discount = styled.div`
  background-color: ${props => utils.handleColor(props, 'primary-dark')};
  height: 300px;
  width: 600px;
  color: white;
  z-index: 60;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 15px 5px ${props => utils.handleColor(props, 'base-dark')};
`

export const Graphic = styled.div`
  height: 300px;
  width: 300px;
  position: relative;
`