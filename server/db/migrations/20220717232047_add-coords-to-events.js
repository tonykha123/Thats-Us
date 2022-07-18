exports.up = function (knex) {
  return knex.schema.table('events', (table) => {
    table.specificType('coords', 'INT[]')
  })
}

exports.down = function (knex) {
  return knex.schema.dropColumn('events')
}
