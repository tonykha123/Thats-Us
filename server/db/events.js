const connection = require('./connection')
module.exports = { getEvent, addEvent }

function getEvent(db = connection) {
  return db('events').select()
}

function addEvent(newEvent, db = connection) {
  const { name, status, date, time, max, IMG, description } = newEvent
  return db('events').insert({
    name,
    status,
    date,
    time,
    max,
    IMG,
    description,
  })
}
