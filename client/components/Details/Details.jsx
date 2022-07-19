import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// API IMPORT:
import { getEvtById } from '../apiFuncs/eventApi'

//imported components that we want in details
import Map from './Map'

import AttendButton from './AttendButton'
import EventDetails from './EventDetails'
import Events from '../EventsComponents/Events'
import { IoEyeSharp } from 'react-icons/io5'
import { BsCalendar3, BsPeople } from 'react-icons/bs'
import { GrMapLocation } from 'react-icons/gr'

const Details = () => {
  const [event, setEvent] = useState({})
  const { id } = useParams()
  const img = event.IMG
  const coords = event.coords

  useEffect(async () => {
    const evt = await getEvtById(id)
    try {
      setEvent(evt)
    } catch {
      console.error('elo')
    }
  }, [])
  console.log(event)

  return (
    // entire section//background

    <section className="w-full h-[120vh]">
      {/* main cotainer */}
      <div className="w-full h-[70vh] flex flex-col mx-auto">
        <div className="w-full flex flex-col">
          {/* image and title and date goes here */}
          <div className="h-[1/3]">
            <img src={`/Images/${img}`} />
          </div>

          <div className="border-b mt-2">
            <h2 className="text-2xl font-semibold ">{event.name}</h2>
            <p className="text-xl italic">Sports</p>
            <div className="flex space-x-2 items-center">
              <p className="italic">
                {Math.floor(Math.random() * 100000) + 100} views
              </p>
              <IoEyeSharp size={18} />
            </div>
          </div>
        </div>

        {/* image and title ends */}

        <div>{/* share button and attend - hidden show on m */}</div>

        {/* column phone- row desktop? */}
        {/* Entire description container */}
        <div className="flex flex-col">
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
              <p className="text-lg">Location:</p>
            </div>
            <div className="ml-6">
              <p className="">12 Morgan Street, Auckland ,2025</p>
            </div>
          </div>

          <div className="flex flex-col ml-4 mx-6">
            <div className="flex space-x-2 items-center">
              <BsPeople size={18} />
              <p className="text-lg">Max People:</p>
            </div>
            <div className="ml-6">
              <p className="">The limit for this event is {event.max} people</p>
            </div>
          </div>
        </div>

        <div>
          {/* location goes here * max people?/}</div>
        </div>
        <div>{/* share with friends */}
        </div>
        {/* map div */}

        <div className="w-full h-10/12 md:w-7/12 md:h-full ">
          <Map pin={coords} className="rounded-md" />
        </div>

        {/* <div className="self-start md:w-5/12">
          <div className="mt-4 space-y-2 mx-4">
            <h2 className="text-3xl font-semibold ">{event.name}</h2>
            <p>{event.date}</p>
            <p>{event.time}</p>
          </div>
          <div className="mx-4">
            <p className="text-xl font-semibold">Details</p>
            <p>{event.description}</p>
            <p>Category:</p>
            <p>{event.category}</p>
          </div>
          <div>
            <img src={`/Images/${img}`} />
          </div>
        </div>  */}

        {/* /* <div className="flex flex-row justify-center">
        <AttendButton /> */}
      </div>
    </section>
  )
}

export default Details
