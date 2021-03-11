

const getAll = async (dispatch) => {
  dispatch({ type: 'SHOPIFY_PRODUCTS_GET_ALL_START' })

  try {
    const response = await fetch('/api/products')

    const data = await response.json()

    dispatch({ type: 'SHOPIFY_PRODUCTS_GET_ALL_SUCCESS', payload: data})
  } catch (err) {
    console.log('products get all hook')
    console.log(err)
    dispatch({ type: 'SHOPIFY_PRODUCTS_GET_ALL_FAILED', payload: err})
  }
}

export default getAll