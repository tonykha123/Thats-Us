import React, { useState, useEffect } from 'react'
import SinglePastTile from './SinglePastTile'
import { getAllEvents } from '../../apiFuncs/eventApi'

const PastEvents = () => {
  const [events, setEvents] = useState([])

  useEffect(async () => {
    const all = await getAllEvents()
    const evts = all.filter((evt) => evt.status == 'previous')
    try {
      setEvents(evts)
    } catch {
      console.error('failed to fetch all past events')
    }
  }, [])

  const testData = [
    {
      event_id: 1,
      name: 'Tag',
      status: 'Past',
      date: '13/7/22',
      max: 12,
      description:
        'Tup for chill game of tag. Bring your own boots - water & food provided',
    },
    {
      event_id: 2,
      name: '3v3 B-ball',
      status: 'Up-coming',
      date: '13/7/22',
      max: 6,
      description: 'Keen for 3v3 game lets go',
    },
    {
      event_id: 3,
      name: 'Volley ball',
      status: 'Up-coming',
      date: '13/7/22',
      max: 12,
      description:
        'Looking for another team to join our tournament, beaches, balls & bikinis',
    },
  ]

  return (
    <div>
      {events.map(({ event_id, name, date, max, description }) => (
        <SinglePastTile
          key={event_id}
          name={name}
          date={date}
          max={max}
          description={description}
        />
      ))}
    </div>
  )
}

export default PastEvents
