import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import { UserType } from '../../api/api-types'
import { defaultUser } from '../../utils/const-default-user'

// Define a type for the slice state

interface ActiveUserType {
  user: UserType
}

const initialState: ActiveUserType = {
  user: defaultUser,
}

const activeEmployee = createSlice({
  name: 'activeEmployee',
  initialState,
  reducers: {
    setActiveEmployee: (state, action: PayloadAction<ActiveUserType>) => {
      state.user = action.payload.user
    },
  },
})

export const { setActiveEmployee } = activeEmployee.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectActiveUser = (state: RootState) => state.activeUser

export default activeEmployee.reducer
