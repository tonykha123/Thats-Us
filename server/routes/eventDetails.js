const express = require('express')
const db = require('../db/events')

const router = express.Router()

module.exports = router

router.get('/:id', async (req, res) => {
  const eventId = Number(req.params.id)
  try {
    const foundEvent = await db.getEventsById(eventId)
    console.log(foundEvent)
    return res.json(foundEvent)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})
