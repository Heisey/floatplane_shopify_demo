import { combineReducers } from 'redux'
import productsReducer from './products'
import temp from './default'

export default combineReducers({
  products: productsReducer,
  temp
})