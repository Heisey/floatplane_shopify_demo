const addDiscountToContext = require('./addDiscountToContext')
const addGuessTrackerToSession = require('./addGuessTrackerToSession')
const checkCode = require('./checkCode')
const generateShopifyAuth = require('./generateShopifyAuth')

const middleware = {
  addDiscountToContext,
  addGuessTrackerToSession,
  checkCode,
  generateShopifyAuth
}

module.exports = middleware