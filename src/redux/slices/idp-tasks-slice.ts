import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getIdpDataById } from '../../api/api'
import { TaskType } from '../../api/api-types'
import { PayloadAction } from '@reduxjs/toolkit'

interface IComment {
  task: number
  employee: string
  employee_image?: string
  employee_post: string
  pub_date: string
  body: string
}

interface IInitialState {
  title: string
  tasks: TaskType[]
  isRequest: boolean
  isSuccess: boolean
  isFailed: boolean
  errorMessage: string
}

const initialState: IInitialState = {
  title: '',
  tasks: [],
  isRequest: false,
  isSuccess: false,
  isFailed: false,
  errorMessage: '',
}

export const fetchIdpDataById = createAsyncThunk('fetch/idp', getIdpDataById)

const idpTasksSlice = createSlice({
  name: 'idp',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<IComment>) => {
      state.tasks = state.tasks.map(item =>
        item.id === action.payload.task
          ? {
              ...item,
              comments: [
                {
                  employee: action.payload.employee,
                  employee_image: action.payload.employee_image,
                  employee_post: action.payload.employee_post,
                  pub_date: action.payload.pub_date,
                  body: action.payload.body,
                },
                ...item.comments,
              ],
            }
          : item,
      )
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchIdpDataById.pending, state => {
        state.isRequest = true
        state.isSuccess = false
        state.isFailed = false
        state.errorMessage = ''
      })
      .addCase(fetchIdpDataById.fulfilled, (state, action) => {
        state.title = action.payload.data.title
        state.tasks = action.payload.data.tasks
        state.isRequest = false
        state.isSuccess = true
        state.isFailed = false
        state.errorMessage = ''
      })
      .addCase(fetchIdpDataById.rejected, (state, action) => {
        state.isRequest = false
        state.isSuccess = false
        state.isFailed = true
        state.errorMessage = action.error.message
        console.log(action.error)
      })
  },
})

export const { addComment } = idpTasksSlice.actions

export default idpTasksSlice.reducer
