import React from 'react'
import LiveEvents from './LiveEvents/LiveEvents'
import PastEvents from './PastEvents/PastEvents'
import UpcomingEvents from './UpcomingEvents/UpcomingEvents'


const Events = () => {
  return (
    <section>Events:
      {/* <UpcomingEvents /> */}
      <PastEvents />
      {/* <LiveEvents /> */}
    </section>
  )
}

export default Events