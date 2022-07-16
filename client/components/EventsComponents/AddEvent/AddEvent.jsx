import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {  fetchEvent } from '../../../slices/AddEvent';
import { addEvent } from '../../apiFuncs/eventApi';




function AddEvent() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [max, setMax] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const {id} = useParams()

  // const eventData = useSelector((state) => state.events)
  // const eventslah =  eventData.find((data) => data.event_id === Number(id))

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
  
    addEvent({
      event_id: id,
      name: name,
      date: date,
      time: time,
      max: max,
      description: description,
      status: 'current',

    })
    .then(() => {
      dispatch(fetchEvent(id))
    })
    .catch((err) =>{
      console.error(err.message)
    })

  }

  return(
    <>
    <h1>ADD NEW EVENT</h1>
      <form className="input-wrapper">
        <input
          className="event-input"
          placeholder="Event Title"
          onChange={handleName}
          />
        <input type="date"
          className='date-input'
          placeholder="Event Date"
          onChange={handleDate}
          />
        <input type="time"
          className='time-input'
          placeholder="Event Time"
          onChange={handleTime}
          />
        <input
          className='max-input'
          placeholder="Max Participants"
          onChange={handleMax}
          />
        <input
          className='description-input'
          placeholder="Event Description"
          onChange={handleDescription}
          />
        <button
          className='submit-button'
          placeholder='Submit'
          onClick={handleSubmit} 
          >Add Event</button>  
      </form>
    </>
  )
 
}

export default AddEvent