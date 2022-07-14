const connection = require('./connection')
module.exports = { getEvents, addEvents, getEventsById }

function getEvents(db = connection) {
  return db('events').select()
}

function addEvents(db = connection) {
  return db('events')
}

function getEventsById(id, db = connection) {
  return db('events').where('event_id', id).select()
}
