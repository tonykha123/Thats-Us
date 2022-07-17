const connection = require('./connection')

module.exports = { addUser, getAllUsers }

function addUser(newUser, db = connection) {
  const { auth0Id, email, username } = newUser
  return db('users').insert({
    auth0_Id: auth0Id,
    email,
    username
  })
}

function getAllUsers(db = connection) {
  return db('users').select()
}
