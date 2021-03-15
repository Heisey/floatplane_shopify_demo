
const Router = require('@koa/router')
const { verifyRequest } = require('@shopify/koa-shopify-auth')
const { discountController} = require('../controllers')
const { addDiscountToContext, checkCode } = require('../middleware')

const discountRouter = new Router({ prefix: '/discounts' })

discountRouter
  .use(verifyRequest())
  .post('/', addDiscountToContext, checkCode, discountController.applyDiscount)

module.exports = discountRouter