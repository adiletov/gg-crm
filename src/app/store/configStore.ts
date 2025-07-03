import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { GlobalApi } from "./api/globalApi";
import auth from "@/modules/auth/store/authSlice";
import { useSelector, type TypedUseSelectorHook } from "react-redux";
import { persistStore } from "redux-persist";

const rootReducer = combineReducers({
  [GlobalApi.reducerPath]: GlobalApi.reducer,
  auth,
});


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(GlobalApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
