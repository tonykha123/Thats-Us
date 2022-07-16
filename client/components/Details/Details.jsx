import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

// API IMPORT:
import { getEvtById } from '../apiFuncs/eventApi'

//imported components that we want in details
import Map from './Map'
import AttendButton from './AttendButton'
import EventDetails from './EventDetails'

const Details = () => {
  const [event, setEvent] = useState({})
  const {id} = useParams()

  useEffect(async () => {
    const evt = await getEvtById(id)
    try {
      setEvent(evt)
    } catch {
      console.error('elo')
    }
  },[])
  
  const tempStyle = {
    width: '100%',
    height: '80vh',
  }

  return (
    <div style={tempStyle}>
      <div>
        <h2>{event.name}</h2>
        <p>{event.date}</p>
        <p>{event.time}</p>
        <p>{event.description}</p>
      
      </div>
      <div>
        <Map />
      </div>
    </div>
  )
}

export default Details
