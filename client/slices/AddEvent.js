import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addEvent } from '../components/apiFuncs/eventApi'

export const addNewEvent = createAsyncThunk(
  'events/addEvent',
  async (event) => {
    return await addEvent(event)
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
