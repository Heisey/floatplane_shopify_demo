import styled from 'styled-components'

export const cardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 80%;
  margin-left: 0;
`

export const imageBox = styled.div`
  background: ${props => props.theme.colors.primaryColor};
  background: linear-gradient(210deg, ${props => props.theme.colors.quatenaryColor} 38%, ${props => props.theme.colors.primaryColor} 61%);
  height: 600px;
  width: 500px;
  position: relative;
  box-shadow: -10px 5px 15px 5px ${props => props.theme.colors.baseColorDark};
`

export const cardContent = styled.div`
  height: 700px;
  background-color: ${props => props.theme.colors.baseColorLight};
  width: 500px; 
  box-shadow: -3px 5px 15px 5px ${props => props.theme.colors.baseColorDark};
`

export const cardHeader = styled.div`
  height: 20%;
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin: 0 auto;
  align-items: center;
`

export const cardBody = styled.div`
  width: 90%;
  height: 60%;
  margin: 0 auto;
`

export const priceContainer = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
`

export const cardFooter = styled.footer`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`