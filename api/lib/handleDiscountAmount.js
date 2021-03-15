const handleDiscountAmount = (tag, price, discount) => {
  let amount = 0

  if (tag === 'percentage') {
    const percentage = parseInt(discount.substring(1))

    amount = price * (percentage / 100)
  }

  return amount
}

module.exports = handleDiscountAmount