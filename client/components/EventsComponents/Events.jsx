import React, { useState } from 'react'
// COMPONENT IMPORTS:
import LiveEvents from './LiveEvents/LiveEvents'
import PastEvents from './PastEvents/PastEvents'
import UpcomingEvents from './UpcomingEvents/UpcomingEvents'

const Events = () => {
  const [showEvents, setShowEvents] = useState(0)

  const eventBtnsMarkup = (
    <div className="w-full h-auto flex flex-row justify-center sm:justify-start">
      <span className="mr-2" onClick={() => setShowEvents(0)}>
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
    // events container including h1
    <section className=" w-11/12 h-auto flex flex-col items-center sm:px-10 sm:pt-6">
      <div className="self-center sm:self-start">
        <h1 className="font-bold text-4xl self-center sm:self-start ">
          Events
        </h1>
      </div>
      {eventBtnsMarkup}
      {/* entire container for eventsv */}
      <div className=" w-full flex flex-col items-center gap-1 sm:grid lg:justify-between sm:grid-cols-2 sm:justify-items-center lg:grid-cols-7  lg:overflow-y-auto">
        {events[showEvents]}
      </div>
    </section>
  )
}

export default Events
