import axios from 'axios'

const getOne = async (dispatch, id) => {
  dispatch({ type: 'SHOPIFY_PRODUCTS_GET_ONE_START' })

  try {
    const { data } = await axios(`/api/products/${id}`)

    dispatch({ type: 'SHOPIFY_PRODUCTS_GET_ONE_SUCCESS', payload: data})
  } catch (err) {
    console.log('products get one hook')
    console.log(err)
    dispatch({ type: 'SHOPIFY_PRODUCTS_GET_ONE_FAILED', payload: err})
  }
}

export default getOne