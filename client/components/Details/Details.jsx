import React from 'react'
import { useParams } from 'react-router-dom'

//imported components that we want in details
import Map from './Map'
import AttendButton from './AttendButton'
import EventDetails from './EventDetails'
import Events from '../EventsComponents/Events'


const Details = () => {
  const tempStyle = {
    width: '100%',
    height: '80vh',
  }
  return (
    <div style={tempStyle}>
      <div>
        <h2>`${events.name}`</h2>
        <h3>sub title</h3>
        <p>date</p>
        <p>attendees</p>
        <p>description</p>
      </div>
      <div >
        <Map />
        <AttendButton />
      </div>
    </div>
  )
}

export default Details
