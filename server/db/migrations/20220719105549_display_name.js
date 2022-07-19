exports.up = function (knex) {
  return knex.schema.table('events', (table) => {
    table.string('display_name', 128)
  })
}

exports.down = function (knex) {
  return knex.schema.alterTable('events', (table) => {
    table.dropColumn('display_name')
  })
}
