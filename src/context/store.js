import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/api";
import wishlist from "./slice/wishlist";
import cartSlice from "./slice/cartSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlist,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
