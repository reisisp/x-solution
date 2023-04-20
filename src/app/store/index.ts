import { configureStore } from "@reduxjs/toolkit";

import { merchantModel, loginModel } from "entities/model";

export const store = configureStore({
  reducer: {
    merchantState: merchantModel.reducer,
    loginState: loginModel.reducer
  },
});