import React from 'react'

//imported components that we want in details
import Map from './Map'
import AttendButton from './AttendButton'
import EventDetails from './EventDetails'

const Details = () => {
  const tempStyle = {
    width: '100%',
    height: '80vh',
  }
  return (
    <div style={tempStyle}>
      <div>
        <h2>title</h2>
        <h3>sub title</h3>
        <p>date</p>
        <p>attendees</p>
        <p>description</p>
      </div>
      <div>
        <Map />
      </div>
    </div>
  )
}

export default Details
/* <aside>
      
    </aside>
    <section>
      <AttendButton />
    </section>
    <section>
      <SelectedEvent />
    </section> */
