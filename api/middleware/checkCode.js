

const checkCode = async (ctx, next) => {
  try {

    const userGuessInfo = ctx.request.body
    const discountCodes = ctx.discounts
    const guessTracker = ctx.session.guessTracker
    
    const eligibleCodes = []
  
    discountCodes.forEach(el => {
      const productIds = el.productIds
      const isElible = productIds.includes(userGuessInfo.productId)
  
      if (isElible) {
        eligibleCodes.push(el)
      }
    })
  
    const parseCodesCompareAndReturnMessage = (guess, actual) => {
      let parsedGuess = parseInt(guess)
      const parsedActual = parseInt(actual)
  
      if (parsedGuess < 0) {
        parsedGuess = parsedGuess * -1
      }
      if (parsedGuess === parsedActual) {
        return 'you guessed correct'
      } else if ( parsedGuess < parsedActual) {
        return 'you guessed to low'
      } else {
        return 'you guessed to high'
      }
    }
  
    const parseCodesCompareAndReturnBoolean = (guess, actual) => {
      
      let parsedGuess = parseInt(guess)
      const parsedActual = parseInt(actual)
  
      if (parsedGuess < 0) {
        parsedGuess = parsedGuess * -1
      }
  
      if (parsedGuess === parsedActual) {
        return true
      } else {
        return false
      }
    }
  
    eligibleCodes.forEach(el => {
      const codeId = el.id
  
      if (parseCodesCompareAndReturnBoolean(userGuessInfo.guess, el.title)) {
        if (!guessTracker[codeId]) {
          const properties = {
            ...el,
            count: 1,
            correct: parseCodesCompareAndReturnBoolean(userGuessInfo.guess, el.title),
            message: parseCodesCompareAndReturnMessage(userGuessInfo.guess, el.title)
          }
          ctx.session.guessTracker[codeId] = properties
        }
        
        const properties = {
          ...el,
          count: guessTracker[codeId].count + 1,
          correct: parseCodesCompareAndReturnBoolean(userGuessInfo.guess, el.title),
          message: parseCodesCompareAndReturnMessage(userGuessInfo.guess, el.title)
        }
  
        ctx.session.guessTracker[codeId] = properties
  
        return 
      }
  
      if (!guessTracker[codeId]) {
        const properties = {
          count: 1,
          correct: parseCodesCompareAndReturnBoolean(userGuessInfo.guess, el.title),
          message: parseCodesCompareAndReturnMessage(userGuessInfo.guess, el.title)
        }
  
        ctx.session.guessTracker[codeId] = properties
        return
      } 
  
      const currentCount = guessTracker[codeId].count
  
      if (currentCount > 10) {
        return
      }
  
      const properties = {
        count: currentCount + 1,
        correct: parseCodesCompareAndReturnBoolean(userGuessInfo.guess, el.title),
        message: parseCodesCompareAndReturnMessage(userGuessInfo.guess, el.title)
      }
      
      ctx.session.guessTracker[codeId] = properties
    })
  
  } catch (err) {
    console.log('check code err')
    console.log(err)
  }

  await next()
}

module.exports = checkCode