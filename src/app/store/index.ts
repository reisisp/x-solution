import { configureStore } from "@reduxjs/toolkit";

import { merchantModel } from "entities/merchant";

export const store = configureStore({
  reducer: {
    merchant: merchantModel.reducer,
  },
});