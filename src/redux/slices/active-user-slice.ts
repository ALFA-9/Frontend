import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { UserType } from '../../api/api-types'

// Define a type for the slice state

interface ActiveUserType {
  user: UserType
}

const initialState: ActiveUserType = {
  user: {
    id: 0,
    department: 0,
    email: 'example@mail.ru',
    first_name: 'John',
    last_name: 'Doe',
    patronymic: '007',
    grade: 0,
    post: 0,
  },
}

export const activeUser = createSlice({
  name: 'activeUser',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<ActiveUserType>) => {
      state.user = { ...state.user, ...action.payload.user }
    },
  },
})

export const { setActiveUser } = activeUser.actions

// Other code such as selectors can use the imported `RootState` type
export const selectActiveUser = (state: RootState) => state.activeUser

export default activeUser.reducer
