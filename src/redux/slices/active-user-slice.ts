import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { UserType } from '../../api/api-types'
import { defaultUser } from '../../utils/const-default-user'

// Define a type for the slice state

interface ActiveUserType {
  user: UserType
  isRequest: boolean
  isSuccess: boolean
  isFailed: boolean
  errMessage: string
  usersTest?: string
}

export const initialState: ActiveUserType = {
  user: defaultUser,
  isRequest: false,
  isSuccess: false,
  isFailed: false,
  errMessage: '',
  usersTest: '',
}

const activeUser = createSlice({
  name: 'activeUser',
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload
    },
    setIsRequestSetActiveUser: (state, action: PayloadAction<boolean>) => {
      state.isRequest = action.payload
    },
    setIsSuccessSetActiveUser: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload
    },
    setIsFailedSetActiveUser: (state, action: PayloadAction<boolean>) => {
      state.isFailed = action.payload
    },
    setErrMessageSetActiveUser: (state, action: PayloadAction<string>) => {
      state.errMessage = action.payload
    },
    setUsersTest: (state, action: PayloadAction<string>) => {
      console.log(action.payload)
      state.usersTest = action.payload
    },
  },
})

export const {
  setActiveUser,
  setIsRequestSetActiveUser,
  setIsSuccessSetActiveUser,
  setIsFailedSetActiveUser,
  setErrMessageSetActiveUser,
  setUsersTest,
} = activeUser.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectActiveUser = (state: RootState) => state.activeUser

export default activeUser.reducer
