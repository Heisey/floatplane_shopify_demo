

const initState = {
  loading: false,
  data: null,
  err: null
}

const reducer = (state = initState, action) => {
  switch(action.type) {
    case 'SHOPIFY_PRODUCTS_GET_ALL_START':
      return {loading: true, data: null, err: null}

    case 'SHOPIFY_PRODUCTS_GET_ALL_SUCCESS':
      return {loading: false, data: action.payload, err: null}

    case 'SHOPIFY_PRODUCTS_GET_ALL_FAILED':
      return { loading: false, data: null, err: action.payload}

    case 'SHOPIFY_PRODUCTS_GET_ONE_START':
      return {loading: true, data: null, err: null}

    case 'SHOPIFY_PRODUCTS_GET_ONE_SUCCESS':
      return {loading: false, data: action.payload, err: null}

    case 'SHOPIFY_PRODUCTS_GET_ONE_FAILED':
      return { loading: false, data: null, err: action.payload}

    default:
      return state
  }
}

export default reducer