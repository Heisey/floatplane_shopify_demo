import styled from 'styled-components'
import { templates } from '../../../../core'

export const button = styled(templates._button)`
  height: 50px;
  width: 250px;
  /* background-color: ${props => props.theme.colors.baseColorLight}; */
  display: block;
  margin: 10px auto;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  color: ${props => props.theme.colors.white};

  &:hover {
    background-color: ${props => props.backgroundColor};

    &::before {
      left: 100%;
    }
  }

  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, ${props => props.theme.colors.white}, transparent);
    transition: 0.5s;
  }
`