const apiRoutes = require('./routes')
const middleware = require('./middleware')

const api = {
  router: apiRoutes,
  middleware
}

module.exports = api