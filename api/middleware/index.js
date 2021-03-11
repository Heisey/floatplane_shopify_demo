const addDiscountToContext = require('./addDiscountToContext')
const checkCode = require('./checkCode')

const middleware = {
  addDiscountToContext,
  checkCode
}

module.exports = middleware