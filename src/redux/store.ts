import { configureStore } from '@reduxjs/toolkit'
import activeUser from './slices/active-user-slice'
import employeesList from './slices/head-employees-slice'

export const store = configureStore({
  reducer: { activeUser, employeesList },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
