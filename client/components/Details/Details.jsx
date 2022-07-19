import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// API IMPORT:
import { getEvtById } from '../apiFuncs/eventApi'

//imported components that we want in details
import Map from './Map'
import AttendButton from './AttendButton'
import EventDetails from './EventDetails'
import Events from '../EventsComponents/Events'

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

  return (
    // entire section

    <section className="w-full h-[120vh]">
      <div className="w-full h-[70vh] flex flex-col bg-slate-200 items-center space-y-6 md:flex-row md:items-start">
        <div className="self-start md:w-5/12">
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
        </div>

        {/* map div */}

        <div className="w-10/12 h-10/12 md:w-7/12 md:h-full ">
          <Map pin={coords} className="rounded-md" />
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <AttendButton />
      </div>
    </section>
  )
}

export default Details
