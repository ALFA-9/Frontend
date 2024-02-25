import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../../api/api-types'
import { defaultUser } from '../../utils/const-default-user'

interface ActiveUserType {
  user: UserType
  isRequest: boolean
  isSuccess: boolean
  isFailed: boolean
  errMessage: string
}

export const initialState: ActiveUserType = {
  user: defaultUser,
  isRequest: false,
  isSuccess: false,
  isFailed: false,
  errMessage: '',
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
  },
})

export const {
  setActiveUser,
  setIsRequestSetActiveUser,
  setIsSuccessSetActiveUser,
  setIsFailedSetActiveUser,
  setErrMessageSetActiveUser,
} = activeUser.actions

export default activeUser.reducer
