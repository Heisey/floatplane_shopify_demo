const Router = require('@koa/router')
const discountRoutes = require('./discounts')
const productRoutes = require('./product')

const apiRouter = new Router({ prefix: '/api'})

const nestedRoutes = [discountRoutes, productRoutes]

for (var router of nestedRoutes) {
    apiRouter.use(router.routes(), router.allowedMethods())
}

module.exports = apiRouter