/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { Auth0_id: 'auth_user123', email: 'banana@example.com' },
    { Auth0_id: 'auth_user456', email: 'watermalone@example.com' },
    { Auth0_id: 'auth_user798', email: 'churchurchur@example.com' },
  ])
}
