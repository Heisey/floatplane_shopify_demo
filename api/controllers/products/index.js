const { getAll } = require('./getAll')
const getOne = require('./getOne')
const del = require('./del')

const controller = {
  del,
  getAll,
  getOne
}

module.exports = controller