const db = require('./models')

const truncateTables = () => {
  console.log('truncating tables')
  db.bookmark.destroy({ truncate : true, cascade: true }) // cascade currently unnecessary
}

module.exports = truncateTables