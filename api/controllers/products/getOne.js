const axios = require('axios')

const getAll = async (ctx) => {
  const { shop, accessToken } = ctx.session

  const getProductId = (url) => {
    const arr = url.split('/')
    const id = arr[arr.length - 1]
    return id
  }

  const productId = getProductId(ctx.url)

  const url = `https://${shop}/admin/api/2021-01/products/${productId}.json`

  const headers = (token) => ({
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': token
  })

  

  const response = await axios.get(url, {
    headers: headers(accessToken)
  })

  ctx.body = response.data.product
  ctx.res.statusCode = 200
}

module.exports = getAll