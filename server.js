require('isomorphic-fetch')
const dotenv = require('dotenv')
const Koa = require('koa')
const next = require('next')
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth')
const { verifyRequest } = require('@shopify/koa-shopify-auth')
const session = require('koa-session')
const Router = require('@koa/router')
const bodyParser = require('koa-bodyparser')

const discountRoutes = require('./api/routes/discounts')


const api = require('./api')

dotenv.config()

const port = parseInt(process.env.PORT) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

const { SHOPIFY_API_KEY, SHOPIFY_API_SECRET } = process.env

app.prepare().then(() => {
  const server = new Koa()
  const apiRouter = new Router({ prefix: '/api'})
  apiRouter.use(
    api.routes(),
    api.allowedMethods()
  )

  server.use(bodyParser())

  server.use(session({ secure: true, sameSite: 'none' }, server))
  server.keys = [SHOPIFY_API_SECRET]


  server.use(createShopifyAuth({
    apiKey: SHOPIFY_API_KEY,
    secret: SHOPIFY_API_SECRET,
    scopes: ['read_products', 'write_products', 'read_price_rules', 'write_price_rules', 'read_discounts', 'write_draft_orders', 'read_draft_orders'],
    async afterAuth(ctx) {
      // const { shop, accessToken } = ctx.session
      ctx.redirect('/')
    }
  }))

  server.use(verifyRequest())

  server.use(async (ctx, next) => {
    if (!ctx.session.guessTracker) {
      ctx.session.guessTracker = {}
    }
    await next()
  })
  
  server.use(
    discountRoutes.routes(),
    discountRoutes.allowedMethods()
  )
  
  server.use(
    apiRouter.routes(),
    apiRouter.allowedMethods()
  )

  
  server.use(async (ctx) => {
    await handle(ctx.req, ctx.res),
    ctx.respond = false
    ctx.res.statusCode = 200
    return
  })

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})