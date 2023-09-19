import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./features/cart/cartSlice";
import {api} from './api/apiSlice'
const store = configureStore({
  reducer: {
  [api.reducerPath] = api.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
