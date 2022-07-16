import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// TODO: import a proper isAuthenticated function
import { useAuth0 } from '@auth0/auth0-react' //todo done <-

import { SingleUpcomingTile } from './SingleUpcomingTile'
import { getAllEvents } from '../../apiFuncs/eventApi'

const isAuthenticated = () => {
  const { isAuthenticated } = useAuth0()
  return isAuthenticated
}

const UpcomingEvents = () => {
  const [events, setEvents] = useState([])
  const {loginWithRedirect} = useAuth0()
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

  const permission = isAuthenticated()

  function showEvent(e, id) {
    return permission ? navigate(`/event/${id}`) : loginWithRedirect()
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
