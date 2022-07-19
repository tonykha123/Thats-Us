import request from 'superagent'

export const getAllEvents = async () => {
  const events = await request.get('/api/v1/events')
  try {
    return events.body.events
  } catch (err) {
    console.error('getAllEvents failed')
  }
}

export async function addEvent(event) {
    const newEvent = await request.post('/api/v1/events').send(event)
  try {
    return newEvent.body
  } catch (error) {
    console.error(error.message)
  }
}

export const getEvtById = async (id) => {
  const event = await request.get(`/api/v1/events/${id}`)
  try {
    return event.body[0]
  } catch (err) {
    console.error(err.message)
  }
}

export const attendEvent = async (eventId, updatedAttendees) => {
  try {
    console.log(eventId, updatedAttendees, 'eventId + updatedAttendees')
    const updatedAttendingEvent = await request.patch(`/api/v1/events/attend/${eventId}`).send({updatedAttendees})
    console.log(updatedAttendingEvent.body, 'apifunc')
    return updatedAttendingEvent.body
  } catch (err) {
    console.error(err.message)
  }
}