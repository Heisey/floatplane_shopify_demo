const generateShopifyHeaders = (token) => ({
  'Content-Type': 'application/json',
  'X-Shopify-Access-Token': token
})

module.exports = generateShopifyHeaders