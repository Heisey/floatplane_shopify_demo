import styled from 'styled-components'
import { templates } from '../../../../core'

export const card = styled.div`
  height: 250px;
  width: 400px;
  background-color: ${props => props.theme.colors.baseColor};
  border-radius: 5px;
  margin: 20px;
  position: relative;
`

export const cardBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
`

export const cardContainer = styled.div`
  height: fit-content;
  max-height: 100vh;
  width: calc(100% - 400px);
  margin-left: 300px;
  padding: 50px;
`

export const cardFooter = styled.div`
  height: 60px;
  width: calc(100% - 30px);
  display: flex;
  justify-content: space-between;
  margin: 0 15px;
  align-items: center;
`

export const cardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 110px;
`

export const cardRow = styled(templates._cardRow)``

export const cardSelectButton = styled(templates._button)`
  font-size: 20px;
  text-transform: capitalize;
  color: ${props => props.theme.colors.quatenaryColor}
`

export const cardTop = styled.header`
  height: fit-content;
  justify-content: flex-end;
  display: flex;
  align-items: flex-end;
  width: 100%;
`

export const svgContainer = styled.div`
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`