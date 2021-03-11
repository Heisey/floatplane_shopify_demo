
const Router = require('@koa/router')
const { verifyRequest } = require('@shopify/koa-shopify-auth')

const  { productController }  = require('../controllers')

const productRouter = new Router({ prefix: '/products'})
  productRouter.use(verifyRequest())
  productRouter.get('/', productController.getAll)
  productRouter.get('/:id', productController.getOne)
  productRouter.patch('/:id/delete', productController.del)

module.exports = productRouter