import styled from 'styled-components'

export const backgroundGraphic = styled.div`
  height: 100%;
  width: 100%;
  background-image: url('/images/lightning.png');
  background-color: rgb(0, 0, 0, 0.3);
  display: flex;
`

export const buttonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`

export const cardBody = styled.div`
  width: 300px;
  /* background-color: transparent; */
  padding: 15px 0;
`

export const circle = styled.div`
  height: ${props => props.size};
  width: ${props => props.size};
  background-color: ${props => props.theme.colors.primaryColor};
  border-radius: 50%;
  box-shadow: 0px 0px 15px 5px #000000;
  top: 50%;
  left: 105px;
  position: absolute;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const toast = styled.div`
  width: 600px;
  height: 80px;
  background-color: ${props => props.color ? 'green' : 'red'};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, calc(-50% - ${props => props.show ? '190px' : '0px'}));
  z-index: ${props => props.show ? '60' : '59'};
  box-shadow: 0px -2px 5px 2px #000000;
`