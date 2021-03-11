import styled from 'styled-components'

export const input = styled.input`
  color: ${props => props.theme.colors.primaryColor};
  background: transparent;
  border: 4px solid ${props => props.theme.colors.primaryColor};
  padding: 20px;
  margin: 0 auto;
  display: block;
  width: 250px;
  max-width: 250px;
  font-size: 40px;
  line-height: 40px;
  letter-spacing: 15px;
  font-weight: 600;
  text-align: center;

  &::placeholder {
    color: inherit;
  }

  &:focus {
    outline-width: none;
    outline: none;
    caret-color: transparent;
  }
  
`