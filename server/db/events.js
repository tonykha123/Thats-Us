const { json } = require('express')
const connection = require('./connection')

module.exports = { getEvents, addEvent, getEventsById, attendEvent }

function getEvents(db = connection) {
  return db('events').select()
}

function addEvent(newEvent, db = connection) {
  const { name, status, date, time, max, IMG, description, coords } = newEvent
  return db('events').insert({
    name,
    status,
    date,
    time,
    max,
    IMG,
    description,
    coords: JSON.stringify(coords),
  })
}

function getEventsById(id, db = connection) {
  return db('events').where('event_id', id).select()
}

function attendEvent(id, db = connection) {
  return db('events').join('users', 'username', 'events.event_id').select()
}
