import { combineReducers } from "@reduxjs/toolkit";
import { addressReducer as address } from "./reducers/address";
import { cartReducer as cart } from "./reducers/cart";
import auth from "./reducers/auth";

export const rootReducer = combineReducers({
  address,
  cart,
  auth,
});

export type RootState = ReturnType<typeof rootReducer>;
