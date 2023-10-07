import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./features/cart/cartSlice";
import { api } from "./api/apiSlice";
import userReducer from "./user/userSlice";
import filterReducer from "./filterSlice";
const store = configureStore({
  reducer: {
    search: filterReducer,

    user: userReducer,

    [api.reducerPath]: api.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
