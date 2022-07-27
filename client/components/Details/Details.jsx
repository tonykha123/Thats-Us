import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
// API IMPORT:
import { getEvtById, attendEvent } from '../apiFuncs/eventApi'
import { activeUser } from '../../slices/user'
//imported components that we want in details
import Map from './Map'
import WeatherWidget from './WeatherWidget'
import { IoEyeSharp, IoMailOutline } from 'react-icons/io5'
import { BsCalendar3, BsPeople, BsHeartFill } from 'react-icons/bs'
import { GrMapLocation } from 'react-icons/gr'
import { FaInstagram, FaWalking, FaBusAlt } from 'react-icons/fa'
import { AiOutlineFacebook, AiFillCar } from 'react-icons/ai'
import { FiTwitter, FiShare } from 'react-icons/fi'
import { MdDirectionsBike } from 'react-icons/md'
import L from 'leaflet'
import ThanksForAttending from './ThanksForAttending'

const Details = () => {
  const [event, setEvent] = useState({})
  const [eventAttendees, setEventAttendees] = useState([])
  const [userIsAttending, setUserIsAttending] = useState(false)
  const { id } = useParams()
  const navigate = useNavigate()
  const activeuser = useSelector(activeUser)

  useEffect(() => {
    return getEvtById(Number(id))
      .then((response) => {
        setEvent({ ...response, user: activeuser.email })
      })
      .catch(() => {
        console.error('could not get event by id')
      })
  }, [])

  useEffect(async () => {
    try {
      setEventAttendees(await event.attendees.replace(/\s/g, '').split(','))
    } catch {
      console.error('setEventAttendees failed')
    }
  }, [event])

  useEffect(async () => {
    try {
      eventAttendees.find((attendee) => {
        return attendee == event.user
          ? setUserIsAttending(true)
          : setUserIsAttending(false)
      })
    } catch {
      console.error('useEffect shit itself')
    }
  }, [eventAttendees])

  function attendEventHandler() {
    attendEvent(id, `${event.attendees}, ${event.user}`).then((res) => {
      setTimeout(() => {
        setUserIsAttending(true)
        navigate(`/thanks/${id}`)
      }, 500)
    })
  }

  // const coords = event.coords
  const coords = [event.coordsX, event.coordsY]

  const img = event.IMG

  const largeButton = (
    <a
      className=" hidden md:block my-5 mx-auto  text-white bg-sky-500 hover:bg-sky-400 w-[200px] h-[40px] shadow-xl rounded-md p-2 md:w-[12vw] md:h-[4vh] "
      onClick={attendEventHandler}
    >
      Attend
    </a>
  )

  const smallButton = (
    <a
      className="my-5 mx-auto  text-white bg-sky-500 hover:bg-sky-400 w-[200px] h-[40px] shadow-xl rounded-md p-2  md:hidden"
      onClick={attendEventHandler}
    >
      Attend
    </a>
  )
  const greyButton = (
    <button
      onClick={attendEventHandler}
      className="my-5 mx-auto  text-white bg-gray-500 w-[200px] h-[40px] shadow-xl rounded-md p-2 md:w-[12vw] md:h-[4vh] "
    >
      Attended
    </button>
  )
  const greyButton2 = (
    <button
      onClick={attendEventHandler}
      className="my-5 mx-auto  text-white bg-gray-500 w-[200px] h-[40px] shadow-xl rounded-md p-2 md:hidden "
    >
      Attended
    </button>
  )

  const spotsRemaining = (
    <>
      <div className="flex space-x-2 items-center">
        <BsPeople size={18} />
        <p className="text-lg">Max People:</p>
      </div>
      <div className="ml-6">
        <p>
          This event is for <span className="italic">{event.max} </span>people.
          Only{' '}
          <span className="italic">{event?.max - eventAttendees?.length}</span>{' '}
          spots left!
        </p>
      </div>
    </>
  )

  const eventIsFull = (
    <>
      <div className="flex space-x-2 items-center">
        {/* <BsPeople size={18} /> */}
        {/* <p className="text-lg">Max People:</p> */}
      </div>
      <div className="ml-6">
        <p style={{ color: 'red' }}>This event is full!</p>
      </div>
    </>
  )

  return (
    // entire section//background

    <section className="w-full h-[230vh] md:bg-slate-100 md:h-[220vh] ">
      {/* main cotainer */}
      <div className="w-full h-[220vh] flex flex-col mx-auto md:w-9/12 md:bg-white md:h-full md:shadow-xl md:rounded-md md:border">
        <div className="w-full flex flex-col md:flex-row">
          <div className="h-[1/3] md:w-2/3">
            <img src={`/Images/${img} `} alt="category" />
          </div>

          <div className="border-b mt-2 md:self-center md:w-1/3 md:border-none md:text-center  md:h-auto  md:p-4">
            <h2 className="text-2xl font-semibold mx-auto  text-[#00AEFF]">
              {event.name}
            </h2>
            <p className="text-xl italic">{event.category}</p>
            <div className="flex space-x-2 items-center justify-start md:justify-center">
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

        <div className="hidden md:flex md:justify-between md:w-full h-24 items-center border">
          <div className="flex flex-row mx-4 space-x-10">
            <FiShare size={22} className="hover:text-slate-400" />
            <BsHeartFill size={22} className="hover:text-red-500" />
          </div>
          <div className="mx-4">
            {userIsAttending ? greyButton : largeButton}
          </div>
        </div>

        {/* column phone- row desktop? */}
        {/* Entire attributes container */}
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
              <div className="flex space-x-2 items-center">
                {/* <BsPeople size={18} /> */}
                {/* <p className="text-lg">Max People:</p> */}
              </div>
              <div className="">
                {/* <p className="">
                  The limit for this event is {event.max} people <br /> {event.max == eventAttendees ? 'Event is '}
                  Only {event?.max - eventAttendees?.length} spots left!
                </p> */}
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
        {/* mobile button */}
        {userIsAttending ? greyButton2 : smallButton}

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

        <div className="w-full  mt-10 mb-6">
          {coords[0] === undefined ? (
            <p>Loading map...</p>
          ) : (
            <Map coords={coords} className="rounded-md" />
          )}
        </div>
        <div className="w-full flex flex-col items-center space-y-2">
          <div className="text-xl font-semibold  text-[#00AEFF] text-center">
            {event.name}
          </div>
          <p>at</p>
          <p className="text-lg font-semibold w-9/12">{event.display_name}</p>
          <div className="flex justify-center w-full space-x-4 mt-6">
            <a
              href={`https://maps.google.com/?daddr=${event.coordsX},${event.coordsY}&dirflg=w`}
              target="_blank"
            >
              <FaWalking size={32} className="hover:text-gray-400 " />
            </a>

            <a
              href={`https://maps.google.com/?daddr=${event.coordsX},${event.coordsY}&dirflg=bike`}
              target="_blank"
            >
              <MdDirectionsBike size={30} className="hover:text-gray-400 " />
            </a>
            <a
              href={`https://maps.google.com/?daddr=${event.coordsX},${event.coordsY}&dirflg=d`}
              target="_blank"
            >
              <AiFillCar size={32} className="hover:text-gray-400 " />
            </a>
            <a
              href={`https://maps.google.com/?daddr=${event.coordsX},${event.coordsY}&dirflg=transit`}
              target="_blank"
            >
              <FaBusAlt size={30} className="hover:text-gray-400 " />
            </a>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Details
