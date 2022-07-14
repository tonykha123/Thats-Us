import request from "superagent";

export const getAllEvents = async () => {
  const events = await request.get('/api/v1/events')
  try {
    console.log(events.body.events)
    return events.body.events
  }
  catch (err) {
    console.error('getAllEvents failed')
  }
}
