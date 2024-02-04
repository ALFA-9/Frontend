import { configureStore } from '@reduxjs/toolkit'
import activeUser from './slices/active-user-slice'
import myUnitEmployees from './slices/employees-slice'
import employeesList from './slices/head-employees-slice'
import activeEmployee from './slices/head-employees-employee-slice'

export const store = configureStore({
  reducer: { activeUser, myUnitEmployees, employeesList, activeEmployee },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
