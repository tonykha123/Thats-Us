import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SingleUpcomingTile } from './SingleUpcomingTile'
import { getAllEvents } from '../../apiFuncs/eventApi'

const UpcomingEvents = () => {
  const [events, setEvents] = useState([])
  const navigate = useNavigate()

  useEffect(async () => {
    const all = await getAllEvents()
    const evts = all.filter((evt) => evt.status === 'upcoming')
    try {
      setEvents(evts)
    } catch {
      console.error('failed to fetch all upcoming events')
    }
  }, [])

  function showEvent(e, id) {
    navigate(`/event/${id}`)
  }

  return (
    <>
      {events.map(({ event_id, name, date, max, description }) => (
        <SingleUpcomingTile
          key={event_id}
          name={name}
          date={date}
          max={max}
          description={description}
          showEvent={(e) => showEvent(e, event_id)}
        />
      ))}
    </>
  )
}

export default UpcomingEvents
