const axios = require('axios')

const addDisountToContext = async (ctx, next) => {

  try {
    const { shop, accessToken } = ctx.session
    const url = `https://${shop}/admin/api/2021-01/price_rules.json`

    const headers = (token) => ({
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': token
    })

    const { data } = await axios({
      url,
      method: 'get',
      headers: headers(accessToken)
    })

    if (data.price_rules) {
      const discountCodes = data.price_rules.map(discount => {
        return {
          id: discount.id,
          title: discount.title,
          productIds: discount.entitled_product_ids,
          value: discount.value,
          discountType: discount.value_type
        }
      })

      ctx.discounts = discountCodes
    }

    await next()
  } catch (err) {
    console.log('add discount ot context error')
    console.log(err.message)
  }
}

module.exports = addDisountToContext