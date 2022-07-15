const path = require('path')
const express = require('express')

const eventsRoutes = require('./routes/events')
const eventDetails = require('./routes/eventDetails')
const userRoutes = require('./routes/users')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/events', eventsRoutes)
server.use('/api/v1/details', eventDetails)
server.use('/api/v1/users', userRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
