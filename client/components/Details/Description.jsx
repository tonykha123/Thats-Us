import React from 'react'
import { GrMapLocation } from 'react-icons/gr'
import { BsCalendar3 } from 'react-icons/bs'

const Description = ({ event, eventAttendees, spotsRemaining }) => {
  return (
    <div className="md:w-full md:flex md:flex-row-reverse md:h-80 md:pb-15 pt-9">
      <div className="flex flex-col mb-10 space-y-2 md:w-2/5 md:space-y-5">
        <div className="flex flex-col ml-4 mx-6">
          <div className="flex space-x-2 items-center">
            <BsCalendar3 size={18} />
            <p className="text-lg">Date and Time:</p>
          </div>
          <div className="ml-6">
            <p className="">{event.date}</p>
            <p>{event.time} NZST</p>
          </div>
        </div>
        <div className="flex flex-col ml-4 mx-6">
          <div className="flex space-x-2 items-center">
            <GrMapLocation size={18} />
            <p className="text-lg">Location : {event.location}</p>
          </div>
          <div className="ml-6">
            <p className="">{event.display_name}</p>
          </div>
        </div>

        <div className="flex flex-col ml-4 mx-6">
          <div className="flex space-x-2 items-center"></div>
          <div className="">
            {event?.max <= eventAttendees?.length
              ? eventIsFull
              : spotsRemaining}
          </div>
        </div>
      </div>

      {/* about container */}

      <div className="flex flex-col md:w-3/5">
        <p className="text-lg font-semibold ml-4 md:ml-12  text-[#00AEFF]">
          About This Event
        </p>
        <p className="w-10/12 self-center text-left md:w-3/4 md:mr-16">
          {event.description + ' '}
        </p>
      </div>
    </div>
  )
}

export default Description
