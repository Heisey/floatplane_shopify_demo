import { withTheme } from 'styled-components'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { utils } from '../../../core'
import { actions } from '../../../store'
import content from './content'
import styles from './styles'

import Navigation from '../../navigation'

const AdminDashboard = (props) => {

  const { theme } = props

  const productsState = useSelector(state => state.products)
  const dispatch = useDispatch()
  
  useEffect(() => {
    actions.productActions.getAll(dispatch)
  }, [])

  const generateProductCards = (products) => {
    const grid = utils.generateGrid(products)
    return grid.map(row => (
      <styles.cardRow>
      {row.map(product => (
        <content.Card
          color={theme.colors.tertiaryColor}
        />
      )) }
      </styles.cardRow>
    ))
  }

  return (
    <styles.AdminDashboard>
      <Navigation.AdminMain />
      <styles.cardContainer>
        {productsState.data && generateProductCards(productsState.data.products)}
      </styles.cardContainer>
    </styles.AdminDashboard>
  )
}

export default withTheme(AdminDashboard)