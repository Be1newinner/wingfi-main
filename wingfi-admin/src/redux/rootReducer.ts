import { combineReducers } from "@reduxjs/toolkit";

import auth from "./reducers/auth";
import orderReducer from "./reducers/order";
import productsReducer from "./reducers/products";
import usersReducer from "./reducers/users";

import { ORDER_SLICE, PRODUCT_SLICE, USERS_SLICE } from "./constants/slices";

export const rootReducer = combineReducers({
  auth,
  [ORDER_SLICE]: orderReducer,
  [PRODUCT_SLICE]: productsReducer,
  [USERS_SLICE]: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
