/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('events').del()
  await knex('events').insert([
    {
      event_id: 1,
      name: 'Tag',
      status: 'current',
      date: '14/7/2021',
      time: 'arvo',
      max: '6',
      IMG: ' ',
      description: 'tag at vic park, need 6 to make a game and run a few subs',
    },
    {
      event_id: 2,
      name: 'Basketball',
      status: 'current',
      date: '14/7/2021',
      time: 'morning',
      max: '3',
      IMG: ' ',
      description: 'ball at Grey Lynn, need 3 to run against',
    },
    {
      event_id: 3,
      name: 'Touch',
      status: 'current',
      date: '14/7/2021',
      time: 'morning',
      max: '4',
      IMG: ' ',
      description: 'touch at the park need 4 ',
    },
    {
      event_id: 4,
      name: ' Laser Tag',
      status: 'previous',
      date: '12/7/2021',
      time: 'Arvo',
      max: '6',
      IMG: ' ',
      description:
        'Laser tag at vic park, need 6 to make a game and run a few subs',
    },
    {
      event_id: 5,
      name: 'Basketball',
      status: 'previous',
      date: '12/7/2021',
      time: 'night',
      max: '3',
      IMG: ' ',
      description: 'ball at Grey Lynn, need 3 to run against',
    },
    {
      event_id: 6,
      name: 'Touch',
      status: 'previous',
      date: '9/7/2021',
      time: 'arvo',
      max: '4',
      IMG: ' ',
      description: 'touch at the park need 4 ',
    },
    {
      event_id: 7,
      name: 'Bull Rush',
      status: 'upcoming',
      date: '20/7/2021',
      time: 'morning',
      max: '6',
      IMG: ' ',
      description: 'Bull Rush at vic park, need 6 to make a game',
    },
    {
      event_id: 8,
      name: 'Basketball',
      status: 'upcoming',
      date: '27/7/2021',
      time: 'arvo',
      max: '3',
      IMG: ' ',
      description: 'ball at Grey Lynn, need 3 to run against',
    },
    {
      event_id: 9,
      name: 'Touch',
      status: 'upcoming',
      date: '30/7/2021',
      time: 'arvo',
      max: '4',
      IMG: ' ',
      description: 'touch at the park need 4 ',
    },
  ])
}
