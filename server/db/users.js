const connection = require('./connection')

module.exports = { addUser }

function addUser(newUser, db = connection) {
  const { Auth0_id, email } = newUser
  return db('users').insert({
    Auth0_id,
    email,
  })
}
