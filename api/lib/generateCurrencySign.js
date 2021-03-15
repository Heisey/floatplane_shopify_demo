const generateCurrencySign = (tag) => {
  if (tag === 'percentage') {
    return '%'
  }
  return ''
}

module.exports = generateCurrencySign