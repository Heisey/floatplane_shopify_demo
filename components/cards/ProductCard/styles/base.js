import styled from 'styled-components'
import { button } from './button'
import { productImage } from './images'

export const ProductCard = styled.div`
  position: relative;
  width: 320px;
  height: 420px;
  background-color: ${props => props.theme.colors.baseColor};
  border-radius: 20px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.tertiaryColor};
    transform: skewY(345deg);
    transition: 0.5s;
  }

  &:hover {
    &::before {
      top: -70%;
      transform: skewY(390deg);
    }

    ${productImage} {
      max-width: 50%;
    }

    ${button} {
      top: -40px;
      opacity: 1;
    }
  }

  &::after {
    /* content: ${props => props.category ? props.category : 'Category'}; */
    content: 'Category';
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: 600;
    font-size: 8em;
    color: rgba(0, 0, 0, 0.1);
  }
`