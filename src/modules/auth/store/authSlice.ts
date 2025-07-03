import { createSlice } from "@reduxjs/toolkit";
import type { ISliceState } from "../types/auth.types";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/es/storage";

const authPersistConfig = {
  key: "auth",
  storage,
};

const initialState: ISliceState = {
  auth: null,
  isAuth: false,
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
      state.isAuth = !!action.payload;
    },
  },
});

export const { setAuth } = auth.actions;
export default persistReducer(authPersistConfig, auth.reducer);
