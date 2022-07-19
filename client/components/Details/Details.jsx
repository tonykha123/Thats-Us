import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// API IMPORT:
import { getEvtById, attendEvent } from '../apiFuncs/eventApi'
import { activeUser } from '../../slices/user'

//imported components that we want in details
import Map from './Map'
import AttendButton from './AttendButton'

const Details = () => {
  const [event, setEvent] = useState({})
  const [eventAttendees, setEventAttendees] = useState([])
  const [userIsAttending, setUserIsAttending] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const activeuser = useSelector(activeUser)

  useEffect(async () => {
    const evt = await getEvtById(Number(id))
    try {
      setEvent({ ...evt, user: activeuser.email })
    } catch {
      console.error('setEvent failed')

    }
  }, [activeuser])
  console.log(event.attendees, 'go')

  useEffect(async () => {
    try {
      setEventAttendees(event.attendees.replace(/\s/g, "").split(','))
    }
    catch {
      console.error('setEventAttendees failed')
    }
  },[event])
  console.log(event.user, 'time')

  useEffect(async () => {
    try {
      eventAttendees.find(attendee => {
        return attendee === event.user ? setUserIsAttending(true) : setUserIsAttending(false)
      })
    }
    catch {
      console.log('useEffect shit itself')
    }
  },[eventAttendees])
  console.log(userIsAttending, 'attending?')

  function attendEventHandler() {
      attendEvent(id, `${event.attendees}, ${event.user}`)
      navigate(`/event/${id}`)
  }

  const coords = event.coords

  return (
    <section className="w-full h-[90vh] flex flex-col bg-slate-300 items-center">
      <div className="my-5">
        <h2 className="text-2xl font-semibold">{event.name}</h2>
        <p>{event.date}</p>
        <p>{event.time}</p>
      </div>
      <div className="w-full h-10/12 ">
        <Map pin={coords} />
      </div>
      <div>{event.description}</div>
      {!userIsAttending && <AttendButton attend={attendEventHandler} />}
      {/* <AttendButton attend={attendEventHandler} /> */}
    </section>
  )
}

export default Details
