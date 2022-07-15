const path = require('path')
const express = require('express')

const eventsRoutes = require('./routes/events')
const eventDetails = require('./routes/eventDetails')
const addEvent = require('./routes/addEvent')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/events', eventsRoutes)
server.use('/api/v1/details', eventDetails)
server.use('/api/v1/add', addEvent)


server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
