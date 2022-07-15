exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.string('Auth0_id')
    table.string('email')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
