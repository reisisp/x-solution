import {
  createSlice,
} from "@reduxjs/toolkit";

export const initialState: {
  data: string;
} = {
  data: "asd",
};

export const merchantModel = createSlice({
  name: "merchant",
  initialState,
  reducers: {
  },
});

export const reducer = merchantModel.reducer;