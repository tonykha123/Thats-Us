const path = require('path')
const express = require('express')

<<<<<<< HEAD
const eventsRoutes = require('./routes/events')
const userRoutes = require('./routes/users')
=======
>>>>>>> 48243bbb104422afdb2629ecc407138eafe2caf9
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

<<<<<<< HEAD
server.use('/api/v1/events', eventsRoutes)
server.use('/api/v1/users', userRoutes)

=======
>>>>>>> 48243bbb104422afdb2629ecc407138eafe2caf9
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
