import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { SubordinatesType, UserType } from '../../api/api-types'
import { TreeNodeMod } from '../../types'

interface payloadType {
  employeesList: TreeNodeMod[]
  isFailed: boolean
  isRequest: boolean
  isSuccess: boolean
}

const initialState: payloadType = {
  employeesList: [],
  isFailed: false,
  isRequest: false,
  isSuccess: false,
}

const employeesList = createSlice({
  name: 'employeesList',
  initialState,
  reducers: {
    setEmployeesList: (state, action: PayloadAction<TreeNodeMod[]>) => {
      state.employeesList = action.payload
    },
    setEmployeesListIsSuccess: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload
    },
    setEmployeesListIsRequest: (state, action: PayloadAction<boolean>) => {
      state.isRequest = action.payload
    },
    setEmployeesListIsFailed: (state, action: PayloadAction<boolean>) => {
      state.isFailed = action.payload
    },
  },
})

export const {
  setEmployeesList,
  setEmployeesListIsSuccess,
  setEmployeesListIsRequest,
  setEmployeesListIsFailed,
} = employeesList.actions

// Other code such as selectors can use the imported `RootState` type
//export const selectActiveUser = (state: RootState) => state.activeUser

export default employeesList.reducer
