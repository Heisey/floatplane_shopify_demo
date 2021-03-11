import styled from 'styled-components'

export const productName = styled.span`
  color: ${props => props.color};
  text-align: right;
  font-size: 40px;
  text-transform: uppercase;
  padding-right: 10px;
`

export const infoTitle = styled.span`
  color: ${props => props.theme.colors.quatenaryColor};
  font-size: 20px;
  display: block;
  text-transform: uppercase;
`

export const infoData = styled.span`
  color: ${props => props.theme.colors.white};
  font-size: 30px;
  display: block;
`