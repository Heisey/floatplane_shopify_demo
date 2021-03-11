const axios = require('axios')

const del = async (ctx) => {
  const { shop, accessToken } = ctx.session
  const url = `https://${shop}/admin/api/2021-01/products.json`

  const headers = (token) => ({
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': token
  })

  const products = await axios.get(url, {
    headers: headers(accessToken)
  })

  ctx.body = products.data
  ctx.res.statusCode = 200
}

module.exports = del