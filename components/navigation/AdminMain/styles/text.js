import styled from 'styled-components'
import { templates } from '../../../../core'

export const navTitle = styled(templates._h1)`
  font-size: 2rem;
  text-transform: uppercase;
  display: block;
  height: 60px;
  position: relative;
  color: white;

  &::after {
    content: '';
    position: absolute;
    height: 2px;
    background-color: white;
    bottom: 0;
    width: 110%;
    left: -5%;
    border: 1px solid white
  }
`