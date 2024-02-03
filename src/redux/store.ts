import { configureStore } from "@reduxjs/toolkit";
import activeUser from "./slices/active-user-slice";
import myUnitEmployees from "./slices/employees-slice";

export const store = configureStore({
  reducer: { activeUser, myUnitEmployees },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
