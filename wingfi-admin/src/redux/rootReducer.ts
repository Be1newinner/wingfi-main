import { combineReducers } from "@reduxjs/toolkit";

import auth from "./reducers/auth";
import orderReducer from "./reducers/order";
import analysis from "./reducers/analysis";
import bestSeller from "./reducers/bestSeller";
import productsReducer from "./reducers/products";
import revenue from "./reducers/revenue";
import notification from "./reducers/notification";
import report from "./reducers/report";
import category from "./reducers/category";

import { ORDER_SLICE, PRODUCT_SLICE } from "./constants/slices";

export const rootReducer = combineReducers({
  auth,
  [ORDER_SLICE]: orderReducer,
  analysis,
  bestSeller,
  [PRODUCT_SLICE]: productsReducer,
  revenue,
  notification,
  report,
  category,
});

export type RootState = ReturnType<typeof rootReducer>;
