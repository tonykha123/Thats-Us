import React, { useState } from 'react'
// COMPONENT IMPORTS:
import LiveEvents from './LiveEvents/LiveEvents'
import PastEvents from './PastEvents/PastEvents'
import UpcomingEvents from './UpcomingEvents/UpcomingEvents'

const Events = () => {
  const [showEvents, setShowEvents] = useState(0)

  const eventBtnsMarkup = (
    <div className="w-full h-auto mx-auto flex justify-center">
      <span className="mx-2" onClick={() => setShowEvents(0)}>
        Live Events
      </span>
      <span className="mx-2" onClick={() => setShowEvents(1)}>
        Upcoming Events
      </span>
      <span className="mx-2" onClick={() => setShowEvents(2)}>
        Past Events
      </span>
    </div>
  )

  const events = [
    <LiveEvents key="0" />,
    <UpcomingEvents key="1" />,
    <PastEvents key="2" />,
  ]

  return (
    <section className="flex flex-col items-center">
      <h1 className=" mx-auto p-4 mb-5 font-bold text-4xl">Events</h1>
      {eventBtnsMarkup}
      {/* entire container for eventsv */}
      <div className="flex flex-col items-center">{events[showEvents]}</div>
    </section>
  )
}

export default Events
