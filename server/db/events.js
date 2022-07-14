const connection = require('./connection')

module.exports = { getEvents, addEvent, getEventsById }


function getEvents(db = connection) {
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

function getEventsById(id, db = connection) {
  return db('events').where('event_id', id).select()
}
