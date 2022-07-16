import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// TODO: import a proper isAuthenticated function
import { useAuth0 } from '@auth0/auth0-react' //todo done <-

import SingleLiveTile from './SingleLiveTile'
import { getAllEvents } from '../../apiFuncs/eventApi'

const isAuthenticated = () => {
  const { isAuthenticated } = useAuth0()
  return isAuthenticated
}

const LiveEvents = () => {
  const [events, setEvents] = useState([])
  const {loginWithRedirect} = useAuth0()
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

  const permission = isAuthenticated()

  function showEvent(e, id) {
    return permission ? navigate(`/event/${id}`) : loginWithRedirect()
  }

  return (
    // entire container for events
    <>
      {events.map(({ event_id, name, date, max, description }) => (
        <SingleLiveTile
          key={event_id}
          name={name}
          date={date}
          max={max}
          description={description}
          showEvent={(e) => showEvent(e, event_id)}
          style={{ backgroundColor: 'blue' }}
        />
      ))}
    </>
  )
}

export default LiveEvents
