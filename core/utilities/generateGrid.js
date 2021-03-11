const generateGrid = (products) => {
  const grid = []
  let row = []
  for (let x = 0; x < products.length; x++) {
    if (x !== 0) {
      if (x % 3 === 0) {
        grid.push(row)
        row = []
        row.push(products[x])
      } else {
        row.push(products[x])
      }
    } else {
      row.push(products[x])
    }
  }

  if (row.length !== 0) {
    grid.push(row)
  }

  return grid
}

export default generateGrid