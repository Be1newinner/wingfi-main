import { combineReducers } from "@reduxjs/toolkit";

import auth from "./reducers/auth";
import orderReducer from "./reducers/order";
import productsReducer from "./reducers/products";

import { ORDER_SLICE, PRODUCT_SLICE } from "./constants/slices";

export const rootReducer = combineReducers({
  auth,
  [ORDER_SLICE]: orderReducer,
  [PRODUCT_SLICE]: productsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
