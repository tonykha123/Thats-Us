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
    console.log(newEvent.body)
    return newEvent.body
  } catch (error) {
    console.error(error.message)
  }
}
