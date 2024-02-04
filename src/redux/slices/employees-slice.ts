import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { EmployeeType } from "../../api/api-types";

interface IMyUnitEmployees {
  employees: EmployeeType[];
  isRequest: boolean;
  isSuccess: boolean;
  isFailed: boolean;
  errorMessage: string;
}

const initialState: IMyUnitEmployees = {
  employees: [],
  isRequest: false,
  isSuccess: false,
  isFailed: false,
  errorMessage: "",
};

export const myUnitEmployees = createSlice({
  name: "myUnitEmployees",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setMyUnitEmployees: (state, action: PayloadAction<EmployeeType[]>) => {
      state.employees = action.payload;
    },
    setIsRequestMyUnitEmployees: (state, action: PayloadAction<boolean>) => {
      state.isRequest = action.payload;
    },
    setIsSuccessMyUnitEmployees: (state, action: PayloadAction<boolean>) => {
      state.isSuccess = action.payload;
    },
    setIsFailedMyUnitEmployees: (state, action: PayloadAction<boolean>) => {
      state.isFailed = action.payload;
    },
    setErrorMessageMyUnitEmployees: (state, action: PayloadAction<string>) => {
      state.errorMessage = action.payload;
    },
  },
});

export const {
  setMyUnitEmployees,
  setIsRequestMyUnitEmployees,
  setIsSuccessMyUnitEmployees,
  setIsFailedMyUnitEmployees,
  setErrorMessageMyUnitEmployees,
} = myUnitEmployees.actions;

export const selectMyUnitEmployees = (state: RootState) =>
  state.myUnitEmployees;

export default myUnitEmployees.reducer;
