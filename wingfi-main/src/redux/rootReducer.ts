import { combineReducers } from "@reduxjs/toolkit";
import { addressReducer as address } from "./reducers/address";
import cart from "./reducers/cart";
import auth from "./reducers/auth";

export const rootReducer = combineReducers({
  address,
  cart: cart.reducer,
  auth,
});

export type RootState = ReturnType<typeof rootReducer>;
