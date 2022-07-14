import React, { useState } from 'react'

// COMPONENT IMPORTS:
import LiveEvents from './LiveEvents/LiveEvents'
import PastEvents from './PastEvents/PastEvents'
import UpcomingEvents from './UpcomingEvents/UpcomingEvents'

// API IMPORTS:


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
    <LiveEvents key="1"/>, 
    <UpcomingEvents key="2" />,
    <PastEvents key="3" />,
  ]


  return (
    <section>
      Events:
    {eventBtnsMarkup}
    {events[showEvents]}
    </section>
  )
}

export default Events
