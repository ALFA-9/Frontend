import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { SubordinatesType, UserType } from '../../api/api-types'
import { TreeNodeMod } from '../../types'


interface payloadType {
  employeesList: TreeNodeMod[]
}

const initialState: payloadType = {
  employeesList: [],
}

const employeesList = createSlice({
  name: 'employeesList',
  initialState,
  reducers: {
    setEmployeesList: (state, action: PayloadAction<payloadType>) => {
      state.employeesList = action.payload.employeesList
    },
  },
})

export const { setEmployeesList } = employeesList.actions

// Other code such as selectors can use the imported `RootState` type
//export const selectActiveUser = (state: RootState) => state.activeUser

export default employeesList.reducer
