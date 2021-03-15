const axios = require('axios')

const getAll = async (ctx) => {
  const { shop, accessToken } = ctx.session
  const url = `https://${shop}/admin/api/2021-01/products.json`

  const headers = (token) => ({
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': token
  })

  const { data } = await axios.get(url, {
    headers: headers(accessToken)
  })

  ctx.body = data
  ctx.res.statusCode = 200
}

exports.getAll = getAll