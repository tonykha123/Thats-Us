const path = require('path')
const express = require('express')

const eventsRoutes = require('./routes/events')
const users = require('./routes/users')
// const api = require('./routes/api')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/events', eventsRoutes)
server.use('/api/v1/users', users)
// server.use('/api/v1/users', api)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
