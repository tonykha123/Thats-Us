import React, { useState } from 'react'
// COMPONENT IMPORTS:
import LiveEvents from './LiveEvents/LiveEvents'
import PastEvents from './PastEvents/PastEvents'
import UpcomingEvents from './UpcomingEvents/UpcomingEvents'

const Events = () => {
  const [showEvents, setShowEvents] = useState(0)

  const eventBtnsMarkup = (
    <div>
    <span onClick={() => setShowEvents(0)} style={{ margin: '2em' }}>
      Live Events
    </span>
    <span onClick={() => setShowEvents(1)} style={{ margin: '2em' }}>
      Upcoming Events
    </span>
    <span onClick={() => setShowEvents(2)} style={{ margin: '2em' }}>
      Past Events
    </span>
  </div>
  )

  const events = [
    <LiveEvents key='0'/>, 
    <UpcomingEvents key='1' />,
    <PastEvents key='2' />,
  ]

  return (
    <section style={{margin: '2em'}}>
      Events
    {eventBtnsMarkup}
    {events[showEvents]}
    </section>
  )
}

export default Events
