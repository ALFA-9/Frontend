import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getIdpDataById } from '../../api/api'
import { TaskType } from '../../api/api-types'

interface IInitialState {
  title: string
  tasks: TaskType[]
  isFailed: boolean
  isRequest: boolean
  isSuccess: boolean
}

const initialState: IInitialState = {
  title: '',
  tasks: [],
  isRequest: false,
  isSuccess: false,
  isFailed: false,
}

export const fetchIdpDataById = createAsyncThunk('fetch/idp', getIdpDataById)

const idpTasks = createSlice({
  name: 'idp',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchIdpDataById.pending, state => {
        state.isRequest = true
        state.isSuccess = false
        state.isFailed = false
      })
      .addCase(fetchIdpDataById.fulfilled, (state, action) => {
        state.title = action.payload.data.title
        state.tasks = action.payload.data.tasks
        state.isRequest = false
        state.isSuccess = true
        state.isFailed = false
      })
      .addCase(fetchIdpDataById.rejected, (state, action) => {
        state.isRequest = false
        state.isSuccess = false
        state.isFailed = true
        console.log(action.error)
      })
  },
})

export default idpTasks.reducer
