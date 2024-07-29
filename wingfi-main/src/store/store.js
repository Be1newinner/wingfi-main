import { configureStore } from "@reduxjs/toolkit";
import {
  AllProductsSlice,
  AddressSlice,
  CartSlice,
  WishlistSlice,
} from "./Slice";

export const store = configureStore({
  reducer: {
    AllProducts: AllProductsSlice.reducer,
    Cart: CartSlice.reducer,
    Wishlist: WishlistSlice.reducer,
    // Orders: OrdersSlice.reducer,
    Address: AddressSlice.reducer,
  },
});
