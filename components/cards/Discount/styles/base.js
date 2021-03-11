import styled from 'styled-components'

export const Discount = styled.div`
  background-color: ${props => props.theme.colors.primaryColorDark};
  height: 300px;
  width: 600px;
  color: white;
  z-index: 60;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 15px 5px #000000;
`

export const Graphic = styled.div`
  height: 300px;
  width: 300px;
  position: relative;
`