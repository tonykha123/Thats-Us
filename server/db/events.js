const connection = require('./connection')
module.exports = { getEvents, addEvents }

function getEvents(db = connection) {
  return db('events').select()
}

function addEvents(db = connection) {
  return db('events')
}
