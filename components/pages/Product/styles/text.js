import styled from 'styled-components'
import { templates, utils } from '../../../../core'

export const backgroundText = styled(templates._h2)`
  color: ${props => utils.handleColor(props, 'base-light')};
  font-size: 20rem;
  transform: rotate(-90deg);
  position: absolute;
  bottom: 1%;
  left: 5%;
  width: 20rem;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.6;
`

export const price = styled(templates._h3)`
  font-size: 3rem;
  text-transform: uppercase;
  color: ${props => utils.handleColor(props)};
  display: block;
`

export const dollar = styled.span`
  padding-top: 0.4rem;
  padding-right: 0.5rem;
  color: ${props => utils.handleColor(props)};
  font-size: 2rem;
  display: block;
`

export const name = styled(templates._h2)`
  color: ${props => utils.handleColor(props, 'primary')};
  font-size: 2.5rem;
  text-transform: capitalize;
  font-weight: 600;
`

export const subTitle = styled(templates._h3)`
  color: ${props => utils.handleColor(props)};
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: 300;
  letter-spacing: 0.05rem;
`

export const discount = styled.span`
  color: ${props => utils.handleColor(props)};
  text-transform: capitalize;
  padding-top: 10px;
  cursor: pointer;
`