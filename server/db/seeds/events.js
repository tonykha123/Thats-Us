/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('events').del()
  await knex('events').insert([
    {
     
      name: 'Tag',
      status: 'current',
      date: '14/7/2021',
      time: 'arvo',
      max: '6',
      IMG: ' ',
      description: 'tag at vic park, need 6 to make a game and run a few subs',
    },
    {
      
      name: 'Basketball',
      status: 'current',
      date: '14/7/2021',
      time: 'morning',
      max: '3',
      IMG: ' ',
      description: 'ball at Grey Lynn, need 3 to run against',
    },
    {
   
      name: 'Basketball',
      status: 'current',
      date: '14/7/2021',
      time: 'morning',
      max: '3',
      IMG: ' ',
      description: 'ball at Grey Lynn, need 3 to run against',
    },
    {
     
      name: 'Touch',
      status: 'current',
      date: '14/7/2021',
      time: 'morning',
      max: '4',
      IMG: ' ',
      description: 'touch at the park need 4 ',
    },
    {
     
      name: 'Basketball',
      status: 'current',
      date: '14/7/2021',
      time: 'morning',
      max: '3',
      IMG: ' ',
      description: 'ball at Grey Lynn, need 3 to run against',
    },
    {
      
      name: 'Basketball',
      status: 'current',
      date: '14/7/2021',
      time: 'morning',
      max: '3',
      IMG: ' ',
      description: 'ball at Grey Lynn, need 3 to run against',
    },
    {
     
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
      name: 'Basketball',
      status: 'previous',
      date: '12/7/2021',
      time: 'night',
      max: '3',
      IMG: ' ',
      description: 'ball at Grey Lynn, need 3 to run against',
    },
    {
      name: 'Touch',
      status: 'previous',
      date: '9/7/2021',
      time: 'arvo',
      max: '4',
      IMG: ' ',
      description: 'touch at the park need 4 ',
    },
    {
      name: 'Bull Rush',
      status: 'upcoming',
      date: '20/7/2021',
      time: 'morning',
      max: '6',
      IMG: ' ',
      description: 'Bull Rush at vic park, need 6 to make a game',
    },
    {
      name: 'Basketball',
      status: 'upcoming',
      date: '27/7/2021',
      time: 'arvo',
      max: '3',
      IMG: ' ',
      description: 'ball at Grey Lynn, need 3 to run against',
    },
    {
      name: 'Touch',
      status: 'upcoming',
      date: '30/7/2021',
      time: 'arvo',
      max: '4',
      IMG: ' ',
      description: 'touch at the park need 4 ',
    },
    {
      name: 'Crew',
      status: 'upcoming',
      date: '30/7/2021',
      time: 'arvo',
      max: '4',
      IMG: ' ',
      description: 'Crew at Devacademy need 4 ',
    },
    {
      name: 'Crew',
      status: 'upcoming',
      date: '30/7/2021',
      time: 'arvo',
      max: '4',
      IMG: ' ',
      description: 'Crew at Devacademy need 4 ',
    },
    {
      name: 'Crew',
      status: 'upcoming',
      date: '30/7/2021',
      time: 'arvo',
      max: '4',
      IMG: ' ',
      description: 'Crew at Devacademy need 4 ',
    },
    {
      name: 'Crew',
      status: 'upcoming',
      date: '30/7/2021',
      time: 'arvo',
      max: '4',
      IMG: ' ',
      description: 'Crew at Devacademy need 4 ',
    },
  ])
}
