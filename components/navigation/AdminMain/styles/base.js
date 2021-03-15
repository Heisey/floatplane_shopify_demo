import styled from 'styled-components'
import { utils } from '../../../../core'

export const AdminMain = styled.nav`
  position: absolute;
  height: 100vh;
  width: 300px;
  top: 0;
  left: 0;
  background-color: ${props => utils.handleColor(props, 'base')};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 6px 0px 7px 1px ${props => utils.handleColor(props, 'base-dark')};
  border-left: 1px solid ${props => utils.handleColor(props, 'base-dark')};

`