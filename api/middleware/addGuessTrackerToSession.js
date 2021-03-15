
const addGuessTrackerToSession = async (ctx, next) => {
  if (!ctx.session.guessTracker) {
    ctx.session.guessTracker = {}
  }

  await next()
}

module.exports = addGuessTrackerToSession