import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import SinglePastTile from './SinglePastTile'
import { getAllEvents } from '../../apiFuncs/eventApi'

const PastEvents = () => {
  const [events, setEvents] = useState([])
  const navigate = useNavigate()

  useEffect(async () => {
    const all = await getAllEvents()
    const evts = all.filter((evt) => evt.status === 'previous')
    try {
      setEvents(evts)
    } catch {
      console.error('failed to fetch all past events')
    }
  }, [])

  function showEvent(e, id) {
    navigate(`/event/${id}`)
  }

  return (
    <>
      {events.map(({ event_id, name, date, max, description }) => (
        <SinglePastTile
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

export default PastEvents
