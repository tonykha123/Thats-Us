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
  const data = req.body
  // const auth0Id = req.user?.sub
  // const newEvent = {
  //   // added_by_user: auth0Id,
  //   name: events.name,
  //   status: events.status,
  //   date: events.date,
  //   max: events.max,
  //   description: events.description,
  // }
  try {
    const newEvent = await db.addEvent(data)
    res.json(newEvent)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})

// router.get('/:id', async (req, res) => {
//   const eventId = Number(req.params.id)
//   try {
//     const foundEvent = await db.getEventsById(eventId)

//     const event = JSON.parse(JSON.stringify(foundEvent))
//     return res.json(event)
//   } catch (err) {
//     res.status(500).json({ error: err.message })
//   }
// })
