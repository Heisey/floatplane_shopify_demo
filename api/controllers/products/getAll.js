const axios = require('axios')
const lib = require('../../lib')

const getAll = async (ctx) => {
  const { shop, accessToken } = ctx.session
  const url = `https://${shop}/admin/api/2021-01/products.json`

  const headers = lib.generateShopifyHeaders(accessToken)

  const { data } = await axios.get(url, {
    headers
  })

  ctx.body = data
  ctx.res.statusCode = 200
}

exports.getAll = getAll