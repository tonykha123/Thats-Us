import React, { useState, useEffect } from 'react'
import SinglePastTile from './SinglePastTile'
import { getAllEvents } from '../../apiFuncs/eventApi'

const PastEvents = () => {
  const [events, setEvents] = useState([])

  useEffect(async () => {
    const all = await getAllEvents()
    const evts = all.filter((evt) => evt.status === 'previous')
    try {
      setEvents(evts)
    } catch {
      console.error('failed to fetch all past events')
    }
  }, [])

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
