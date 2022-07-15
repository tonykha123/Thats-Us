const express = require('express')
// TODO: import checkJwt
const db = require('../db/users')

const router = express.Router()

module.exports = router

router.post('/', async (req, res) => {
  const data = req.body
  try {
    const newUser = await db.addUser(data)
    res.json(newUser)
    console.log(newUser)
    console.log(data)
  } catch (err) {
    console.error(err)
    res.status(500).send(err.message)
  }
})
