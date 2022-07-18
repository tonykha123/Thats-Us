import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
// COMPONENT IMPORTS:
import LiveEvents from './LiveEvents/LiveEvents'
import PastEvents from './PastEvents/PastEvents'
import UpcomingEvents from './UpcomingEvents/UpcomingEvents'
import AddEvent from './AddEvent/AddEvent'
//Modal imports
import Rodal from 'rodal'
import 'rodal/lib/rodal.css'
//Modal style
const style = {
  backgroundColor: 'white',
  width: '90vw',
  height: '95vh',
  display: 'flex',
  flexDirection: 'column',
}

const isAuthenticated = () => {
  const { isAuthenticated } = useAuth0()
  return isAuthenticated
}

const Events = () => {
  // modal
  const [visible, setVisible] = useState(false)
  const [showEvents, setShowEvents] = useState(0)
  const { loginWithRedirect } = useAuth0()

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

  const permission = isAuthenticated()

  function showAddEvt() {
    return permission ? setVisible(true) : loginWithRedirect()
  }

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
      <div className=" w-full flex flex-col items-center sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:flex-nowrap lg:overflow-x-scroll lg:whitespace-nowrap lg:w-full lg:h-full scroll-smooth">
        {events[showEvents]}
      </div>

      {/* add event button */}
      <button
        className="my-10 mx-auto font-semibold text-white bg-gray-200 hover:bg-gray-100 w-[120px] h-[60px] shadow-xl rounded-md p-2 lg:w-[12vw] lg:h-[4vw]"
        onClick={showAddEvt}
      >
        Add Event
      </button>
      <Rodal
        enterAnimation="zoom"
        leaveAnimation="zoom"
        closeOnEsc
        visible={visible}
        onClose={() => setVisible(false)}
        customStyles={style}
      >
        <AddEvent setVisible={setVisible} />
      </Rodal>
    </section>
  )
}

export default Events
