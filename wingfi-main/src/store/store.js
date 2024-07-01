import { configureStore } from "@reduxjs/toolkit";
import { AllProductsSlice } from "./Slice/AllProductsSlice";
import { CartSlice } from "./Slice/CartSlice";
import { WishlistSlice } from "./Slice/WishlistSlice";
import { AddressSlice } from "./Slice/AddressSlice";

export const store = configureStore({
  reducer: {
    AllProducts: AllProductsSlice.reducer,
    Cart: CartSlice.reducer,
    Wishlist: WishlistSlice.reducer,
    // Orders: OrdersSlice.reducer,
    Address: AddressSlice.reducer,
    // Authentication: AuthSlice.reducer,
  },
});
