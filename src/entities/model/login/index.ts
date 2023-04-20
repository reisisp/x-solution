import {
  createSlice,
} from "@reduxjs/toolkit";
import { UserType } from "shared/api";

const initialState: {
  status: number;
  loggedSrv: UserType[]
} = {
  status: -1,
  loggedSrv: []
};

export const loginModel = createSlice({
  name: "login",
  initialState,
  reducers: {
  },
});
