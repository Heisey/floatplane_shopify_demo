import styled from 'styled-components'

export const CardModal = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: ${props => props.show ? 50 : -1};
  background-color: rgb(0, 0, 0, 0.6);
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`