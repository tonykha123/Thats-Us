const { json } = require('express')
const connection = require('./connection')

module.exports = { getEvents, addEvent, getEventsById, attendEvent }

function getEvents(db = connection) {
  return db('events').select()
}

function addEvent(newEvent, db = connection) {
<<<<<<< HEAD
  const { name, status, date, time, max, IMG, description } = newEvent
=======
  const {
    name,
    status,
    date,
    time,
    max,
    IMG,
    description,
    category,
    coordsX,
    coordsY,
    display_name,
  } = newEvent

>>>>>>> origin
  return db('events').insert({
    name,
    status,
    date,
    time,
    max,
    IMG,
    description,
<<<<<<< HEAD
=======
    category,
    coordsX,
    coordsY,
    display_name,
>>>>>>> origin
  })
}

function getEventsById(id, db = connection) {
  return db('events').where('event_id', id).select()
}

function attendEvent(id, updatedAttendees, db = connection) {
  return db('events')
    .where('event_id', id)
    .update({attendees: updatedAttendees})
}
