import {
  createSlice,
} from "@reduxjs/toolkit";

const initialState: {
  data: string;
} = {
  data: "smth",
};

export const merchantModel = createSlice({
  name: "merchant",
  initialState,
  reducers: {
  },
});
