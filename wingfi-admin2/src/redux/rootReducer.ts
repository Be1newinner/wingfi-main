import { combineReducers } from "@reduxjs/toolkit";

import auth from "./reducers/auth";
import order from "./reducers/order";
import analysis from "./reducers/analysis";
import bestSeller from "./reducers/bestSeller";
import products from "./reducers/products";
import revenue from "./reducers/revenue";
import notification from "./reducers/notification";
import report from "./reducers/report";
import category from "./reducers/category";

export const rootReducer = combineReducers({
  auth,
  order,
  analysis,
  bestSeller,
  products,
  revenue,
  notification,
  report,
  category,
});

export type RootState = ReturnType<typeof rootReducer>;
