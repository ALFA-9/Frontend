import { configureStore } from '@reduxjs/toolkit'
import activeUser from './slices/active-user-slice'

export const store = configureStore({
  reducer: { activeUser },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
