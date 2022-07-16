import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SingleLiveTile from './SingleLiveTile'
import { getAllEvents } from '../../apiFuncs/eventApi'

const LiveEvents = () => {
  const [events, setEvents] = useState([])
  const navigate = useNavigate()

  useEffect(async () => {
    const all = await getAllEvents()
    const evts = all.filter((evt) => evt.status === 'current')
    try {
      setEvents(evts)
    } catch {
      console.error('failed to fetch all live events')
    }
  }, [])

  function showEvent(e, id) {
    navigate(`/event/${id}`)
  }

  return (
    <div>
      {events.map(({ event_id, name, date, max, description }) => (
        <SingleLiveTile
          key={event_id}
          name={name}
          date={date}
          max={max}
          description={description}
          showEvent={(e) => showEvent(e, event_id)}
          style={{backgroundColor: 'blue'}}
        />
      ))}
    </div>
  )
}

export default LiveEvents
