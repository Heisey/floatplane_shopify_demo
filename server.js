require('isomorphic-fetch')
const dotenv = require('dotenv')
const Koa = require('koa')
const next = require('next')
const { verifyRequest } = require('@shopify/koa-shopify-auth')
const session = require('koa-session')
const bodyParser = require('koa-bodyparser')

const api = require('./api')

dotenv.config()

const port = parseInt(process.env.PORT) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

const { SHOPIFY_API_SECRET } = process.env

app.prepare().then(() => {
  const server = new Koa()

  server.use(bodyParser())

  server.use(session({ secure: true, sameSite: 'none' }, server))
  server.keys = [SHOPIFY_API_SECRET]

  server.use(api.middleware.generateShopifyAuth)

  server.use(verifyRequest())

  server.use(api.middleware.addGuessTrackerToSession)
  
  server.use(api.router.routes(), api.router.allowedMethods())
  
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