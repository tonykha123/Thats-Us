import React from 'react'
import { FaHandshake } from 'react-icons/fa'
import { BsFillCalendarDayFill } from 'react-icons/bs'
import { IoIosPeople } from 'react-icons/io'

const MailBanner = () => {
  return (
    <section className="w-full h-[100vh]  lg:h-[65vh] flex flex-col items-center bg-white">
      <div className="w-full flex flex-col items-center my-4 lg:my-10">
        <h1 className="text-3xl font-bold mx-auto mb-2">How it works</h1>
        <p className="text-center mx-auto w-9/12">
          Get to know new people who share your interests through online and
          in-person events.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full flex flex-col items-center my-4">
          <FaHandshake size={65} />
          <h2 className="text-2xl font-bold mx-auto mb-2">Find an event</h2>
          <p className="text-center mx-auto w-9/12">
            Looking to explore what's going on in your community? Checkout your
            local events and connect with friendly members! There's always
            something fun going on!
          </p>
        </div>
        <div className="w-full flex flex-col items-center my-4">
          <BsFillCalendarDayFill size={55} className="mb-2" />
          <h1 className="text-2xl font-bold mx-auto my-2">Create an event</h1>
          <p className="text-center mx-auto w-9/12">
            Make an event and have it be visible to other members! It's easy as!
          </p>
        </div>
        <div className="w-full flex flex-col items-center my-4">
          <IoIosPeople size={65} />
          <h1 className="text-2xl font-bold mx-auto mb-2">
            Look at upcoming events
          </h1>
          <p className="text-center mx-auto w-9/12">
            You can check out whats going on in your local community by looking
            at the upcoming events tab!
          </p>
        </div>
      </div>
    </section>
  )
}

export default MailBanner
