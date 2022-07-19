exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      auth0_id: 'auth_user123',
      email: 'banana@example.com',
      username: 'banana',
    },
    {
      auth0_id: 'auth_user456',
      email: 'watermalone@example.com',
      username: 'watermelone',
    },
    {
      auth0_id: 'auth_user798',
      email: 'churchurchur@example.com',
      username: 'churchur',
    },
  ])
}
