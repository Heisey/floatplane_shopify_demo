const { default: axios } = require("axios")
const lib = require('../../lib')

const applyDiscount = async (ctx) => {
  const { shop, accessToken } = ctx.session
  const headers = lib.generateShopifyHeaders(accessToken)
  const guessTracker = ctx.session.guessTracker
  const clientData = ctx.request.body

  let priceRuleId

  try {
    for (let key in guessTracker) {
      priceRuleId = key
    }

    if (!guessTracker[priceRuleId].correct) {
      if (guessTracker[priceRuleId].count === 10) {
        ctx.body = {
          message: 'you have hit you maximum number of attempts please restart',
          correct: guessTracker[priceRuleId].correct,
          draftOrderUrl: null,
          count: guessTracker[priceRuleId].count
        }

        delete ctx.session.guessTracker[priceRuleId]
        return
      }
      
      ctx.body = {
        message: guessTracker[priceRuleId].message,
        correct: guessTracker[priceRuleId].correct,
        draftOrderUrl: null,
        count: guessTracker[priceRuleId].count
      }

      return
    }

    const discountsUrl = `https://${shop}/admin/api/2021-01/price_rules/${priceRuleId}/discount_codes.json`

    const generateAmount = (tag, amount) => {
      if (tag === 'percentage') {
        const unparsedString = amount.substring(1)

        const amountNumber = Math.floor(parseInt(unparsedString))

        return amountNumber
      }

      return amount
    }

    let generatedCode
    const discountType = guessTracker[priceRuleId].discountType
    const discountAmount = guessTracker[priceRuleId].value

    if (discountType === 'percentage') {
      generatedCode = `FLOATPLANE${lib.handleDiscountAmount(discountType, discountAmount)}${lib.generateCurrencySign(discountType)}NUMBERGUESSS${Math.floor(Math.random()*100)}`
    } else {
      generatedCode = `FLOATPLANE${lib.generateCurrencySign(discountType, discountAmount)}${lib.handleDiscountAmount(discountType)}NUMBERGUESSS${Math.floor(Math.random()*100)}`
    }
  
    await axios({
        url: discountsUrl,
        method: 'post',
        headers,
        data: {
          discount_code: {
            code: generatedCode
          }
        }
    })

    const draftOrderUrl = `https://${shop}/admin/api/2021-01/draft_orders.json`

    const draftOrderResponse = await axios({
      url: draftOrderUrl,
      method: 'post',
      headers,
      data: {
        draft_order: {
          line_items: [
            {
              title: clientData.productName,
              price: clientData.productPrice,
              quantity: 1,
              applied_discount: {
                description: 'Float Plane Random Number Discount',
                value_type: discountType,
                value: generateAmount(discountType, discountAmount),
                amount: generateDiscountAmount(discountType, clientData.productPrice, discountAmount),
                title: 'puppies'
              }
            }
          ]
        }
      }
    })

    const draftOrderData = draftOrderResponse.data

    ctx.body = {
      message: guessTracker[priceRuleId].message,
      correct: guessTracker[priceRuleId].correct,
      draftOrderUrl: draftOrderData.draft_order.invoice_url,
      count: guessTracker[priceRuleId].count
    }

    delete ctx.session.guessTracker[priceRuleId]
  } catch (err) {
    ctx.body = { 
      message: 'server error',
      correct: null,
      draftOrderUrl: null,
      count: null
    }
    console.log(err.message)
  }
}

module.exports = applyDiscount