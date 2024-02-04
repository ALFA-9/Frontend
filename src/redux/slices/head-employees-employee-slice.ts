import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { UserType } from "../../api/api-types";
import { defaultUser } from "../../utils/const-default-user";

// Define a type for the slice state

interface ActiveUserType {
  user: UserType;
  isRequest: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  errorMessage: string;
}

const initialState: ActiveUserType = {
  user: defaultUser,
  isRequest: false,
  isSuccess: false,
  isFailed: false,
  errorMessage: "",
};

const activeEmployee = createSlice({
  name: "activeEmployee",
  initialState,
  reducers: {
    setActiveEmployee: (state, action: PayloadAction<{ user: UserType }>) => {
      state.user = action.payload.user;
    },
    setIsRequestActiveEmployee: (state, action: PayloadAction<boolean>) => {
      state.isRequest = action.payload;
    },
    setIsSuccessActiveEmployee: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload;
    },
    setIsFailedActiveEmployee: (state, action: PayloadAction<boolean>) => {
      state.isFailed = action.payload;
    },
    setErrorMessageActiveEmployee: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  setActiveEmployee,
  setIsRequestActiveEmployee,
  setIsSuccessActiveEmployee,
  setIsFailedActiveEmployee,
  setErrorMessageActiveEmployee,
} = activeEmployee.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectActiveUser = (state: RootState) => state.activeUser

export default activeEmployee.reducer;
