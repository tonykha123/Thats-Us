const express = require('express')
// TODO: import checkJwt
// JWT CHECK IMPORT
const checkJwt = require('../auth0.js')
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
  const data = req.body

  try {
    const newEvent = await db.addEvent(data)
    res.json(newEvent)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// GET /api/v1/events/:id
router.get('/:id', async (req, res) => {
  const eventId = Number(req.params.id)
  try {
    const foundEvent = await db.getEventsById(eventId)
    return res.json(foundEvent)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})
