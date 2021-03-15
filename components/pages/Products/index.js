
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Cards } from '../../'
import { utils } from '../../../core'
import { actions } from '../../../store'

import styles from './styles'

const Products = (props) => {

  const products = useSelector(state => state.products.data)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
        actions.productActions.getAll(dispatch)
  }, [])

  const generateProductCards = (products) => {
    const grid = utils.generateGrid(products)
    return grid.map((row, index) => (
      <styles.cardRow key={index}>
      {row.map(product => (
        <Cards.ProductCard 
          key={product.id}
          id={product.id}
          image={product.image.src}
          name={product.title}
          price={product.variants[0].price}
        />
      )) }
      </styles.cardRow>
    ))
  }

  return (
    <styles.Products>
      {products && generateProductCards(products.products)}
    </styles.Products>
  )
}

export default Products