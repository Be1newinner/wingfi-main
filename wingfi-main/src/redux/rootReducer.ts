import { combineReducers } from "@reduxjs/toolkit";

import { addressReducer as address } from "./reducers/address";
import cart from "./reducers/cart";
import auth from "./reducers/auth";
import order from "./reducers/order";

export const rootReducer = combineReducers({
  address,
  cart,
  auth,
  order,
});

export type RootState = ReturnType<typeof rootReducer>;
