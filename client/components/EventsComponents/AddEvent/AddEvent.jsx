import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchEvent } from '../../../slices/AddEvent'
import { addEvent } from '../../apiFuncs/eventApi'

import Map from './Map'
import SearchBox from './SearchBox'

function AddEvent({ setVisible }) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [max, setMax] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const dispatch = useDispatch()
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectPosition, setSelectPosition] = useState(null)

  // const eventData = useSelector((state) => state.events)
  // const eventslah =  eventData.find((data) => data.event_id === Number(id))

  const token = useSelector((state) => state.user.token)

  function handleName(event) {
    setName(event.target.value)
  }

  function handleDate(event) {
    setDate(event.target.value)
  }

  function handleTime(event) {
    setTime(event.target.value)
  }

  function handleMax(event) {
    setMax(event.target.value)
  }

  function handleDescription(event) {
    setDescription(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    // setName('')

    addEvent(
      {
        event_id: id,
        name: name,
        date: date,
        time: time,
        max: max,
        description: description,
        status: 'upcoming',
        coords: [selectPosition.lat, selectPosition.lon],
      },
      token
    )
      .then(() => {
        dispatch(fetchEvent(id))
        setVisible(false)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }
  if (selectPosition != null) {
    //
    //console.log('letss gooo position', selectPosition.lat, selectPosition.lon)
  }

  return (
    // Container for form

    <>
      <div className=" w-[85vw] self-start text-2xl font-semibold border-b border-black border-solid mb-4">
        <h1 className="mb-4">Create Event</h1>
      </div>
      {/* title goes here */}

      <form className="flex flex-col items-center">
        <div className=" mb-2">
          {/* image and title goes here */}
          <input className="" placeholder="Event Title" onChange={handleName} />
        </div>

        <div className="flex flex-col items-start lg:flex-row space-y-2">
          {/* date time and max container */}
          <input
            type="date"
            className="date-input"
            placeholder="Event Date"
            onChange={handleDate}
          />
          <input
            type="time"
            className="time-input"
            placeholder="Event Time"
            onChange={handleTime}
          />
          <input
            className="max-input"
            placeholder="Max Participants"
            onChange={handleMax}
          />
        </div>

        {/* container with map and search */}

        <div className="w-[80vw] h-auto flex flex-col items-center">
          <Map selectPosition={selectPosition} />

          <SearchBox
            setSelectPosition={setSelectPosition}
            selectPosition={selectPosition}
          />
        </div>

        <input
          className="description-input"
          placeholder="Event Description"
          onChange={handleDescription}
        />
        <button
          className="submit-button"
          placeholder="Submit"
          onClick={handleSubmit}
        >
          Create Event
        </button>
      </form>
    </>
  )
}

export default AddEvent
