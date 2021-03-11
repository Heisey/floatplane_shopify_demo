const { default: axios } = require("axios")

const getAll = async (ctx) => {

  const { shop, accessToken } = ctx.session
  const guessTracker = ctx.session.guessTracker
  const clientData = ctx.request.body

  let priceRuleId

  console.log(ctx.session.guessTracker)
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

    const headers = (token) => ({
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': token
    })

    const generateSign = (tag) => {
      if (tag === 'percentage') {
        return '%'
      }

      return ''
    }

    const generateAmount = (tag, amount) => {
      if (tag === 'percentage') {
        const unparsedString = amount.substring(1)

        const amountNumber = Math.floor(parseInt(unparsedString))

        return amountNumber
      }

      return amount
    }

    const generateDiscountAmount = (tag, price, discount) => {
      let amount = 0

      if (tag === 'percentage') {
        const percentage = parseInt(discount.substring(1))

        amount = price * (percentage / 100)


      }

      return amount
    }

    let generatedCode
    const discountType = guessTracker[priceRuleId].discountType
    const discountAmount = guessTracker[priceRuleId].value

    if (discountType === 'percentage') {
      generatedCode = `FLOATPLANE${generateAmount(discountType, discountAmount)}${generateSign(discountType)}NUMBERGUESSS${Math.floor(Math.random()*100)}`
    } else {
      generatedCode = `FLOATPLANE${generateSign(discountType, discountAmount)}${generateAmount(discountType)}NUMBERGUESSS${Math.floor(Math.random()*100)}`
    }
  
    const discountResponse = await axios({
        url: discountsUrl,
        method: 'post',
        headers: headers(accessToken),
        data: {
          discount_code: {
            code: generatedCode
          }
        }
    })
  
    const discountsData = discountResponse.data
  
    console.log('discount data, ',discountsData)

    const draftOrderUrl = `https://${shop}/admin/api/2021-01/draft_orders.json`

    const draftOrderResponse = await axios({
      url: draftOrderUrl,
      method: 'post',
      headers: headers(accessToken),
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

module.exports = getAll