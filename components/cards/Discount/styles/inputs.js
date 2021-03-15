import styled from 'styled-components'
import { utils } from '../../../../core'

export const input = styled.input`
  color: ${props => utils.handleColor(props, 'primary')};
  background: transparent;
  border: 4px solid ${props => utils.handleColor(props, 'primary')};
  padding: 20px;
  margin: 0 auto;
  display: block;
  width: 250px;
  max-width: 250px;
  font-size: 40px;
  line-height: 40px;
  letter-spacing: 15px;
  font-weight: 600;
  text-align: center;

  &::placeholder {
    color: inherit;
  }

  &:focus {
    outline-width: none;
    outline: none;
    caret-color: transparent;
  }
  
`