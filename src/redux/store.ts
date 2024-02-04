import { configureStore } from '@reduxjs/toolkit'
import activeUser from './slices/active-user-slice'
import myUnitEmployees from './slices/employees-slice'
import employeesList from './slices/head-employees-slice'
import activeEmployee from './slices/head-employees-employee-slice'
import idpTasks from './slices/idp-tasks-slice'

export const store = configureStore({
  reducer: { activeUser, myUnitEmployees, employeesList, activeEmployee, idpTasks },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
