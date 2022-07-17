const connection = require('./connection')

module.exports = { addUser, getAllUsers }

function addUser(newUser, db = connection) {
  const { Auth0_id, email, username } = newUser
  return db('users').insert({
    Auth0_id,
    email,
    username
  })
}

function getAllUsers(db = connection) {
  return db('users').select()
}
