
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth')

const { SHOPIFY_API_KEY, SHOPIFY_API_SECRET } = process.env

const generateShopifyAuth = createShopifyAuth({
  apiKey: SHOPIFY_API_KEY,
  secret: SHOPIFY_API_SECRET,
  scopes: ['read_products', 'write_products', 'read_price_rules', 'write_price_rules', 'read_discounts', 'write_draft_orders', 'read_draft_orders'],
  async afterAuth(ctx) {
    ctx.redirect('/')
  }
})

module.exports = generateShopifyAuth