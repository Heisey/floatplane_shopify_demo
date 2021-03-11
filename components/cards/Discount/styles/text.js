import styled from 'styled-components'
import { templates } from '../../../../core'

export const discountPrice = styled(templates._h3)`
  color: ${props => props.theme.colors.white};
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 2px;
  position: relative;
  line-height: 50px;
  height: 50px;
  margin-left: -20px;

  &::before {
    content: '%';
    position: absolute;
    right: -20px;
    top: -8px;
    font-size: 20px;
  }

  &::after {
    content: 'OFF';
    position: absolute;
    right: -43px;
    bottom: -10px;
    font-size: 20px;
    font-weight: 400;
  }
`

export const discountTitle = styled(templates._h2)`
  color: ${props => props.theme.colors.white};
  font-size: 30px;
  text-align: center;
  text-transform: capitalize;
`

export const contestRules = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: 10px;
  width: 230px;
  line-height: 10px;
  margin: 0 auto;
`