import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addEvent, getAllEvents } from '../components/apiFuncs/eventApi'

export const addNewEvent = createAsyncThunk(
  'events/addEvent',
  async (event) => {
    return await addEvent(event)
  }
)

export const fetchEvent = createAsyncThunk(
  'event/fetchEvent',
  async (event_id) => {
    return await getAllEvents(event_id)
  }
)

const slice = createSlice({
  name: 'events',
  initialState: [],
  reducers: {},
  extraReducers: {
    [addEvent.fulfilled]: (state, { payload }) => payload,
  },
})

export default slice.reducer
