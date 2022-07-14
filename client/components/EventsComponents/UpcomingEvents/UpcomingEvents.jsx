import React, { useState, useEffect } from 'react'
import { SingleUpcomingTile } from './SingleUpcomingTile'
import { getAllEvents } from '../../apiFuncs/eventApi'

const UpcomingEvents = () => {
  const [events, setEvents] = useState([])

  useEffect(async () => {
    const all = await getAllEvents()
    const evts = all.filter((evt) => evt.status === 'upcoming')
    try {
      setEvents(evts)
    } catch {
      console.error('failed to fetch all upcoming events')
    }
  }, [])

  return (
    <>
      {events.map(({ event_id, name, date, max, description }) => (
        <SingleUpcomingTile
          key={event_id}
          name={name}
          date={date}
          max={max}
          description={description}
        />
      ))}
    </>
  )
}

export default UpcomingEvents
