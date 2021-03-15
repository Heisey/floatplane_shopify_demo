import styled from 'styled-components'
import { utils } from '../../../../core'
import { button } from './button'
import { productImage } from './images'

export const ProductCard = styled.div`
  position: relative;
  width: 320px;
  height: 420px;
  background-color: ${props => utils.handleColor(props, 'base')};
  border-radius: 20px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    width: 100%;
    height: 100%;
    background-color: ${props => utils.handleColor(props, 'tertiary')};
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
      top: -10px;
      opacity: 1;
    }
  }

  &::after {
    content: 'Category';
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: 600;
    font-size: 8em;
    color: rgba(0, 0, 0, 0.1);
  }
`