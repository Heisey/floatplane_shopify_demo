const discountRoutes = require('./discounts')
const productRoutes = require('./product')
const Router = require('@koa/router')

const apiRouter = new Router()

apiRouter.use(
  discountRoutes.routes(),
  discountRoutes.allowedMethods(),
  productRoutes.routes(),
  productRoutes.allowedMethods()
)

module.exports = apiRouter