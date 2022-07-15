const express = require('express')
const db = require('../db/events')

const router = express.Router()

module.exports = router

router.post('/', async (req, res) => {
  try {
    const newEvent = req.body
    await db.addEvent(newEvent)
    res.sendStatus(201)
    return null
  } catch (error) {
    res.status(500).send('DATABASE ERROR: ' + error.message)
  }
})
