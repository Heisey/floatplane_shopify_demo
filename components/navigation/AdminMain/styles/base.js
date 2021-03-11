import styled from 'styled-components'

export const AdminMain = styled.nav`
  position: absolute;
  height: 100vh;
  width: 300px;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.colors.baseColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 6px 0px 7px 1px ${props => props.theme.colors.baseColorDark};
  border-left: 1px solid ${props => props.theme.colors.baseColorDark};

`