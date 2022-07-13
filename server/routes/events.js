const express = require('express')
// TODO: import checkJwt
const db = require('../db/events')

const router = express.Router()

module.exports = router

// A public endpoint that anyone can access
// GET /api/v1/events
router.get('/', async (req, res) => {
  try {
    const events = await db.getEvents()
    res.json({ events })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// use checkJwt as middleware
// POST /api/v1/events
router.post('/', async (req, res) => {
  const { event } = req.body
  const auth0Id = req.user?.sub
  const newEvent = {
    added_by_user: auth0Id,
    name: event.name,
  }
  try {
    const events = await db.addEvent(newEvent)
    res.json({ events })
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// use checkJwt as middleware
// PUT /api/v1/events
router.put('/', async (req, res) => {
  const { event } = req.body
  const auth0Id = req.user?.sub
  const eventToUpdate = {
    id: event.id,
    added_by_user: auth0Id,
    name: event.name,
    average_grams_each: event.averageGramsEach,
  }
  try {
    const events = await db.updateEvent(eventToUpdate, auth0Id)
    res.json({ events })
  } catch (err) {
    console.error(err)
    if (err.message === 'Unauthorized') {
      return res
        .status(403)
        .send('Unauthorized: Only the user who added the event may update it')
    }
    res.status(500).send(err.message)
  }
})

// use checkJwt as middleware
// DELETE /api/v1/events
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const auth0Id = req.user?.sub
  try {
    const events = await db.deleteEvents(id, auth0Id)
    res.json({ events })
  } catch (err) {
    console.error(err)
    if (err.message === 'Unauthorized') {
      return res
        .status(403)
        .send('Unauthorized: Only the user who added the event may delete it')
    }
    res.status(500).send(err.message)
  }
})
