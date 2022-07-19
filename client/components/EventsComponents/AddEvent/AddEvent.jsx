import { imageOverlay } from 'leaflet'
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
  const [category, setCategory] = useState('')
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

  function handleCategory(event) {
    setCategory(event.target.value)
  }

  function handleImage(event) {
    const img = event.target.value.replace(/\s/g, '')
    setImage(`${img}.jpg`)
  }

  function handleSubmit(event) {
    event.preventDefault()
    addEvent(
      {
        event_id: id,
        name: name,
        date: date,
        time: time,
        max: max,
        description: description,
        status: 'upcoming',
        coordsX: JSON.parse(selectPosition.lat),
        coordsY: JSON.parse(selectPosition.lon),
        category: category,
        IMG: image,
        display_name: selectPosition.display_name,
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
    console.log('letss gooo position', selectPosition.display_name)
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
          <div>
            <select
              placeholder="Category"
              onChange={handleCategory}
              onClick={handleImage}
            >
              <option>Choose category</option>
              <option value="Sports" name="Sports">
                Sports
              </option>
              <option value="Card Game" name="CardGame">
                Card Game
              </option>
              <option value="Casual Game" name="CasualGame">
                Casual Game
              </option>
              <option value="Video Game" name="VideoGame">
                Video Game
              </option>
              <option value="Music" name="Music">
                Music
              </option>
              <option value="Lunch" name="Lunch">
                Food
              </option>
              <option value="Exercise" name="Exercise">
                Exercise
              </option>
              <option value="Arts" name="Arts">
                Arts
              </option>
              <option value="Social" name="Social">
                Social
              </option>
              <option value="Corporate" name="Corporate">
                Corporate
              </option>
              <option value="Networking" name="Networking">
                Networking
              </option>
            </select>
          </div>
          <input
            className="border rounded-md"
            placeholder="Event Description"
            onChange={handleDescription}
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
          className="my-10 mx-auto  text-white bg-sky-500 hover:bg-sky-400 w-[200px] h-[40px] shadow-xl rounded-md p-2 lg:w-[12vw] lg:h-[5vh]"
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
