exports.up = (knex) => {
  return knex.schema.createTable('events', (table) => {
    table.increments('event_id')
    table.string('name')
    table.string('status')
    table.string('date')
    table.string('time')
    table.integer('max')
    table.string('IMG')
    table.string('description')
<<<<<<< HEAD:server/db/migrations/20220713221859_events.js
    table.string('attendees')
=======
    table.string('category')
    table.integer('coordsX')
    table.integer('coordsY')
>>>>>>> origin:server/db/migrations/20220719095950_events.js
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('events')
}
