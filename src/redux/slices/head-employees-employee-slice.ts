import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../../api/api-types'
import { defaultUser } from '../../utils/const-default-user'
import { IdpStatuses } from '../../types'


interface ActiveUserType {
  user: UserType
  isRequest: boolean
  isSuccess: boolean
  isFailed: boolean
  errorMessage: string
}

const initialState: ActiveUserType = {
  user: defaultUser,
  isRequest: false,
  isSuccess: false,
  isFailed: false,
  errorMessage: '',
}

interface handleApproveClick {
  id: number
  status_idp: IdpStatuses
}

const activeEmployee = createSlice({
  name: 'activeEmployee',
  initialState,
  reducers: {
    setActiveEmployee: (state, action: PayloadAction<{ user: UserType }>) => {
      state.user = action.payload.user
    },
    setIsRequestActiveEmployee: (state, action: PayloadAction<boolean>) => {
      state.isRequest = action.payload
    },
    setIsSuccessActiveEmployee: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload
    },
    setIsFailedActiveEmployee: (state, action: PayloadAction<boolean>) => {
      state.isFailed = action.payload
    },
    setErrorMessageActiveEmployee: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload
    },
    patcIdpActiveEmployee: (
      state,
      action: PayloadAction<handleApproveClick>
    ) => {
      state.user.idps = state.user.idps.map((item) =>
        item.id === action.payload.id
          ? { ...item, status_idp: action.payload.status_idp }
          : item
      )
    },
  },
})

export const {
  setActiveEmployee,
  setIsRequestActiveEmployee,
  setIsSuccessActiveEmployee,
  setIsFailedActiveEmployee,
  setErrorMessageActiveEmployee,
  patcIdpActiveEmployee,
} = activeEmployee.actions


export default activeEmployee.reducer
