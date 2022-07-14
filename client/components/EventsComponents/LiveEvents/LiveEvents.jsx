import React, { useState, useEffect } from 'react'
import SingleLiveTile from './SingleLiveTile'
import { getAllEvents } from '../../apiFuncs/eventApi'

const LiveEvents = () => {
  const [events, setEvents] = useState([])

  useEffect(async () => {
    const all = await getAllEvents()
    const evts = all.filter((evt) => evt.status === 'current')
    try {
      setEvents(evts)
    } catch {
      console.error('failed to fetch all live events')
    }
  }, [])

  return (
    <div>
      {events.map(({ event_id, name, date, max, description }) => (
        <SingleLiveTile
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

export default LiveEvents
