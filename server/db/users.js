const connection = require('./connection')

module.exports = { addUser, getAllUsers }

function addUser(newUser, db = connection) {
  const { Auth0_id, email } = newUser
  return db('users').insert({
    Auth0_id,
    email,
  })
}

function getAllUsers(db = connection) {
  return db('users').select()
}
