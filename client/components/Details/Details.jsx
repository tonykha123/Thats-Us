import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// API IMPORT:
import { getEvtById } from '../apiFuncs/eventApi'

//imported components that we want in details
import Map from './Map'

import AttendButton from './AttendButton'
import EventDetails from './EventDetails'
import Events from '../EventsComponents/Events'
import { IoEyeSharp, IoMailOutline } from 'react-icons/io5'
import { BsCalendar3, BsPeople } from 'react-icons/bs'
import { GrMapLocation } from 'react-icons/gr'
import { FaInstagram } from 'react-icons/fa'
import { AiOutlineFacebook } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'

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

    <section className="w-full h-[150vh] md:bg-slate-100">
      {/* main cotainer */}
      <div className="w-full h-[70vh] flex flex-col mx-auto md:w-9/12 md:bg-white md:h-full md:shadow-xl md:rounded-md md:border">
        <div className="w-full flex flex-col md:flex-row">
          <div className="h-[1/3] md:w-2/3">
            <img src={`/Images/${img}`} />
          </div>

          <div className="border-b mt-2 md:self-center md:w-1/3 md:border-none md:text-center md:bg-slate-200 md:h-auto">
            <h2 className="text-2xl font-semibold mx-auto">{event.name}</h2>
            <p className="text-xl italic">Sports</p>
            <div className="flex space-x-2 items-center justify-center">
              <p className="italic">
                {Math.floor(Math.random() * 1000) + 100} Views
              </p>
              <div>
                <IoEyeSharp size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* image and title ends */}

        <div>{/* share button and attend - hidden show on m */}</div>

        {/* column phone- row desktop? */}
        {/* Entire attributes container */}
        <div className="flex flex-col mb-10 space-y-2">
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

        {/* about container */}

        <div className="flex flex-col">
          <p className="text-lg font-semibold ml-4">About This Event</p>
          <p className="w-10/12 self-center text-left">
            {event.description}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
            quod ratione, dignissimos velit consequatur tenetur dolore, autem
            obcaecati asperiores magnam sequi? Provident, illo assumenda nihil
            repellat vero cumque animi numquam?
          </p>
        </div>

        <AttendButton className="md:hidden" />

        <div className="flex flex-col ml-4">
          <p className="text-md font-semibold">Share With Friends</p>
          <div className="flex justify-start w-full gap-3">
            <a href="https://www.facebook.com/">
              <AiOutlineFacebook size={32} className="hover:text-gray-400" />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram size={30} className="hover:text-gray-400" />
            </a>
            <a href="https://www.twitter.com/">
              <FiTwitter size={32} className="hover:text-gray-400" />
            </a>
            <a href="https://gmail.com">
              <IoMailOutline size={30} className="hover:text-gray-400" />
            </a>
          </div>
        </div>

        <div className="w-full  mt-10">
          <Map pin={coords} className="rounded-md" />
        </div>

        {/* <AttendButton />  */}
      </div>
    </section>
  )
}

export default Details
